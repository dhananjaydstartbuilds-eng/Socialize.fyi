import { NextResponse } from "next/server";
import { openai } from "@/lib/openai";
import { buildBoostPrompt } from "@/lib/prompts";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const prompt = buildBoostPrompt(body);

    const response = await openai.chat.completions.create({
      model: "gpt-4-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    return NextResponse.json({ ok: true, data: response.choices[0]?.message?.content || "" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { ok: false, error: "Failed to generate boost output" },
      { status: 500 }
    );
  }
}
