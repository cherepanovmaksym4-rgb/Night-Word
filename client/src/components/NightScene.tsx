import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export function NightScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const moonRef = useRef<THREE.Mesh | null>(null);
  const starsRef = useRef<THREE.Mesh[]>([]);
  const frameRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [webglError, setWebglError] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebglError(true);
        return;
      }
    } catch {
      setWebglError(true);
      return;
    }

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x1a0033, 0.002);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 50;
    cameraRef.current = camera;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x0d0015, 1);
      containerRef.current.appendChild(renderer.domElement);
      rendererRef.current = renderer;
    } catch {
      setWebglError(true);
      return;
    }

    const moonGeo = new THREE.SphereGeometry(5, 32, 32);
    const moonMat = new THREE.MeshStandardMaterial({
      color: 0xaa66ff,
      emissive: 0x9933ff,
      emissiveIntensity: 0.8,
      roughness: 0.3,
      metalness: 0.1,
    });
    const moon = new THREE.Mesh(moonGeo, moonMat);
    moon.position.set(20, 20, -50);
    scene.add(moon);
    moonRef.current = moon;

    const moonGlow = new THREE.Mesh(
      new THREE.SphereGeometry(6, 32, 32),
      new THREE.MeshBasicMaterial({
        color: 0xaa66ff,
        transparent: true,
        opacity: 0.15,
      })
    );
    moonGlow.position.copy(moon.position);
    scene.add(moonGlow);

    const stars: THREE.Mesh[] = [];
    for (let i = 0; i < 200; i++) {
      const size = Math.random() * 0.3 + 0.1;
      const starGeo = new THREE.SphereGeometry(size, 8, 8);
      const brightness = Math.random() * 0.5 + 0.5;
      const starMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(brightness, brightness, brightness * 1.1),
      });
      const star = new THREE.Mesh(starGeo, starMat);
      star.position.set(
        (Math.random() - 0.5) * 200,
        (Math.random() - 0.5) * 200,
        (Math.random() - 0.5) * 200
      );
      star.userData.twinkleSpeed = Math.random() * 2 + 1;
      star.userData.twinkleOffset = Math.random() * Math.PI * 2;
      stars.push(star);
      scene.add(star);
    }
    starsRef.current = stars;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xff66ff, 1.5, 100);
    pointLight1.position.set(50, 50, 50);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x6600cc, 1, 80);
    pointLight2.position.set(-30, -20, 30);
    scene.add(pointLight2);


    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);

      if (moonRef.current) {
        moonRef.current.rotation.y += 0.001;
        moonGlow.rotation.y += 0.001;
      }

      const time = Date.now() * 0.001;
      starsRef.current.forEach((star) => {
        star.rotation.y += 0.001;
        const twinkle = Math.sin(time * star.userData.twinkleSpeed + star.userData.twinkleOffset);
        (star.material as THREE.MeshBasicMaterial).opacity = 0.5 + twinkle * 0.5;
      });

      if (cameraRef.current) {
        cameraRef.current.position.x += (mouseRef.current.x * 5 - cameraRef.current.position.x) * 0.02;
        cameraRef.current.position.y += (mouseRef.current.y * 5 - cameraRef.current.position.y) * 0.02;
        cameraRef.current.lookAt(0, 0, 0);
      }

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };

    animate();

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
    };
  }, []);

  if (webglError) {
    return (
      <div
        data-testid="night-scene-canvas"
        className="absolute inset-0 z-0 bg-gradient-to-b from-[#1a0033] via-[#0d0015] to-[#0d0015]"
      >
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-50"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      data-testid="night-scene-canvas"
      className="absolute inset-0 z-0"
    />
  );
}
