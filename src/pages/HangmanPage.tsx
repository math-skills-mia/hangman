import { useState } from "react";
import wordList from "word-list-json";
import HangmanDrawing from "../components/games/hangman/HangmanDrawing";
import HangmanWord from "../components/games/hangman/HangmanWord";
import Keyboard from "../components/games/hangman/Keyboard";

function App() {
  const [wordToGuess] = useState(() =>
    wordList[Math.floor(Math.random() * wordList.length)].toUpperCase(),
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
    (letter) => !wordToGuess.includes(letter),
  );

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("") // converts string to an array of letters
    .every((letter) => guessedLetters.includes(letter)); // if every includes is true, then is true

  if (!wordToGuess) return <div>Loading...</div>;

  console.log(wordToGuess);
  return (
    <div className="flex flex-col gap-5 items-center bg-[#f8fff1] p-4 min-h-screen w-full font-mono">
      {/* Header */}
      <div className="bg-lime-900 text-white py-3 px-6 rounded-lg text-center w-full max-w-md">
        <h1 className="text-2xl md:text-3xl font-bold tracking-widest">
          HANGMAN
        </h1>
      </div>
      {/* Win/Lose Message */}
      <div className="text-xl text-center font-bold h-8 text-slate-800 -mt-1 -mb-2">
        {isWinner && (
          <span className="text-green-600 text-base">
            You Win! - Refresh to play again
          </span>
        )}
        {isLoser && (
          <span className="text-red-600 text-base">
            You Lose! - Refresh to play again
          </span>
        )}
      </div>
      {/* Game Area */}
      <div className="flex flex-col items-center w-full max-w-4xl">
        {/* Hangman Drawing */}
        <HangmanDrawing numberOfIncorrectGuesses={incorrectLetters.length} />
        {/* Hangman Word */}
        <HangmanWord
          word={wordToGuess}
          guessedLetters={guessedLetters}
          reveal={isLoser}
        />
      </div>
      {/* Keyboard */}
      <div className="w-full max-w-2xl self-center">
        <Keyboard
          correctLetters={guessedLetters.filter(
            (letter) => !incorrectLetters.includes(letter),
          )}
          incorrectLetters={incorrectLetters}
          handleAddGuessedLetter={addGuessedLetter}
          handleDisabled={isWinner || isLoser}
        />
      </div>
    </div>
  );
}

export default App;
