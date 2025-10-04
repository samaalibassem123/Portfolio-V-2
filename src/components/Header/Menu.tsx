import { useState } from "react";
import NavMenu from "./NavMenu";
import { AnimatePresence } from "motion/react";

export default function Menu() {
  const [navmenu, setNavMenu] = useState<boolean>(false);

  return (
    <>
      <button
        className="flex gap-2 items-center cursor-pointer"
        onClick={() => setNavMenu(true)}
      >
        <span className=" font-manrope text-xl">Menu</span>
        <img src="/Menu.svg" alt="" />
      </button>
      <AnimatePresence mode="wait">
        {navmenu && <NavMenu setNavMenu={setNavMenu} />}
      </AnimatePresence>
    </>
  );
}
