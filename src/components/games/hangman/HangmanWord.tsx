interface Props {
  guessedLetters: string[];
  word: string;
  reveal: boolean;
}

function HangmanWord({ word, guessedLetters, reveal }: Props) {
  const letters = word.split("");
  return (
    <div
      style={{
        display: "flex",
        gap: ".25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
        flexWrap: "wrap",
      }}
    >
      {letters.map((letter, index) => (
        <span key={index} style={{ borderBottom: ".1em solid black" }}>
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? "visible"
                  : "hidden",
              color:
                reveal && !guessedLetters.includes(letter) ? "red" : "black",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}

export default HangmanWord;
