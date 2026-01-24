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
    <div className="flex flex-wrap gap-x-1 gap-y-1.5 md:gap-2 w-full justify-center -mt-1">
      {KEYS.map((key) => {
        const isCorrect = correctLetters.includes(key);
        const isWrong = incorrectLetters.includes(key);
        return (
          <button
            key={key}
            onClick={() => handleAddGuessedLetter(key)}
            disabled={isCorrect || isWrong || handleDisabled}
            className={`
              h-8 w-8 md:h-13 md:w-13
              text-lg md:text-2xl font-bold uppercase 
              border-[1.5px] md:border-2 rounded-sm 
              transition-all duration-300
              hover:bg-lime-200
              disabled:cursor-not-allowed disabled:disabled:pointer-events-none
              ${
                isCorrect
                  ? "bg-lime-400 text-white border-slate-900"
                  : isWrong
                    ? "bg-lime-800 opacity-30 border-slate-900"
                    : "bg-white text-slate-900 border-slate-900"
              }
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
