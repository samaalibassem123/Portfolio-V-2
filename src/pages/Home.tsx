import Footer from "../components/home-section/Footer";
import HomeSection from "../components/home-section/HomeSection";
import LeftSide from "../components/home-section/LeftSide";
import RightSide from "../components/home-section/RightSide";
import Background from "../components/ui/Background";
import { motion } from "motion/react";

export default function Home() {
  return (
    <>
      <div className="bg-black/70 w-full h-full absolute top-0 -z-10 left-0"></div>
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, duration: 0.2 }}
        className="flex flex-col h-full w-full "
      >
        <Background />
        <a
          href="https://github.com/samaalibassem123"
          target="_blank"
          className=" absolute underline   lg:inline-block hidden bottom-1/6 -rotate-90 hover:-rotate-0   backdrop-blur-2xl  select-all selec p-7 px-4 z-50  cursor-pointer  w-fit transition-transform tracking-wider text-black font-manrope "
        >
          Follow Me On Github
        </a>
        <HomeSection className=" h-full pt-3">
          <LeftSide />
          <RightSide />
        </HomeSection>
        <Footer />
      </motion.div>
    </>
  );
}
