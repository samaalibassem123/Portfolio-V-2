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
        " h-fit relative pb-10 will-change-[transform,filter]   backface-hidden space-y-4 px-2",
        className
      )}
    >
      <Title className=" font-manrope font-bold motion-translate-y-in-[0%]  motion-blur-in-[5px] motion-blur-out-0 motion-ease-spring-smooth motion-delay-1500 will-change-[transform,filter] backface-hidden translate-z-0  sm:text-7xl text-5xl">
        {education.name}
      </Title>
      <div className="w-[1px] h-[100px] bg-black mx-3  top-10   rotate-0" />
      <Title className=" font-manrope  motion-translate-x-in-[-5%] motion-translate-y-in-[0%]  motion-blur-in-[5px] motion-ease-spring-smooth motion-delay-1600 will-change-[transform,filter] backface-hidden translate-z-0 sm:text-7xl text-4xl">
        {education.schoolname}
      </Title>
      <Title className=" font-manrope  motion-translate-x-in-[-5%] motion-translate-y-in-[0%]  motion-blur-in-[5px] motion-ease-spring-smooth motion-delay-1600 will-change-[transform,filter] backface-hidden translate-z-0 sm:text-7xl text-4xl">
        {education.date}
      </Title>
    </div>
  );
}
