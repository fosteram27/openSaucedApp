import { MouseEventHandler } from "react";

export type OnToggleResizeEventType = MouseEventHandler<HTMLButtonElement> | undefined;

export const GraphResizer = ({ onToggleResize }: { onToggleResize: OnToggleResizeEventType }) => {
  return (
    <button onClick={onToggleResize} className="relative top-0 right-0 p-2">
      <span>Toggle graph size</span>
    </button>
  );
};
