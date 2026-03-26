import { useEffect, useState } from "react";

/**
 * Full-page crosshair cursor overlay.
 * Renders two hairline lines (horizontal + vertical) and an orange dot
 * that track the mouse across the entire viewport.
 * Original cursor is hidden via CSS on the parent.
 */
const CursorOverlay = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {/* Vertical line */}
      <div
        className="absolute top-0 w-px h-full bg-foreground/15"
        style={{ left: `${pos.x}px` }}
      />
      {/* Horizontal line */}
      <div
        className="absolute left-0 h-px w-full bg-foreground/15"
        style={{ top: `${pos.y}px` }}
      />
      {/* Orange square dot */}
      <div
        className="absolute w-2.5 h-2.5 bg-orange-500 -translate-x-1/2 -translate-y-1/2"
        style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
      />
      {/* Coordinates at bottom-left */}
      <div className="fixed bottom-6 left-6 font-mono text-[11px] text-foreground/50 tabular-nums flex flex-col gap-0.5">
        <span>x: {Math.round(pos.x)}</span>
        <span>y: {Math.round(pos.y)}</span>
      </div>
    </div>
  );
};

export default CursorOverlay;
