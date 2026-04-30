"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, RefreshCw } from "lucide-react";
import Mermaid from "@/components/Mermaid";
import { IdentityResponse } from "@/services/synthesize/type";
import { PrecisionCard } from "@/components/ui/PrecisionCard";

interface IdentityOutputProps {
  result: IdentityResponse | null;
  isGenerating: boolean;
}

export default function IdentityOutput({
  result,
  isGenerating,
}: IdentityOutputProps) {
  const [copied, setCopied] = useState<Record<string, boolean>>({});

  const copyToClipboard = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied((prev) => ({ ...prev, [key]: true }));
      setTimeout(() => {
        setCopied((prev) => ({ ...prev, [key]: false }));
      }, 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const exportReadme = () => {
    if (!result?.readmeMarkdown) return;
    const markdownContent = result.readmeMarkdown.replace(/\\n/g, "\n");
    const blob = new Blob([markdownContent], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "README.md";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section className="flex flex-col gap-8">
      <div className="flex items-center justify-between px-2 bg-zinc-900 border-l-4 border-accent py-2">
        <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-accent font-mono">
          Output
        </span>
        <span className="text-[10px] text-zinc-500 font-mono uppercase">
          Status: {isGenerating ? "Processing" : result ? "Ready" : "Idle"}
        </span>
      </div>

      <AnimatePresence mode="wait">
        {!result && !isGenerating ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center h-full border-2 border-zinc-800 border-dashed bg-zinc-900/50 p-16 text-center"
          >
            <div className="w-16 h-16 border-2 border-zinc-800 flex items-center justify-center mb-6 bg-zinc-900 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
              <RefreshCw className="w-6 h-6 text-zinc-700" />
            </div>
            <h3 className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest leading-loose">
              Waiting for input...
              <br />
              Generate architecture to view data.
            </h3>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            {/* The Manifesto Card */}
            <PrecisionCard>
              <div className="flex justify-between items-center mb-8 border-b-2 border-zinc-800 pb-4">
                <h2 className="text-[10px] uppercase font-bold tracking-[0.2em] text-accent font-mono flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-accent" />
                  Synthesis Manifesto
                </h2>
                <button
                  onClick={() =>
                    copyToClipboard(result?.manifesto || "", "manifesto")
                  }
                  className="bg-zinc-800 border-2 border-zinc-700 px-3 py-1.5 text-[9px] font-mono text-zinc-400 hover:text-accent hover:border-accent transition-all uppercase"
                >
                  {copied["manifesto"] ? "Copied" : "Copy"}
                </button>
              </div>
              <div className="min-h-32 flex items-center">
                {isGenerating ? (
                  <div className="w-full space-y-4">
                    <div className="h-3 w-full bg-zinc-800 animate-pulse" />
                    <div className="h-3 w-4/5 bg-zinc-800 animate-pulse" />
                    <div className="h-3 w-3/4 bg-zinc-800 animate-pulse" />
                    <div className="h-3 w-full bg-zinc-800 animate-pulse opacity-50" />
                  </div>
                ) : (
                  <p className="font-mono text-white/90 leading-relaxed text-xs whitespace-pre-wrap uppercase tracking-tight">
                    {result?.manifesto?.replace(/\\n/g, "\n")}
                  </p>
                )}
              </div>
            </PrecisionCard>

            {/* The Blueprint Card */}
            <PrecisionCard>
              <h2 className="text-[10px] uppercase font-bold tracking-[0.2em] text-accent font-mono mb-8 border-b-2 border-zinc-800 pb-4 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-accent" />
                Structural Blueprint
              </h2>
              <div className="relative min-h-100 flex flex-col items-center justify-center">
                {isGenerating ? (
                  <div className="flex flex-col items-center gap-4 py-20">
                    <Loader2 className="w-10 h-10 animate-spin text-accent" />
                    <span className="text-[9px] font-mono text-zinc-700 animate-pulse">
                      Rendering blueprint...
                    </span>
                  </div>
                ) : (
                  result && (
                    <div className="w-full h-full invert opacity-80">
                      <Mermaid
                        chart={result.mermaidCode
                          ?.replace(/\\n/g, "\n")
                          ?.replace(/\\t/g, "\t")}
                      />
                    </div>
                  )
                )}
              </div>
            </PrecisionCard>

            {/* Data Matrix Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <PrecisionCard>
                <h2 className="text-[10px] uppercase font-bold tracking-[0.2em] text-accent font-mono mb-8 border-b-2 border-zinc-800 pb-4 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-accent" />
                  Color Matrix
                </h2>
                <div className="space-y-6">
                  {isGenerating
                    ? [1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="h-6 w-full bg-zinc-800 animate-pulse"
                        />
                      ))
                    : result &&
                      Object.entries(result.designTokens || {})
                        .filter(
                          ([key, val]) =>
                            key !== "typography" && typeof val === "string",
                        )
                        .map(([name, color]) => (
                          <div
                            key={name}
                            className="flex items-center justify-between group border-b border-zinc-800 pb-2"
                          >
                            <div className="flex items-center gap-4">
                              <div
                                className="w-4 h-4 border-2 border-white shadow-[2px_2px_0_0_rgba(0,0,0,1)]"
                                style={{ backgroundColor: color as string }}
                              />
                              <span className="font-mono text-[10px] text-zinc-500 uppercase font-bold group-hover:text-accent transition-colors">
                                {name}
                              </span>
                            </div>
                            <span className="font-mono text-[10px] text-zinc-600 uppercase">
                              {color as string}
                            </span>
                          </div>
                        ))}
                </div>
              </PrecisionCard>

              <PrecisionCard className="flex flex-col justify-between">
                <div>
                  <h2 className="text-[10px] uppercase font-bold tracking-[0.2em] text-accent font-mono mb-6 border-b-2 border-zinc-800 pb-4 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent" />
                    Deployment Docs
                  </h2>
                  <p className="text-[10px] text-zinc-500 font-mono leading-relaxed mb-8 uppercase">
                    Generated markdown ready for repository initialization.
                  </p>
                </div>
                <button
                  onClick={exportReadme}
                  disabled={!result}
                  className="w-full py-5 bg-zinc-800 border-2 border-zinc-700 text-[10px] font-mono font-black text-white hover:bg-accent hover:text-black hover:border-accent hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] transition-all uppercase tracking-widest disabled:opacity-20"
                >
                  Export README
                </button>
              </PrecisionCard>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
