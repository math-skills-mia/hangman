import Hero from "../components/homepage/Hero";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const nav = useNavigate();
  return (
    <div>
      <Hero />
      <button
        onClick={() => nav("/hangman")}
        style={{
          padding: "1rem 2rem",
          fontSize: "1.5rem",
          backgroundColor: "#f3c221ff",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Hangman
      </button>
    </div>
  );
}

export default HomePage;
