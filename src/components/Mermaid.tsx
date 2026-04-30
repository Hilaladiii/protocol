"use client";

import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";
import { ZoomIn, ZoomOut, Maximize, Grip } from "lucide-react";

mermaid.initialize({
  startOnLoad: true,
  theme: "dark",
  securityLevel: "loose",
  themeVariables: {
    primaryColor: "#18181b",
    primaryTextColor: "#fafafa",
    primaryBorderColor: "#27272a",
    lineColor: "#f97316",
    secondaryColor: "#09090b",
    tertiaryColor: "#09090b",
  },
  fontFamily: "font-mono",
});

export default function Mermaid({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (ref.current && chart) {
      ref.current.removeAttribute("data-processed");
      mermaid.contentLoaded();
    }
  }, [chart]);

  // Reset view when chart changes
  useEffect(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, [chart]);

  const handleZoom = (delta: number) => {
    setScale((prev) => Math.min(Math.max(prev + delta, 0.5), 3));
  };

  const handleReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return; // Only left click
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
      const delta = e.deltaY > 0 ? -0.1 : 0.1;
      handleZoom(delta);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-100 overflow-hidden bg-black/40 border-2 border-zinc-800 cursor-grab active:cursor-grabbing group"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onWheel={handleWheel}
    >
      {/* Zoom Controls */}
      <div className="absolute bottom-4 right-4 z-20 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={() => handleZoom(0.2)}
          className="p-2 bg-zinc-900 border border-zinc-700 text-zinc-400 hover:text-accent hover:border-accent transition-all shadow-[4px_4px_0_0_#000]"
          title="Zoom In"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        <button
          onClick={() => handleZoom(-0.2)}
          className="p-2 bg-zinc-900 border border-zinc-700 text-zinc-400 hover:text-accent hover:border-accent transition-all shadow-[4px_4px_0_0_#000]"
          title="Zoom Out"
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        <button
          onClick={handleReset}
          className="p-2 bg-zinc-900 border border-zinc-700 text-zinc-400 hover:text-accent hover:border-accent transition-all shadow-[4px_4px_0_0_#000]"
          title="Reset View"
        >
          <Maximize className="w-4 h-4" />
        </button>
      </div>

      {/* Panning Instruction */}
      <div className="absolute top-4 right-4 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="flex items-center gap-2 px-3 py-1 bg-zinc-900/80 border border-zinc-800 text-[10px] font-mono text-zinc-500 uppercase">
          <Grip className="w-3 h-3" />
          <span>Drag to pan / Ctrl + Scroll to zoom</span>
        </div>
      </div>

      {/* Diagram Content */}
      <div
        className="flex justify-center items-center transition-transform duration-75 ease-out origin-center h-full"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
        }}
      >
        <div
          key={chart}
          className="mermaid transition-opacity duration-300"
          ref={ref}
        >
          {chart}
        </div>
      </div>
    </div>
  );
}
