import { cn } from "../../utils/cn";

interface Props {
  children: React.ReactNode;
  className?: string;
}
export default function Header({ children, className }: Props) {
  return (
    <header
      className={cn(
        "  flex items-center justify-between sm:px-[110px] px-3 py-[35px] border-b border-black w-full",
        className
      )}
    >
      {children}
    </header>
  );
}
