import FeaturedGame from "./FeaturedGame";
import Hero from "./Hero";
import QuickTools from "./QuickTools";

function HomePage() {
  return (
    <div className="home-page">
      <Hero />
      <QuickTools />
      <FeaturedGame />
    </div>
  );
}

export default HomePage;
