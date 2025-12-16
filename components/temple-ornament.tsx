export function TempleOrnament({ position = "top" }: { position?: "top" | "bottom" }) {
  return (
    <div className={`w-full overflow-hidden ${position === "top" ? "mb-8" : "mt-8"}`}>
      <div className="relative h-16 flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center gap-1">
          {/* Left side pattern */}
          <div className="flex-1 h-1 bg-gradient-to-r from-transparent via-amber-600 to-amber-600" />

          {/* Center ornamental design */}
          <div className="flex items-center gap-2">
            {/* Left petals */}
            {[...Array(3)].map((_, i) => (
              <div
                key={`left-${i}`}
                className="w-8 h-8 rounded-full border-2 border-amber-600 bg-gradient-to-br from-amber-200 to-amber-400"
                style={{
                  transform: `translateX(${-i * 6}px) scale(${1 - i * 0.15})`,
                  opacity: 1 - i * 0.2,
                }}
              />
            ))}

            {/* Center Om or lotus */}
            <div className="relative w-16 h-16 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-4 border-amber-600 bg-gradient-to-br from-amber-100 via-amber-300 to-amber-500 shadow-lg animate-pulse" />
              <span className="relative text-2xl font-bold text-amber-900 shimmer-gold">ॐ</span>
            </div>

            {/* Right petals */}
            {[...Array(3)].map((_, i) => (
              <div
                key={`right-${i}`}
                className="w-8 h-8 rounded-full border-2 border-amber-600 bg-gradient-to-br from-amber-200 to-amber-400"
                style={{
                  transform: `translateX(${i * 6}px) scale(${1 - i * 0.15})`,
                  opacity: 1 - i * 0.2,
                }}
              />
            ))}
          </div>

          {/* Right side pattern */}
          <div className="flex-1 h-1 bg-gradient-to-l from-transparent via-amber-600 to-amber-600" />
        </div>
      </div>
    </div>
  )
}
