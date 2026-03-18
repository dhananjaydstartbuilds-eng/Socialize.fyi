import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const SYSTEM_PROMPT = `
You are an elite, world-class social media copywriter.
Your task is to write a high-converting post for the user's chosen social media platform, based on their core idea and a pre-written high-performing hook.

INSTRUCTIONS:
1. The post MUST start with the exact hook provided by the user. Do not modify the hook.
2. Adapt the tone, length, and formatting perfectly to the requested PLATFORM.
3. Incorporate the core IDEA naturally into the body of the post.
4. Provide ONLY the final post text. Do not include introductory text, explanations, or any markdown like \`\`\` text... \`\`\`. Do not include quotes around the whole text unless they are part of the post content.

PLATFORM GUIDELINES:
- "LinkedIn": Professional but punchy. Use line breaks for readability. Share a valuable lesson or contrarian insight. End with a strong question to drive comments.
- "Twitter/X": Short, punchy, direct. Use numbers or bullet points. Minimal emojis. Max 280-300 characters or formatted as a compelling short thread opener.
- "Instagram": Visually evocative caption. Engaging language, strategic use of emojis. End with a clear Call to Action (like "Save this" or "Drop a 🔥"). Include 3-5 relevant hashtags.
- "Facebook": Conversational, storytelling, community-focused. Ask questions to spark a discussion in the comments.
- "Email": Written as a high-value personal newsletter. Include a cohesive subject line at the very top (e.g., "Subject: ..."). Professional tone, clear value proposition, narrative flow.
`;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { idea, hookText, platform } = body;

    const userContent = `
PLATFORM: ${platform}
IDEA: ${idea}
REQUIRED HOOK (must be the first line): ${hookText}
`;

    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: userContent }
      ],
      temperature: 0.7,
    });

    const content = response.choices[0]?.message?.content || "";

    return NextResponse.json({
      success: true,
      data: content.trim()
    });

  } catch (error: any) {
    console.error("Content generation error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to generate content" },
      { status: 500 }
    );
  }
}
