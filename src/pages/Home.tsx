import Footer from "../components/home-section/Footer";
import HomeSection from "../components/home-section/HomeSection";
import LeftSide from "../components/home-section/LeftSide";
import RightSide from "../components/home-section/RightSide";
import Background from "../components/ui/Background";

export default function Home() {
  return (
    <div className="flex flex-col h-full w-full ">
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
    </div>
  );
}
