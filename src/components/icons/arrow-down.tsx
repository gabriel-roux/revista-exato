interface Props {
  className?: string
}

export default function ArrowDown({ className }: Props) {
  return (
    <svg
      width="9"
      height="7"
      viewBox="0 0 9 7"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.65882 5.6915L0.990487 1.54076C0.562658 0.875246 1.0405 0 1.83167 0H7.16833C7.9595 0 8.43734 0.875247 8.00951 1.54076L5.34118 5.6915C4.94754 6.30382 4.05246 6.30382 3.65882 5.6915Z"
        fill="inherit"
      />
    </svg>
  )
}
