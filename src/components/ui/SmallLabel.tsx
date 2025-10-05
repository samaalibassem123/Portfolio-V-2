import { cn } from "../../utils/cn";

interface Props {
  children: React.ReactNode;
  className?: string;
  url?: string;
}

export default function SmallLabel({ children, className, url }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      className={cn(
        "text-[#565656]  hover:text-white hover:bg-[#565656] transition-all select-none cursor-pointer text-nowrap font-manrope w-fit h-fit text-sm  border border-[#565656] rounded-[18px] px-[10px] py-[8px]",
        className
      )}
    >
      {children}
    </a>
  );
}
