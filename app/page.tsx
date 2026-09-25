import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import VideoProjects from "@/components/VideoProjects";
import AiProjects from "@/components/AiProjects";
import GraphicProjects from "@/components/GraphicProjects";
import ShiftCampProject from "@/components/ShiftCampProject";
import ProfileStrengthsTools from "@/components/ProfileStrengthsTools";
import Tools from "@/components/Tools";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedWork />
        <VideoProjects />
        <AiProjects />
        <GraphicProjects />
        <ShiftCampProject />
        <ProfileStrengthsTools />
        <Tools />
      </main>
      <Footer />
    </>
  );
}
