import { cn } from "../../utils/cn";
import ALine from "../ui/ALine";

interface Props {
  className?: string;
}

export default function RightSide({ className }: Props) {
  return (
    <div className={cn("flex  gap-4 flex-col p-8", className)}>
      <ALine />
      <p className="motion-translate-x-in-[-10%] motion-translate-y-in-[0%] motion-opacity-in-[0%] motion-blur-in-[5px] font-manrope motion-delay-1000 lg:w-md  md:text-md/8 lg:text-lg/8 xl:text-xl/8 ">
        I develop inclusive, reliable software designed to make technology more
        human. With experience across both startups and enterprise environments,
        I believe in writing thoughtful code that empowers people and drives
        scalability.
      </p>
    </div>
  );
}
