import { useState } from "react";
import wordList from "word-list-json";
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";

function App() {
  const [wordToGuess] = useState(() =>
    wordList[Math.floor(Math.random() * wordList.length)].toUpperCase()
  );

  const [guessedLetters, setGuessedLetters] = useState([] as string[]);

  // Function Updates guessedLetters
  const addGuessedLetter = (letter: string) => {
    // Don't add if already guessed
    if (guessedLetters.includes(letter)) return;

    // Update guessedLetters
    setGuessedLetters((currentLetters) => [...currentLetters, letter]);
  };

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("") // converts string to an array of letters
    .every((letter) => guessedLetters.includes(letter)); // if every includes is true, then is true

  console.log(wordToGuess);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
        backgroundColor: "#f6fef8ff",
        padding: "2rem",
      }}
    >
      <div className="bg-dark text-white p-3 text-center rounded shadow">
        <h1 className="mb-0" style={{ fontFamily: "monospace" }}>
          Hangman
        </h1>
      </div>
      <div
        style={{
          fontSize: "2rem",
          textAlign: "center",
          fontFamily: "monospace",
          height: "2rem",
        }}
      >
        {isWinner && "You Win! - Refresh to try again"}
        {isLoser && "You Lose! - Refresh to try again"}
        {!isWinner && !isLoser && " "}
      </div>
      <HangmanDrawing numberOfIncorrectGuesses={incorrectLetters.length} />
      <HangmanWord
        word={wordToGuess}
        guessedLetters={guessedLetters}
        reveal={isLoser}
      />
      <Keyboard
        activeLetters={guessedLetters.filter(
          (letter) => !incorrectLetters.includes(letter)
        )}
        inactiveLetters={incorrectLetters}
        handleAddGuessedLetter={addGuessedLetter}
        handleDisabled={isWinner || isLoser}
      />
    </div>
  );
}

export default App;
