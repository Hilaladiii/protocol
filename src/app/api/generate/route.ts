import { SYSTEM_PROMPT } from "@/constant/prompt";
import { NextResponse } from "next/server";

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY || "";
const OPENROUTER_BASE_API_URL = process.env.OPENROUTER_BASE_API_URL || "";

export async function POST(req: Request) {
  try {
    const { projectName, stack, problem, tone } = await req.json();

    const prompt = `
    Generate an Engineering Identity for the following project:
    Project Name: ${projectName}
    Core Stack: ${stack.join(", ")}
    Problem Statement: ${problem}
    Architectural Tone: ${tone}
    `;

    const response = await fetch(OPENROUTER_BASE_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: prompt },
        ],
        response_format: { type: "json_object" },
        temperature: 0.2,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("OpenRouter Error Response:", errorText);
      throw new Error("OpenRouter API request failed");
    }

    const data = await response.json();

    let responseText = data.choices[0].message.content;

    responseText = responseText
      .replace(/```json\n?/g, "")
      .replace(/```\n?/g, "")
      .trim();

    return NextResponse.json(JSON.parse(responseText));
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json(
      { error: "Failed to generate identity. Please try again." },
      { status: 500 },
    );
  }
}
