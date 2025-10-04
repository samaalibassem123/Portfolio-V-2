export default function Background() {
  return (
    <div className="absolute top-0 -z-10 h-full w-full bg-white ">
      <div className="absolute inset-0  h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:20rem_20rem]"></div>
      <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[#1E24D2] opacity-50 blur-[80px]"></div>
      <div className="absolute  sm:inline-block hidden bottom-0 left-0 right-auto top-auto h-[500px] w-[500px] -translate-x-[30%]  rounded-full bg-[#1E24D2] opacity-20 blur-[80px]"></div>
    </div>
  );
}
