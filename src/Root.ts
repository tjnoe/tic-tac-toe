import {
  useType,
  useNewComponent,
  Canvas,
  Grid,
  Vector,
  useChild
} from "@hex-engine/2d";
import Cell from "./Cell";

export default function Root() {
  useType(Root);

  const canvas = useNewComponent(() => Canvas({ backgroundColor: "white" }));
  canvas.fullscreen();

  const grid = new Grid<string>(3, 3, " ");
  const cellSize = new Vector(16, 16);
  const firstCellPosition = new Vector(100, 100);

  let state = "PLACING_X";

  for (const [rowIndex, columnIndex] of grid.contents()) {
    useChild(() =>
      Cell({
        size: cellSize,
        position: firstCellPosition
          .addX(cellSize.x * rowIndex)
          .addY(cellSize.y * columnIndex),
        getContent: () => grid.get(rowIndex, columnIndex),
        onClick: () => {
          switch (state) {
            case "PLACING_X": {
              const content = grid.get(rowIndex, columnIndex);
              if (content === " ") {
                grid.set(rowIndex, columnIndex, "x");
                state = "PLACING_O";
              }
              break;
            }
            case "PLACING_O": {
              const content = grid.get(rowIndex, columnIndex);
              if (content === " ") {
                grid.set(rowIndex, columnIndex, "o");
                state = "PLACING_X";
              }
              break;
            }
          }
        }
      })
    );
  }
}
