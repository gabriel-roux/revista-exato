interface Props {
  className?: string
}

export default function CheckCircle({ className }: Props) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`flex-shrink-0 ${className}`}
    >
      <circle cx="10" cy="10" r="10" fill="inherit" />
      <path
        d="M6.66797 10.4171L8.75171 12.5009L14.1688 7.0838"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
