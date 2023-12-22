import { MouseEventHandler } from "react";
import { FiMaximize2 } from "react-icons/fi";

export type OnToggleResizeEventType = MouseEventHandler<HTMLButtonElement> | undefined;

export const GraphResizer = ({ onToggleResize }: { onToggleResize: OnToggleResizeEventType }) => {
  return (
    <button onClick={onToggleResize} className="absolute top-0 right-0 p-2">
      <span className="sr-only">Toggle graph size</span>
      <FiMaximize2 className="w-4 h-4" />
    </button>
  );
};
