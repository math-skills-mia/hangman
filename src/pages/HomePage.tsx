function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>
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
        Play Hangman (Alternative)
      </button>
    </div>
  );
}

export default HomePage;
