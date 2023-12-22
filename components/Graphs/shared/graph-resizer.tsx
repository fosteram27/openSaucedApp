export const GraphResizer = ({ onToggleResize }: { onToggleResize: () => void }) => {
  return (
    <button onClick={onToggleResize} className="relative top-0 right-0 p-2">
      <span>Toggle graph size</span>
    </button>
  );
};
