import type React from "react";
import Title from "./Title";
import { cn } from "../../utils/cn";

interface Props {
  className?: string;
  children: React.ReactNode;
}
export default function PageTitle({ className, children }: Props) {
  return (
    <Title
      className={cn(
        "p-3 font-manrope motion-scale-in-[0.5] motion-opacity-in-[0%] motion-delay-1000",
        className
      )}
    >
      {children}
      <div className="w-[1px] h-[100px] bg-black mx-7  top-10   rotate-90"></div>
    </Title>
  );
}
