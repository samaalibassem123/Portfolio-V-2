import type { Education } from "../../types/education";
import { cn } from "../../utils/cn";
import Title from "../ui/Title";

interface Props {
  className?: string;

  education: Education;
}
export default function EducationCard({ className, education }: Props) {
  return (
    <div
      className={cn(
        " h-fit relative pb-10 will-change-[transform,filter]  backface-hidden space-y-4 px-2",
        className
      )}
    >
      <Title className=" font-manrope font-bold">{education.name}</Title>
      <div className="w-[1px] h-[100px] bg-black mx-3  top-10   rotate-0" />
      <Title className=" font-manrope">{education.schoolname}</Title>
      <Title className=" font-manrope">{education.date}</Title>
    </div>
  );
}
