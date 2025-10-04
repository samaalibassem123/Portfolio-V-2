import type React from "react";
import { cn } from "../../utils/cn";

interface Props {
  children: React.ReactNode;
  className?: string;
}
export default function Title({ children, className }: Props) {
  return (
    <div className={cn("text-7xl  tracking-wide font-vollkorn", className)}>
      {children}
    </div>
  );
}
