import { FaArrowRightLong } from "react-icons/fa6"; export function ArrowCircle({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex size-[33px] shrink-0 items-center justify-center rounded-full bg-white text-2xl font-bold text-black ${className}`}
      aria-hidden="true"
    >
      <FaArrowRightLong color="black" size={16} />
    </span>
  );
}
