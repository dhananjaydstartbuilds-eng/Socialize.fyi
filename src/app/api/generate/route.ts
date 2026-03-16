import { NextResponse } from "next/server";
import { openai } from "@/lib/openai";
import { buildGeneratePrompt } from "@/lib/prompts";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const prompt = buildGeneratePrompt(body);

    const response = await openai.chat.completions.create({
      model: "gpt-4-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    const text = response.choices[0]?.message?.content || "";
    const parsed = JSON.parse(text);

    return NextResponse.json({ ok: true, data: parsed });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { ok: false, error: "Failed to generate distribution pack" },
      { status: 500 }
    );
  }
}
