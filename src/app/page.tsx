import HeroSection from "./components/HeroSection";
import LatestQuestions from "./components/LatestQuestions";
import TopContributers from "./components/TopContributers";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="container mx-auto mb-10 mt-10 flex gap-6">
        <div className="w-full lg:w-3/4">
          <h2 className="mb-4 text-2xl font-bold">Latest Questions</h2>
          <LatestQuestions />
        </div>
        <div className="hidden w-1/4 lg:block">
          <h2 className="mb-4 text-2xl font-bold">Top Contributers</h2>
          <TopContributers />
        </div>
      </div>
    </main>
  );
}
