import { Link } from "react-router-dom";
import Hero from "../components/homepage/Hero";

function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <Hero />
      <Link
        to={"/hangman"}
        className=" bg-yellow-400 text-white border-2 border-gray-500 rounded-lg"
      >
        Hangman
      </Link>
      <Link
        to={"/permutation"}
        className=" bg-yellow-400 text-white border-2 border-gray-500 rounded-lg"
      >
        Permutation
      </Link>
    </div>
  );
}

export default HomePage;
