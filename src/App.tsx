import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HangmanPage from "./pages/HangmanPage";
import "./styles.css";

function App() {
  console.log("App component rendering");
  return (
    <BrowserRouter>
      <Routes>
        {/* Home page */}
        <Route path="/" element={<HomePage />} />

        {/* Hangman game page */}
        <Route path="/hangman" element={<HangmanPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
