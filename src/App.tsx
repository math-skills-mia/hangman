import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./core/pages/HomePage";
import HangmanPage from "./games/hangman/pages/HangmanPage";
import "./styles.css";
import AboutPage from "./core/pages/AboutPage";
import Navbar from "./core/components/Navbar";
import PermutationPage from "./games/permutation/pages/PermutationPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Default route - shows HomePage */}
        <Route path="/" element={<HomePage />} />

        {/* Home page */}
        <Route path="/homepage" element={<HomePage />} />

        {/* About page */}
        <Route path="/about" element={<AboutPage />} />

        {/* Hangman game page */}
        <Route path="/hangman" element={<HangmanPage />} />

        {/* Permutation game page */}
        <Route path="/permutation" element={<PermutationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
