import Navbar from "../components/homepage/Navbar";

function HomePage() {
  return (
    <div>
      <Navbar />
      <button
        onClick={() => (window.location.href = "/hangman")}
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
