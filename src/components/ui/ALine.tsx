import { cn } from "../../utils/cn";
interface Props {
  className?: string;
}
export default function ALine({ className }: Props) {
  return <div className={cn(" bg-black w-[41.22px] h-1", className)}></div>;
}
