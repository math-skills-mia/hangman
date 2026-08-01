import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

function GamesPage() {
  return (
    <div className="page-container">
      <header className="page-heading">
        <p className="eyebrow">Games</p>
        <h1>Choose a game</h1>
      </header>

      <div className="game-list">
        <Link to={ROUTES.hangman}>Hangman</Link>
        <Link to={ROUTES.permutation}>Permutation</Link>
      </div>
    </div>
  );
}

export default GamesPage;
