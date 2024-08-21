import Arrival from "@/components/feature/Arrival";
import FeatureArea from "@/components/feature/FeatureArea";
import HeroSection from "@/components/heroSection/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeatureArea />
      <Arrival />
    </main>
  );
}
