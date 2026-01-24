interface Props {
  guessedLetters: string[];
  word: string;
  reveal: boolean;
}

function HangmanWord({ word, guessedLetters, reveal }: Props) {
  const letters = word.split("");
  return (
    <div className="flex gap-4 text-4xl md:text-6xl font-bold uppercase font-mono flex-wrap justify-center p-4">
      {letters.map((letter, index) => (
        <span
          key={index}
          className="border-b-[.1em] border-black h-12 md:h-20 min-w-5 text-center"
        >
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
