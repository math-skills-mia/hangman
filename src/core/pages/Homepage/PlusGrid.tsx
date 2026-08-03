import { useEffect, useRef, useState, type CSSProperties } from "react";

type PlusGridProps = {
  columns?: number;
  rows?: number;
};

function PlusGrid({ columns = 8, rows = 12 }: PlusGridProps) {
  const [hiddenCells, setHiddenCells] = useState<Set<number>>(new Set());

  const restoreTimers = useRef<Map<number, ReturnType<typeof setTimeout>>>(
    new Map(),
  );

  useEffect(() => {
    const timers = restoreTimers.current;

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
      timers.clear();
    };
  }, []);

  function temporarilyHideCell(index: number) {
    const existingTimer = restoreTimers.current.get(index);

    if (existingTimer) {
      clearTimeout(existingTimer);
    }

    setHiddenCells((currentCells) => {
      const nextCells = new Set(currentCells);
      nextCells.add(index);
      return nextCells;
    });

    const restoreTimer = setTimeout(() => {
      setHiddenCells((currentCells) => {
        const nextCells = new Set(currentCells);
        nextCells.delete(index);
        return nextCells;
      });

      restoreTimers.current.delete(index);
    }, 650);

    restoreTimers.current.set(index, restoreTimer);
  }

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
        const isTemporarilyHidden = hiddenCells.has(index);

        const horizontalProgress = columns > 1 ? column / (columns - 1) : 0;

        const verticalProgress = rows > 1 ? row / (rows - 1) : 0;

        const fadeProgress = (horizontalProgress + verticalProgress) / 2;

        const opacity = Math.max(0.12, 1 - fadeProgress * 0.88);

        const cellStyle = {
          "--plus-opacity": opacity,
          "--plus-delay": `${index * 12}ms`,
        } as CSSProperties;

        return (
          <span
            className={[
              "plus-grid__cell",
              isVisible && "plus-grid__cell--visible",
              isTemporarilyHidden && "plus-grid__cell--hidden",
            ]
              .filter(Boolean)
              .join(" ")}
            style={cellStyle}
            key={`${row}-${column}`}
            onPointerEnter={
              isVisible ? () => temporarilyHideCell(index) : undefined
            }
            onPointerDown={
              isVisible ? () => temporarilyHideCell(index) : undefined
            }
          >
            {isVisible ? "+" : ""}
          </span>
        );
      })}
    </div>
  );
}

export default PlusGrid;
