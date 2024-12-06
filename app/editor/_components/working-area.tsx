'use client'

import { useEffect, useRef, useState } from "react";

export type WorkingAreaContentProps = {
  position: { x: number, y: number };
  size: { w: number, h: number };
  scale: number;
}

export const WorkingArea = ({ content }: { content: React.FC<WorkingAreaContentProps>}) => {
  const workingAreaRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState<{ x: number, y: number}>({ x: 0, y: 0 });
  const [size, setSize] = useState<{ w: number, h: number}>({ w: 200, h: 400 })
  const [scale, setScale] = useState<number>(1);

  const handleWheel = (event: WheelEvent) => {
    if (workingAreaRef.current) {
      event.preventDefault();
    }

    const delta = event.deltaY;

    if (event.ctrlKey) {
      // Zoom canvas
      setScale((s) => Math.max(0.5, Math.min(3, s - delta * 0.001)));
    } else if (event.shiftKey) {
      // Move the canvas horizontally
      setPosition((p) => ({
        x: p.x + delta,
        y: p.y,
      }))
    } else {
      // Move the canvas vertically
      setPosition((p) => ({
        x: p.x,
        y: p.y - delta,
      }))
    }
  }

  useEffect(() => {
    if (workingAreaRef.current) {
      workingAreaRef.current.addEventListener('wheel', handleWheel);
    }
    return () => {
      if (workingAreaRef.current) {
        workingAreaRef.current.removeEventListener('wheel', handleWheel);
      }
    };
  }, [scale]);

  return (
    <div ref={workingAreaRef} className="fixed h-screen w-screen">
      <div
        className="absolute top-1/2 left-1/2"
      >
        {content({ position, size, scale })}
      </div>
    </div>
  );
}