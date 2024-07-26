import type { RichTextWidget } from "apps/admin/widgets.ts";

export interface Props {
  /**
   * @format rich-text
   */
  heading?: RichTextWidget;
  text?: string;
}

export default function HelloSection({ heading = "Hello", text = "Hello from decopilot" }: Props) {
  return (
    <div className="text-center py-12">
      <h2 className="text-4xl font-bold mb-4">{heading}</h2>
      <p className="text-lg">{text}</p>
    </div>
  );
}