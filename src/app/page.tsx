import Link from "next/link";
import Character from "@/components/character";
import { CornerMarkers, PrecisionCard } from "@/components/ui/PrecisionCard";

const features = [
  {
    id: "01",
    title: "System Diagrams",
    desc: "Automated structural blueprints using Mermaid.js for instant visualization of your application architecture.",
  },
  {
    id: "02",
    title: "Design Tokens",
    desc: "Professional color palettes and typography specifications extracted from your project parameters.",
  },
  {
    id: "03",
    title: "Architecture Docs",
    desc: "Complete markdown documentation generated instantly, formatted and ready for your repository.",
  },
];

export default function LandingPage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-background selection:bg-accent selection:text-black">
      {/*  Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-size-[40px_40px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_2px,transparent_2px),linear-gradient(to_bottom,#e4e4e7_2px,transparent_2px)] bg-size-[200px_200px]" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-24 py-8 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="text-xl font-black tracking-tighter text-white uppercase">
            Protocol<span className="text-accent">_</span>
          </span>
        </div>
        <Link
          href="/app"
          className="text-sm font-bold text-accent uppercase tracking-widest hover:text-white transition-colors"
        >
          Launch App
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-24 py-12 lg:py-24">
        <div className="bg-zinc-900/60 backdrop-blur-md border-2 border-zinc-800 p-8 lg:p-16 shadow-[24px_24px_0_0_rgba(0,0,0,0.3)] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl rounded-full -mr-16 -mt-16" />

          <div className="space-y-8 relative z-10">
            <div className="inline-block border border-zinc-700 bg-zinc-800/50 px-3 py-1">
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                Protocol // v1.0.4
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter text-white uppercase leading-[0.9]">
              Systemize <br />
              <span className="text-accent">Your Vision</span>
            </h1>

            <p className="text-lg text-zinc-300 max-w-lg leading-relaxed border-l-4 border-accent pl-6 py-2">
              Easily generate complete architecture documentation, system
              diagrams, and design tokens for your project.
            </p>

            <div className="pt-4 flex gap-6 items-center">
              <Link href="/app" className="group relative inline-flex">
                <div className="relative bg-zinc-100 border-2 border-white px-10 py-5 flex items-center justify-center gap-4 group-hover:bg-accent group-hover:border-accent group-hover:shadow-[8px_8px_0_0_rgba(0,0,0,1)] transition-all">
                  <span className="font-mono text-sm font-black tracking-[0.2em] text-black uppercase">
                    Get Started
                  </span>
                  <span className="text-black font-black text-xl">→</span>
                </div>
              </Link>
            </div>
          </div>

          {/* Character Display */}
          <div className="relative flex justify-center items-center h-full min-h-100 z-10">
            <CornerMarkers />
            <div className="relative z-10 w-3/4 h-3/4 p-8 scale-125">
              <Character />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-24 py-20 border-t-2 border-zinc-800 bg-zinc-950">
        <div className="mb-12">
          <h2 className="text-2xl font-black uppercase text-white flex items-center gap-4">
            <div className="w-3 h-3 bg-accent" />
            Core Capabilities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <PrecisionCard
              key={feature.id}
              className="group hover:border-accent hover:bg-zinc-900 transition-colors"
            >
              <div className="flex justify-between items-start mb-6 border-b-2 border-zinc-800 pb-4 group-hover:border-zinc-700 transition-colors">
                <h3 className="text-xs font-bold font-mono uppercase text-white tracking-widest">
                  {feature.title}
                </h3>
              </div>
              <p className="text-[10px] font-mono text-zinc-400 uppercase leading-relaxed group-hover:text-zinc-300 transition-colors">
                {feature.desc}
              </p>
            </PrecisionCard>
          ))}
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-24 py-8 border-t-2 border-zinc-800 flex justify-between items-center bg-background">
        <span className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Protocol. All rights reserved.
        </span>
      </footer>
    </main>
  );
}
