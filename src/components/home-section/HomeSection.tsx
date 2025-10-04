import { cn } from "../../utils/cn";

interface Props {
  children: React.ReactNode;
  className?: string;
}
export default function HomeSection({ children, className }: Props) {
  return (
    <div
      className={cn(
        "flex-1 w-full flex md:flex-row flex-col items-center  justify-around ",
        className
      )}
    >
      {children}
    </div>
  );
}
