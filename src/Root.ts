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

  const grid = new Grid(3, 3, " ");
  const cellSize = new Vector(16, 16);
  const firstCellPosition = new Vector(100, 100);

  for (const [rowIndex, columnIndex] of grid.contents()) {
    useChild(() =>
      Cell({
        size: cellSize,
        position: firstCellPosition
          .addX(cellSize.x * rowIndex)
          .addY(cellSize.y * columnIndex)
      })
    );
  }
}
