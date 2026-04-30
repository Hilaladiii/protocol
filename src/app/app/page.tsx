"use client";

import React, { useState } from "react";
import IdentityForm from "@/components/identity/IdentityForm";
import IdentityOutput from "@/components/identity/IdentityOutput";
import { IdentityResponse } from "@/services/synthesize/type";
import { IdentityFormValues } from "@/validations/identity";

import { robotStore } from "@/store/useRobotStore";
import FloatingCharacter from "@/components/FloatingCharacter";

export default function ProtocolDashboard() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<IdentityResponse | null>(null);

  const synthesizeIdentity = async (values: IdentityFormValues) => {
    setIsGenerating(true);
    robotStore.show(
      "Hang tight! I'm putting together your architecture documents...",
      "processing",
    );

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error("Synthesis failed");

      const data = await response.json();
      setResult(data);
      robotStore.show(
        "Done! Your project blueprints are ready for review.",
        "completed",
      );
      setTimeout(() => {
        robotStore.hide();
      }, 5000);
    } catch (error) {
      console.error("Synthesis failed:", error);
      robotStore.show(
        "Oops! Something went wrong during the synthesis. Please try again.",
        "idle",
      );
      setTimeout(() => robotStore.hide(), 4000);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <main className="min-h-screen relative overflow-hidden bg-background selection:bg-accent selection:text-black">
      {/* Brutalist Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-size-[40px_40px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_2px,transparent_2px),linear-gradient(to_bottom,#e4e4e7_2px,transparent_2px)] bg-size-[200px_200px]" />
      </div>

      {/* Sharp Industrial Accents */}
      <div className="absolute top-0 left-0 w-full h-1 bg-accent/20 z-0" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-accent/20 z-0" />
      <div className="absolute top-0 left-12 w-px h-full bg-zinc-800 z-0" />
      <div className="absolute top-0 right-12 w-px h-full bg-zinc-800 z-0" />

      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 py-12 lg:px-24 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* LEFT COLUMN: Input Configuration */}
        <IdentityForm
          onSubmit={synthesizeIdentity}
          isGenerating={isGenerating}
        />

        {/* RIGHT COLUMN: Output Dashboard */}
        <IdentityOutput result={result} isGenerating={isGenerating} />
      </div>

      {/* Simple Footer */}
      <footer className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-24 py-8 border-t-2 border-zinc-800 flex justify-between items-center bg-background">
        <span className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Protocol. All rights reserved.
        </span>
      </footer>

      <FloatingCharacter />
    </main>
  );
}
