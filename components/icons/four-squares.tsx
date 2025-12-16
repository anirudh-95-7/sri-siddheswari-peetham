export function FourSquares({ className }: { className?: string }) {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M12 2.5 L16.5 7 L12 11.5 L7.5 7 Z"
            />
            <path
                d="M19 9.5 L23.5 14 L19 18.5 L14.5 14 Z"
            />
            <path
                d="M5 9.5 L9.5 14 L5 18.5 L0.5 14 Z"
            />
            <path
                d="M12 16.5 L16.5 21 L12 25.5 L7.5 21 Z"
            />
        </svg>
    );
}
