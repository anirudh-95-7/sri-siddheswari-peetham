export function DecorativeDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center my-12 ${className}`}>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-primary/30"></div>
      <div className="px-6">
        <svg width="60" height="60" viewBox="0 0 60 60" className="text-secondary">
          <circle cx="30" cy="30" r="4" fill="currentColor" />
          <circle cx="30" cy="30" r="12" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="30" cy="30" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <path
            d="M 30 10 L 32 28 L 30 28 L 28 28 Z M 50 30 L 32 32 L 32 30 L 32 28 Z M 30 50 L 28 32 L 30 32 L 32 32 Z M 10 30 L 28 28 L 28 30 L 28 32 Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent via-primary/30 to-primary/30"></div>
    </div>
  )
}
