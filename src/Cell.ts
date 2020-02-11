import {
  useType,
  useNewComponent,
  useDraw,
  Geometry,
  Polygon
} from "@hex-engine/2d";

export default function Cell({ size, position }) {
  useType(Cell);

  useNewComponent(() =>
    Geometry({
      shape: Polygon.rectangle(size),
      position
    })
  );

  useDraw(context => {
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.strokeRect(0, 0, size.x, size.y);
  });
}
