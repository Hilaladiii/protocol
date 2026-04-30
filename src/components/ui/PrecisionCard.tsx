import React from "react";

export const CornerMarkers = () => (
  <>
    <div className="absolute -top-0.5 -left-0.5 w-3 h-3 border-t-2 border-l-2 border-accent" />
    <div className="absolute -top-0.5 -right-0.5 w-3 h-3 border-t-2 border-r-2 border-accent" />
    <div className="absolute -bottom-0.5 -left-0.5 w-3 h-3 border-b-2 border-l-2 border-accent" />
    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 border-b-2 border-r-2 border-accent" />
  </>
);

export const PrecisionCard = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`relative border-2 border-zinc-700 bg-panel p-6 shadow-[8px_8px_0_0_rgba(0,0,0,1)] ${className}`}
  >
    <CornerMarkers />
    {children}
  </div>
);
