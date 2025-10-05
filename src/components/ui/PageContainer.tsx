import { cn } from "../../utils/cn";

interface Props {
  className?: string;
  children: React.ReactNode;
}
export default function PageContainer({ className, children }: Props) {
  return (
    <div
      className={cn(
        " h-fit relative pb-10 will-change-[transform,filter] backface-hidden",
        className
      )}
    >
      {children}
    </div>
  );
}
