import { Link } from "react-router-dom";
import Title from "../ui/Title";
import { X } from "lucide-react";
import { motion } from "motion/react";

const AnimateNavMenu = {
  hidden: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

interface Links {
  label: string;
  url: string;
}

const links: Links[] = [
  {
    label: "Home",
    url: "/",
  },
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
interface Props {
  setNavMenu: (v: boolean) => void;
}
export default function NavMenu({ setNavMenu }: Props) {
  return (
    <motion.div
      variants={AnimateNavMenu}
      initial="hidden"
      animate={"enter"}
      exit={"exit"}
      className=" flex lg:flex-row flex-col lg:items-center justify-around px-5  w-full h-svh fixed top-0 right-0 z-50 bg-black/90 backdrop-blur-sm  text-white"
    >
      <button
        onClick={() => setNavMenu(false)}
        className=" cursor-pointer flex gap-1 text-xl items-center justify-center absolute top-0 right-0 p-4 font-manrope"
      >
        close <X className=" size-8" />
      </button>
      {/*Left Side */}
      <LeftSide setNavMenu={setNavMenu} />
      {/*Right Side */}
      <RightSide />
    </motion.div>
  );
}

const LeftSide = ({ setNavMenu }: { setNavMenu: (v: boolean) => void }) => {
  return (
    <div className="  flex flex-col gap-10 group">
      {links.map((l) => (
        <Link
          onClick={() => setNavMenu(false)}
          to={l.url}
          key={l.url}
          className=" hover:scale-100 transition-all group-hover:scale-95 group-hover:text-gray-400 hover:text-white "
        >
          <Title className=" font-manrope sm:text-7xl text-4xl">
            {l.label}
          </Title>
        </Link>
      ))}
    </div>
  );
};

const RightSide = () => {
  return (
    <div className="flex flex-col gap-5 sm:text-md text-sm font-manrope selection:bg-white selection:text-black">
      <span className=" text-lg">Contact info</span>
      <div className="flex flex-col gap-5">
        <span>
          Email :{" "}
          <span className=" select-all">samaalibassem123@gmail.com</span>
        </span>
        <span>
          Linkedin :{" "}
          <a
            href="https://www.linkedin.com/in/bassem-samaali/"
            target="_blank"
            className=" underline"
          >
            in/bassem-samaali
          </a>
        </span>
        <span>
          Github :{" "}
          <a
            href="https://github.com/samaalibassem123"
            target="_blank"
            className="underline"
          >
            github.com/samaalibassem123
          </a>
        </span>
      </div>
    </div>
  );
};
