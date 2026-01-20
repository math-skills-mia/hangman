import styles from "./Keyboard.module.css";

interface Props {
  activeLetters: string[];
  handleAddGuessedLetter: (letter: string) => void;
  handleDisabled?: boolean;
  inactiveLetters: string[];
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
  activeLetters,
  handleAddGuessedLetter,
  handleDisabled = false,
  inactiveLetters,
}: Props) {
  return (
    <div
      style={{
        display: "flex",
        gap: ".5rem",
        flexWrap: "wrap",
        justifyContent: "center",
        maxWidth: "800px",
      }}
    >
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <button
            key={key}
            className={`${styles.button} ${isActive && styles.correct} ${
              isInactive && styles.incorrect
            }`}
            disabled={isActive || isInactive || handleDisabled}
            onClick={() => handleAddGuessedLetter(key)}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}

export default Keyboard;
