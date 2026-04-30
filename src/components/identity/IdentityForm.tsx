"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Plus, X } from "lucide-react";
import { identitySchema, IdentityFormValues } from "@/validations/identity";
import { PrecisionCard } from "@/components/ui/PrecisionCard";

interface IdentityFormProps {
  onSubmit: (data: IdentityFormValues) => void;
  isGenerating: boolean;
}

export default function IdentityForm({
  onSubmit,
  isGenerating,
}: IdentityFormProps) {
  const [newTech, setNewTech] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<IdentityFormValues>({
    resolver: zodResolver(identitySchema),
    defaultValues: {
      projectName: "",
      stack: ["Next.js", "Tailwind CSS"],
      problem: "",
      tone: "Surgical",
    },
  });

  const stack = watch("stack");
  const tone = watch("tone");

  const handleAddTech = () => {
    if (newTech && !stack.includes(newTech)) {
      setValue("stack", [...stack, newTech], { shouldValidate: true });
      setNewTech("");
    }
  };

  const removeTech = (tech: string) => {
    setValue(
      "stack",
      stack.filter((t) => t !== tech),
      { shouldValidate: true },
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-12">
      <header className="mb-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col gap-2"
        >
          <div className="flex items-center gap-4">
            <h1 className="text-4xl font-black tracking-tighter text-white uppercase">
              Protocol<span className="text-accent">_</span>
            </h1>
            <div className="flex-1 h-0.5 bg-zinc-800" />
          </div>
          <p className="text-zinc-500 text-sm mt-4 max-w-md leading-relaxed">
            Define your project parameters to generate architecture manifesto
            and system diagrams.
          </p>
        </motion.div>
      </header>

      <PrecisionCard>
        <div className="space-y-10">
          {/* Project Name */}
          <div className="space-y-3">
            <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-accent font-mono flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-accent" />
              Project Name
            </label>
            <input
              {...register("projectName")}
              type="text"
              placeholder="Enter name..."
              className="w-full bg-zinc-900 border-2 border-zinc-700 p-4 text-white font-mono placeholder:text-zinc-700 focus:outline-none focus:border-accent transition-all text-sm uppercase"
            />
            {errors.projectName && (
              <p className="text-[10px] text-red-500 font-mono">
                {errors.projectName.message}
              </p>
            )}
          </div>

          {/* Tech Stack */}
          <div className="space-y-4">
            <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-accent font-mono flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-accent" />
              Tech Stack
            </label>
            <div className="flex flex-wrap gap-3">
              <AnimatePresence>
                {stack.map((tech) => (
                  <motion.span
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    key={tech}
                    className="text-[10px] font-mono border-2 border-zinc-700 bg-zinc-800 px-3 py-2 text-white hover:border-accent transition-all cursor-pointer flex items-center gap-3 uppercase"
                    onClick={() => removeTech(tech)}
                  >
                    {tech}
                    <X className="w-3 h-3 text-zinc-500 hover:text-accent" />
                  </motion.span>
                ))}
              </AnimatePresence>
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  value={newTech}
                  onChange={(e) => setNewTech(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleAddTech();
                    }
                  }}
                  placeholder="Enter tech..."
                  className="bg-transparent border-b-2 border-zinc-800 p-2 text-[10px] font-mono text-zinc-400 focus:outline-none focus:border-accent transition-all w-24 uppercase"
                />
                <button
                  type="button"
                  onClick={handleAddTech}
                  className="p-2 bg-zinc-800 border-2 border-zinc-700 text-zinc-500 hover:text-accent hover:border-accent transition-all"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
            {errors.stack && (
              <p className="text-[10px] text-red-500 font-mono">
                {errors.stack.message}
              </p>
            )}
          </div>

          {/* The Problem */}
          <div className="space-y-3">
            <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-accent font-mono flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-accent" />
              Problem Definition
            </label>
            <textarea
              {...register("problem")}
              rows={4}
              placeholder="Describe your objective..."
              className="w-full bg-zinc-900 border-2 border-zinc-700 p-4 text-white font-mono text-xs placeholder:text-zinc-700 focus:outline-none focus:border-accent transition-all resize-none leading-relaxed uppercase"
            />
            {errors.problem && (
              <p className="text-[10px] text-red-500 font-mono">
                {errors.problem.message}
              </p>
            )}
          </div>

          {/* Aesthetic Tone */}
          <div className="space-y-4">
            <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-accent font-mono flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-accent" />
              Processing Mode
            </label>
            <div className="grid grid-cols-3 gap-3">
              {(["Surgical", "Brutal", "Minimal"] as const).map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setValue("tone", t, { shouldValidate: true })}
                  className={`py-3 text-[10px] font-mono font-bold transition-all border-2 uppercase ${
                    tone === t
                      ? "bg-accent border-accent text-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
                      : "bg-zinc-900 border-zinc-700 text-zinc-500 hover:text-white hover:border-zinc-500"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>
      </PrecisionCard>

      {/* Action Button */}
      <button
        type="submit"
        disabled={isGenerating}
        className="relative group disabled:opacity-50 transition-all"
      >
        <div className="relative bg-zinc-800 border-2 border-zinc-700 p-6 flex items-center justify-center gap-4 group-hover:bg-accent group-hover:border-accent group-hover:shadow-[8px_8px_0_0_rgba(0,0,0,1)] transition-all">
          <span className="font-mono text-sm font-black tracking-[0.3em] text-white group-hover:text-black uppercase">
            {isGenerating ? "Generating..." : "Generate Architecture"}
          </span>
          {isGenerating && (
            <Loader2 className="w-5 h-5 animate-spin text-accent group-hover:text-black" />
          )}
        </div>
      </button>
    </form>
  );
}
