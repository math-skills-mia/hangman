type PlusGridProps = {
  columns?: number;
  rows?: number;
};

function PlusGrid({ columns = 7, rows = 7 }: PlusGridProps) {
  const cells = Array.from({ length: columns * rows });

  return (
    <div
      className="plus-grid"
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
      }}
      aria-hidden="true"
    >
      {cells.map((_, index) => {
        const row = Math.floor(index / columns);
        const column = index % columns;

        const isVisible = (row + column) % 2 === 0;

        return (
          <span
            className={`plus-grid__cell ${
              isVisible ? "plus-grid__cell--visible" : ""
            }`}
            key={`${row}-${column}`}
          >
            {isVisible ? "+" : ""}
          </span>
        );
      })}
    </div>
  );
}

export default PlusGrid;
