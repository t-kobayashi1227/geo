import { FaArrowRightLong } from "react-icons/fa6";

export function ArrowCircle({
  className = "",
  size = "size-[33px]",
  bgColor = "bg-white",
  iconColor = "text-black",
}: {
  className?: string;
  size?: string;
  bgColor?: string;
  iconColor?: string;
}) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full ${size} ${bgColor} ${iconColor} ${className}`}
      aria-hidden="true"
    >
      <FaArrowRightLong color="currentColor" size={16} />
    </span>
  );
}
