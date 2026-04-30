PRD: PROTOCOL | The Engineering Identity Architect

1. Project Overview
   Product Name: PROTOCOL (stylized as PRTCL.)

Vision: To bridge the gap between raw code and professional engineering narrative by synthesizing a cohesive technical identity.

Core Problem: Developers often build great tools but struggle to articulate the "why" (narrative), "how" (architecture), and "look" (design) in a professional, industry-standard manner.

2. Target Audience
   Software Engineers: Polishing portfolio projects for recruitment.

Tech Leads: Generating quick architectural manifestos for internal tools.

Indie Hackers: Establishing a professional brand identity for MVP launches.

3. Functional Requirements
   3.1 Input Module (The Configuration)
   The UI must collect the following "Seed Data" from the user:

Project Name: String (e.g., "Aureus").

Core Stack: Multi-select chips (e.g., Go, GORM, Postgres, Next.js).

Problem Statement: Textarea (e.g., "Manual asset tracking is prone to human error").

Architectural Tone: Segmented Control (Options: Surgical, Brutal, Minimal).

3.2 AI Synthesis Engine (Gemini 1.5 Flash Integration)
The AI must act as a Senior System Architect. Upon trigger, it generates four distinct outputs:

The Manifesto: A high-level narrative (2-3 paragraphs) explaining the philosophy of the tech choices.

The Blueprint: Valid Mermaid.js syntax representing the system's data flow or architecture.

Design Tokens: A JSON object containing a Zinc-based color palette and typography rules.

The README: A structured Markdown file ready for GitHub deployment.

3.3 Output Dashboard (The Live Blueprint)
Split-Screen View: Left side for configuration, right side for live-rendered results.

Interactive Blocks: Each AI-generated module must have a "Copy to Clipboard" and a "Refine" button.

Diagram Renderer: Integration with mermaid.js to turn AI text into visual flowcharts.

4. Technical Requirements
   4.1 Tech Stack
   Framework: Next.js 14+ (App Router) for speed and SEO.

Styling: Tailwind CSS + Shadcn/UI (Theme: Zinc).

AI SDK: Vercel AI SDK or Google AI SDK (Gemini 1.5 Flash).

Visuals: framer-motion for "Scale-like" light glows; mermaid for diagramming.

Deployment: Vercel (Edge Functions for low-latency AI streaming).

4.2 Gemini System Instruction (Copy-Paste)
Role: You are the PROTOCOL Architect. Your task is to transform raw developer inputs into a professional "Engineering Identity".
Rules:

Narrative: Use precise, technical, yet inspiring language. Avoid "AI slop" (clichés).

Architecture: Output valid Mermaid.js graph code ONLY within the Blueprint block.

Design: Stay within the Zinc palette (#09090b, #18181b, #27272a, #fafafa). Use #f97316 for subtle industrial accents.

Output Format: Structured JSON containing 'manifesto', 'mermaidCode', 'designTokens', and 'readmeMarkdown'.

5. UI/UX Design (Scale-Fusion Aesthetic)
   Color Palette: Pure Black (#000000) background, Zinc-900 (#18181b) cards.

Visual Elements: \* Subtle 1px grid background lines.

Cards with 1px borders and "Corner Brackets" (indicators at corners).
PRD: PROTOCOL | The Engineering Identity Architect

1. Project Overview
   Product Name: PROTOCOL (stylized as PRTCL.)

Vision: To bridge the gap between raw code and professional engineering narrative by synthesizing a cohesive technical identity.

Core Problem: Developers often build great tools but struggle to articulate the "why" (narrative), "how" (architecture), and "look" (design) in a professional, industry-standard manner.

2. Target Audience
   Software Engineers: Polishing portfolio projects for recruitment.

Tech Leads: Generating quick architectural manifestos for internal tools.

Indie Hackers: Establishing a professional brand identity for MVP launches.

3. Functional Requirements
   3.1 Input Module (The Configuration)
   The UI must collect the following "Seed Data" from the user:

Project Name: String (e.g., "Aureus").

Core Stack: Multi-select chips (e.g., Go, GORM, Postgres, Next.js).

Problem Statement: Textarea (e.g., "Manual asset tracking is prone to human error").

Architectural Tone: Segmented Control (Options: Surgical, Brutal, Minimal).

3.2 AI Synthesis Engine (Gemini 1.5 Flash Integration)
The AI must act as a Senior System Architect. Upon trigger, it generates four distinct outputs:

The Manifesto: A high-level narrative (2-3 paragraphs) explaining the philosophy of the tech choices.

The Blueprint: Valid Mermaid.js syntax representing the system's data flow or architecture.

Design Tokens: A JSON object containing a Zinc-based color palette and typography rules.

The README: A structured Markdown file ready for GitHub deployment.

3.3 Output Dashboard (The Live Blueprint)
Split-Screen View: Left side for configuration, right side for live-rendered results.

Interactive Blocks: Each AI-generated module must have a "Copy to Clipboard" and a "Refine" button.

Diagram Renderer: Integration with mermaid.js to turn AI text into visual flowcharts.

4. Technical Requirements
   4.1 Tech Stack
   Framework: Next.js 14+ (App Router) for speed and SEO.

Styling: Tailwind CSS + Shadcn/UI (Theme: Zinc).

AI SDK: Vercel AI SDK or Google AI SDK (Gemini 1.5 Flash).

Visuals: framer-motion for "Scale-like" light glows; mermaid for diagramming.

Deployment: Vercel (Edge Functions for low-latency AI streaming).

4.2 Gemini System Instruction (Copy-Paste)
Role: You are the PROTOCOL Architect. Your task is to transform raw developer inputs into a professional "Engineering Identity".
Rules:

Narrative: Use precise, technical, yet inspiring language. Avoid "AI slop" (clichés).

Architecture: Output valid Mermaid.js graph code ONLY within the Blueprint block.

Design: Stay within the Zinc palette (#09090b, #18181b, #27272a, #fafafa). Use #f97316 for subtle industrial accents.

Output Format: Structured JSON containing 'manifesto', 'mermaidCode', 'designTokens', and 'readmeMarkdown'.

5. UI/UX Design (Scale-Fusion Aesthetic)
   Color Palette: Pure Black (#000000) background, Zinc-900 (#18181b) cards.

Visual Elements: \* Subtle 1px grid background lines.

Cards with 1px borders and "Corner Brackets" (indicators at corners).

Low-contrast orange (#f97316) glows on hover for primary buttons.

Typography: \* Primary: Inter or Geist Sans (Sophisticated).

Data/Technical: JetBrains Mono (Industrial).

6. Implementation Roadmap (1.5 Days)
   Day 1: Foundation & AI (8 Hours)
   Hours 1-2: Scaffolding Next.js, Shadcn UI setup, and defining the Zinc theme.

Hours 3-5: Building the Input Configuration form and state management.

Hours 6-8: Implementing the Gemini 1.5 Flash API route. Focus on the System Prompt to ensure valid Mermaid.js and JSON output.

Day 2 (Half Day): Dashboard & Polish (4 Hours)
Hours 1-2: Building the Output Dashboard (Manifesto renderer and Mermaid diagram component).

Hours 3: Adding "Scale" aesthetics (grid, glows, and corner brackets).

Hour 4: Final Deployment to Vercel and README generation testing.

7. Success Metrics
   Speed: AI response-to-render in under 3 seconds (using Gemini Flash).

Originality: High score in AI narrative (no generic "Revolutionizing X" phrases).

Portability: Resulting README is 100% compatible with GitHub.
Low-contrast orange (#f97316) glows on hover for primary buttons.

Typography: \* Primary: Inter or Geist Sans (Sophisticated).

Data/Technical: JetBrains Mono (Industrial).

6. Implementation Roadmap (1.5 Days)
   Day 1: Foundation & AI (8 Hours)
   Hours 1-2: Scaffolding Next.js, Shadcn UI setup, and defining the Zinc theme.

Hours 3-5: Building the Input Configuration form and state management.

Hours 6-8: Implementing the Gemini 1.5 Flash API route. Focus on the System Prompt to ensure valid Mermaid.js and JSON output.

Day 2 (Half Day): Dashboard & Polish (4 Hours)
Hours 1-2: Building the Output Dashboard (Manifesto renderer and Mermaid diagram component).

Hours 3: Adding "Scale" aesthetics (grid, glows, and corner brackets).

Hour 4: Final Deployment to Vercel and README generation testing.

7. Success Metrics
   Speed: AI response-to-render in under 3 seconds (using Gemini Flash).

Originality: High score in AI narrative (no generic "Revolutionizing X" phrases).

Portability: Resulting README is 100% compatible with GitHub.
