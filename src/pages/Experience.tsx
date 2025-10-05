import ExperienceSection from "../components/experience/ExperienceSection";
import Background2 from "../components/ui/Background2";
import LenisScroll from "../components/ui/LenisScroll";
import PageTransition from "../components/ui/PageTransition";

export default function Experience() {
  return (
    <>
      <LenisScroll />
      <PageTransition>Experience</PageTransition>
      <Background2 />
      <ExperienceSection></ExperienceSection>
    </>
  );
}
