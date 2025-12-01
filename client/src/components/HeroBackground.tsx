export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Неоновая сетка */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(168,85,247,.2)_25%,rgba(168,85,247,.2)_26%,transparent_27%,transparent_74%,rgba(168,85,247,.2)_75%,rgba(168,85,247,.2)_76%,transparent_77%,transparent)] bg-[length:50px_50px]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(168,85,247,.2)_25%,rgba(168,85,247,.2)_26%,transparent_27%,transparent_74%,rgba(168,85,247,.2)_75%,rgba(168,85,247,.2)_76%,transparent_77%,transparent)] bg-[length:50px_50px]" />
      </div>

      {/* Силуэты людей слева */}
      <svg className="absolute left-4 sm:left-8 md:left-16 bottom-0 w-24 sm:w-32 md:w-40 h-64 sm:h-80 opacity-40 neon-glow-pink" viewBox="0 0 100 240" preserveAspectRatio="none">
        {/* Человек 1 */}
        <circle cx="30" cy="30" r="15" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M 30 50 Q 25 70 20 100 M 30 50 Q 35 70 40 100 M 30 60 L 15 90 M 30 60 L 45 90 M 15 90 L 10 140 M 45 90 L 50 140" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>

      {/* Силуэты людей справа */}
      <svg className="absolute right-4 sm:right-8 md:right-16 bottom-0 w-24 sm:w-32 md:w-40 h-64 sm:h-80 opacity-40 neon-glow-cyan" viewBox="0 0 100 240" preserveAspectRatio="none">
        {/* Человек 2 */}
        <circle cx="70" cy="35" r="18" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M 70 55 Q 60 75 55 110 M 70 55 Q 80 75 85 110 M 55 110 L 40 150 M 85 110 L 100 150" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>

      {/* Центральная фигура в маске - силуэт */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg className="w-32 sm:w-40 md:w-48 h-48 sm:h-56 md:h-64 opacity-60 neon-glow-purple animate-pulse" viewBox="0 0 200 240" preserveAspectRatio="xMidYMid meet">
          {/* Голова */}
          <circle cx="100" cy="50" r="35" fill="none" stroke="url(#neonGradient)" strokeWidth="3" />
          
          {/* Маска */}
          <path d="M 75 40 Q 75 35 85 35 L 115 35 Q 125 35 125 40 L 125 60 Q 125 65 115 65 L 85 65 Q 75 65 75 60 Z" fill="none" stroke="url(#neonGradient)" strokeWidth="3" />
          
          {/* Глаза маски - светящиеся */}
          <circle cx="85" cy="48" r="6" fill="none" stroke="url(#neonGradient)" strokeWidth="2" className="neon-glow" />
          <circle cx="115" cy="48" r="6" fill="none" stroke="url(#neonGradient)" strokeWidth="2" className="neon-glow" />
          
          {/* Тело */}
          <path d="M 100 85 L 100 150 M 70 110 L 130 110 M 70 110 L 50 180 M 130 110 L 150 180" stroke="url(#neonGradient)" strokeWidth="3" fill="none" strokeLinecap="round" />
          
          {/* Градиент неона */}
          <defs>
            <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="50%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Неоновые полосы сверху */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-purple-600/20 via-pink-500/10 to-transparent neon-glow-top" />

      {/* Неоновые частицы */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white neon-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
