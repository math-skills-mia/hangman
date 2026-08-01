import { BrowserRouter, Route, Routes } from "react-router-dom";

import SiteLayout from "./core/layouts/SiteLayout";
import AboutPage from "./core/pages/AboutPage";
import GamesPage from "./core/pages/GamesPage";
import HomePage from "./core/pages/HomePage/HomePage";
import HangmanPage from "./games/hangman/pages/HangmanPage";
import PermutationPage from "./games/permutation/pages/PermutationPage";

import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />

          <Route path="about" element={<AboutPage />} />

          <Route path="games">
            <Route index element={<GamesPage />} />
            <Route path="hangman" element={<HangmanPage />} />
            <Route path="permutation" element={<PermutationPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
