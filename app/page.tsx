import Demo from "@/components/Demo";
import Arrival from "@/components/feature/Arrival";
import Category from "@/components/feature/Category";
import FeatureArea from "@/components/feature/FeatureArea";
import WeeklyDeal from "@/components/feature/WeeklyDeal";
import HeroSection from "@/components/heroSection/HeroSection";
import Newsletter from "@/components/newsletter/Newsletter";

export default function Home() {
  return (
    <main>
      {/* <Demo /> */}
      <HeroSection />
      <FeatureArea />
      <Arrival />
      <WeeklyDeal />
      <Category />
      <Newsletter />
    </main>
  );
}
