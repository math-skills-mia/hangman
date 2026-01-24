interface Props {
  correctLetters: string[];
  handleAddGuessedLetter: (letter: string) => void;
  handleDisabled?: boolean;
  incorrectLetters: string[];
}

const KEYS = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function Keyboard({
  correctLetters,
  handleAddGuessedLetter,
  handleDisabled = false,
  incorrectLetters,
}: Props) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(50px,max-content))] gap-2 w-full">
      {KEYS.map((key) => {
        const isCorrect = correctLetters.includes(key);
        const isWrong = incorrectLetters.includes(key);
        return (
          <button
            key={key}
            onClick={() => handleAddGuessedLetter(key)}
            disabled={isCorrect || isWrong || handleDisabled}
            className={`
              aspect-square 
              text-xl font-bold uppercase 
              border-2 rounded-lg 
              hover:bg-lime-200 transition-colors
              disabled:cursor-not-allowed disabled:disabled:pointer-events-none
              ${isCorrect ? "bg-lime-400 text-white border-slate-900" : "bg-white"}
              ${isWrong ? "opacity-30 bg-lime-700" : "bg-white"}
            `}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}

export default Keyboard;
