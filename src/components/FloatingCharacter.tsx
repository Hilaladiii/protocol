"use client";

import React, { useState, useEffect, useRef } from "react";
import Character from "@/components/character";
import { motion, AnimatePresence } from "framer-motion";
import { useRobot } from "@/store/useRobotStore";

function Typewriter({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState("");
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setDisplayedText("");
    if (!text) return;

    if (timerRef.current) clearInterval(timerRef.current);

    let i = 0;
    timerRef.current = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        if (timerRef.current) clearInterval(timerRef.current);
      }
    }, 20);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [text]);

  return <span>{displayedText}</span>;
}

export default function FloatingCharacter() {
  const { message, isVisible, status } = useRobot();
  const [isHovered, setIsHovered] = useState(false);

  // Force show tooltip if processing or completed, regardless of hover
  const forceShow =
    status === "processing" || status === "completed" || isVisible;
  const showTooltip = forceShow || isHovered;

  return (
    <div
      className="fixed bottom-12 right-12 z-9999 group pointer-events-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Speech Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            key={message} // Ensure animation triggers on new message
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ type: "spring", damping: 15 }}
            className="absolute bottom-full right-4 mb-8 z-10000 pointer-events-none"
          >
            <div className="bg-zinc-900 border-2 border-accent p-5 shadow-[6px_6px_0_0_#000] min-w-55 max-w-75 relative">
              <div className="text-[11px] font-mono text-accent leading-relaxed">
                <Typewriter text={message} />
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-2 h-4 bg-accent ml-1 align-middle"
                />
              </div>
              <div className="absolute top-full right-8 w-4 h-4 bg-zinc-900 border-r-2 border-b-2 border-accent rotate-45 -translate-y-2.25" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Character Wrapper */}
      <motion.div
        animate={
          status === "processing"
            ? {
                y: [0, -10, 0],
                rotate: [0, -5, 5, 0],
                scale: [1, 1.05, 1],
              }
            : status === "completed"
              ? {
                  scale: [1, 1.1, 1],
                }
              : { y: 0, rotate: 0, scale: 1 }
        }
        transition={{
          duration: status === "processing" ? 1.2 : 0.5,
          repeat: status === "processing" ? Infinity : 0,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`w-28 h-28 cursor-help bg-zinc-950/80 backdrop-blur-xl border-2 p-3 shadow-[10px_10px_0_0_rgba(0,0,0,1)] transition-all duration-500 ${
          showTooltip
            ? "border-accent shadow-[10px_10px_0_0_#f97316]"
            : "border-zinc-800"
        }`}
      >
        <Character />
      </motion.div>
    </div>
  );
}
