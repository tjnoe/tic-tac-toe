import {
  useType,
  useNewComponent,
  useDraw,
  Geometry,
  Polygon,
  SystemFont,
  Label,
  Mouse
} from "@hex-engine/2d";

export default function Cell({ size, position, getContent, onClick }) {
  useType(Cell);

  useNewComponent(() =>
    Geometry({
      shape: Polygon.rectangle(size),
      position
    })
  );

  const font = useNewComponent(() =>
    SystemFont({ name: "sans-serif", size: size.y })
  );

  const label = useNewComponent(() => Label({ font }));
  const mouse = useNewComponent(Mouse);
  mouse.onClick(onClick);

  useDraw(context => {
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.strokeRect(0, 0, size.x, size.y);
    label.text = getContent();
    label.draw(context);
  });
}
