interface Props {
  className?: string
}

export default function ChatCircles({ className }: Props) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`flex-shrink-0 ${className}`}
    >
      <path
        d="M36.2169 29.2702C37.0985 27.4782 37.5378 25.501 37.4982 23.5043C37.4585 21.5076 36.9411 19.5494 35.989 17.7938C35.037 16.0382 33.6782 14.5362 32.0264 13.4137C30.3746 12.2912 28.4778 11.5809 26.495 11.3421C25.8374 9.80917 24.8797 8.42336 23.6782 7.2663C22.4767 6.10925 21.0559 5.20437 19.4992 4.60497C17.9426 4.00557 16.2818 3.72378 14.6146 3.77619C12.9474 3.82861 11.3076 4.21417 9.79169 4.91017C8.2758 5.60616 6.91455 6.59851 5.78813 7.82875C4.66172 9.05898 3.79291 10.5022 3.23291 12.0734C2.67291 13.6446 2.43304 15.312 2.52743 16.9774C2.62183 18.6427 3.04857 20.2724 3.78253 21.7702L2.58566 25.9608C2.47885 26.3358 2.47417 26.7324 2.5721 27.1097C2.67003 27.487 2.86701 27.8313 3.14266 28.107C3.4183 28.3826 3.7626 28.5796 4.13992 28.6775C4.51724 28.7755 4.91388 28.7708 5.28878 28.664L9.47941 27.4671C10.744 28.088 12.1042 28.491 13.5028 28.6593C14.1696 30.2213 15.1476 31.6311 16.3772 32.8026C17.6069 33.9741 19.0624 34.8827 20.6549 35.473C22.2473 36.0632 23.9434 36.3228 25.6395 36.2359C27.3357 36.1489 28.9963 35.7172 30.52 34.9671L34.7107 36.164C35.0856 36.2708 35.4822 36.2755 35.8595 36.1775C36.2368 36.0796 36.5811 35.8826 36.8568 35.607C37.1324 35.3313 37.3294 34.987 37.4273 34.6097C37.5253 34.2324 37.5206 33.8358 37.4138 33.4608L36.2169 29.2702ZM33.6763 29.4796L34.856 33.6062L30.7294 32.4265C30.415 32.3381 30.0785 32.3762 29.7919 32.5327C27.4877 33.7863 24.7834 34.0853 22.261 33.3653C19.7386 32.6452 17.5997 30.9638 16.3044 28.6827C18.0161 28.5045 19.6724 27.9744 21.1695 27.1258C22.6666 26.2771 23.9722 25.1283 25.0043 23.7512C26.0364 22.3742 26.7728 20.7987 27.1673 19.1236C27.5617 17.4485 27.6058 15.71 27.2966 14.0171C28.7944 14.3701 30.1906 15.064 31.3764 16.0449C32.5622 17.0257 33.5056 18.267 34.1332 19.672C34.7609 21.0771 35.0557 22.6081 34.9949 24.1457C34.9341 25.6834 34.5192 27.1863 33.7825 28.5374C33.6248 28.8253 33.5866 29.1638 33.6763 29.4796Z"
        fill="#FF702E"
      />
    </svg>
  )
}