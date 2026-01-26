import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HangmanPage from "./pages/HangmanPage";
import "./styles.css";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route - shows HomePage */}
        <Route path="/" element={<HomePage />} />

        {/* Home page */}
        <Route path="/homepage" element={<HomePage />} />

        {/* Hangman game page */}
        <Route path="/hangman" element={<HangmanPage />} />

        {/* About page */}
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
