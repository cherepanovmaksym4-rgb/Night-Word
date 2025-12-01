# Design Guidelines: Night Word Interactive 3D Experience

## Design Approach
**Reference-Based Approach**: Drawing inspiration from experimental web experiences and immersive 3D portfolios. Think Awwwards-winning sites, creative agency showcases, and cyberpunk/synthwave aesthetic (similar to Cyberpunk 2077 UI, Spotify's futuristic campaigns, or Bruno Simon's portfolio). The existing code establishes a clear aesthetic direction: immersive 3D night scene with synthwave/vaporwave influences.

## Core Design Principles
1. **Immersion First**: 3D canvas as primary interface, minimal UI overlay
2. **Cyberpunk Elegance**: Futuristic but refined, not cluttered
3. **Guided Discovery**: Subtle cues direct user attention through the experience
4. **Performance**: Smooth 60fps animations, optimized 3D rendering

## Typography
- **Primary Font**: "Orbitron" (Google Fonts) - futuristic, geometric, perfect for headers
- **Secondary Font**: "Inter" - clean, readable for body text
- **Hierarchy**:
  - H1: Orbitron, 3rem-4rem, uppercase, letter-spacing: 0.1em
  - H2: Orbitron, 2rem-2.5rem, medium weight
  - Body: Inter, 1rem-1.125rem, regular weight
  - UI Labels: Inter, 0.875rem, medium weight, uppercase, letter-spacing: 0.05em

## Layout System
**Spacing Units**: Tailwind 4, 6, 8, 12, 16 units for consistent rhythm
- Full-viewport 3D canvas as foundation
- Floating UI elements with strategic positioning
- No traditional grid - elements float over 3D scene
- Z-index layers: Canvas (0), UI overlay (10), Modals (20)

## Component Library

### Navigation Overlay
- Fixed top bar, transparent with backdrop blur
- Logo/brand left, minimal nav links right
- Height: 20 units (h-20)
- Glassmorphism effect: `backdrop-blur-md bg-white/5`

### Hero Section (3D Canvas)
- Full viewport height (100vh) for night scene
- Animated 3D elements as focus
- Floating CTA button over scene:
  - Position: Bottom center, mb-12
  - Glassmorphic style with backdrop blur
  - Glowing border effect to match scene aesthetic

### AI Notification Card
- Slide-in from right
- Width: 400px (fixed), max-height: 500px
- Glassmorphism: `backdrop-blur-lg bg-gradient-to-br from-purple-900/40 to-pink-900/40`
- Border: 1px glowing gradient
- Shadow: Large, colored drop shadow (purple/pink glow)
- Padding: p-6
- Close button: Top-right, icon-only, hover glow effect

### Roadmap Section
- Canvas container: w-full, h-[500px]
- Title above canvas: text-center, mb-8
- Stage labels rendered as 3D sprites (already in code)
- Timeline indicator: Subtle curved line connecting stages (SVG overlay)
- Below canvas: Text descriptions in grid (4 columns on desktop, 2 on tablet, 1 on mobile)

### Feature Cards (if needed)
- Glassmorphic style matching notification aesthetic
- Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Padding: p-8
- Hover: Gentle lift (translate-y-1) and increased glow

### Footer
- Compact, centered layout
- Background: Subtle gradient fade from transparent to dark
- Social icons, links, copyright
- Padding: py-12

## Visual Effects

### Glassmorphism
Apply to all UI overlays:
```
backdrop-blur-md
bg-white/5 (light overlays) or bg-black/20 (darker overlays)
border border-white/10
shadow-2xl with colored glow
```

### Glow Effects
- Buttons: `shadow-[0_0_20px_rgba(255,102,255,0.3)]`
- Active elements: Increase glow on hover/focus
- Border glows: `border-purple-500/50` with blur

### Transitions
- UI elements: `transition-all duration-300 ease-out`
- Notification slide: `transition-transform duration-400 ease-in-out`
- 3D objects: requestAnimationFrame (already implemented)

## Responsive Behavior
- Desktop (lg+): Full experience, side-by-side layouts where needed
- Tablet (md): Maintain 3D canvas, stack UI elements
- Mobile: Smaller canvas (min-height: 400px), simplified 3D scene, vertical stacking

## Icons
- **Heroicons** via CDN (outline style for consistency with modern aesthetic)
- Icon size: w-6 h-6 for standard UI, w-5 h-5 for smaller elements

## Images
**No traditional hero image** - the 3D canvas serves this purpose

**Supporting Images** (if needed for content sections):
- Team/about: Subtle, dark-themed photos with purple/pink color grading overlay
- Feature illustrations: Abstract, geometric, matching the 3D aesthetic
- All images: Rounded corners (rounded-xl), subtle glow border

## Accessibility
- Ensure UI overlays have sufficient contrast against 3D scene
- Keyboard navigation for all interactive elements
- Reduced motion option: Disable 3D rotations, keep static scene
- Alt text for any images used
- ARIA labels for icon-only buttons

## Key Layout Sections
1. **Hero/Canvas**: Full viewport 3D night scene with floating CTA
2. **About Section**: Text overlay or below canvas, glassmorphic card
3. **Roadmap**: Dedicated 500px canvas with 3D timeline + text grid below
4. **Features** (if needed): 3-column grid of glassmorphic cards
5. **Footer**: Compact, centered, subtle background