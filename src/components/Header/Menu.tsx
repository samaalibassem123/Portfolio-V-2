interface Links {
  label: string;
  url: string;
}
const links: Links[] = [
  {
    label: "Experience",
    url: "/experience",
  },
  {
    label: "Personal Projects",
    url: "/projects",
  },
  {
    label: "Education",
    url: "/education",
  },
];

export default function Menu() {
  return (
    <>
      <div className="flex gap-2 items-center cursor-pointer">
        <span className=" font-manrope text-xl">Menu</span>
        <img src="/Menu.svg" alt="" />
      </div>
      <div className=" w-full h-full absolute top-0 left-0 bg-black/70 backdrop-blur-sm z-50">
        {/*Left Side */}
        <div>
          {links.map((l)=>(
            
          ))}
        </div>
        {/*Right Side */}
        <div></div>
      </div>
    </>
  );
}
