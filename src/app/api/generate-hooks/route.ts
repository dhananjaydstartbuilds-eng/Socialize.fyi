import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const SYSTEM_PROMPT = `
🧪 Hook Generation + Scoring Prompt

You are a high-performance social media strategist. Your job is to generate and evaluate hooks that maximize Social Media engagement, interaction, views and re-posts.

Generate 5 hook variations using different angles based on the user's input. The standard angles are:
- Contrarian
- Curiosity gap
- Outcome-driven
- Mistake/warning
- Authority/tested insight

If the user provides a specific preferred framework/angle, ensure one of the hooks matches that angle and is heavily optimized.

Score each hook out of 100 using:
1. Curiosity (0-20)
2. Specificity (0-20)
3. Outcome clarity (0-20)
4. Pattern interrupt (0-20)
5. Emotional trigger (0-20)

You MUST return a pure JSON array containing 5 objects. Do not include any markdown escaping like \`\`\`json. Output ONLY the JSON array.

Strict JSON format to follow:
[
  {
    "type": "Contrarian",
    "text": "The hook itself...",
    "score": 85,
    "breakdown": {
      "curiosity": 15,
      "specificity": 18,
      "outcome": 17,
      "pattern": 20,
      "emotion": 15
    },
    "reason": "Why this works..."
  }
]
`;

const MUTATION_PROMPT = `
🔥 Hook Mutation Prompt

You are optimizing a high-performing hook. Increase this hook’s performance score to 85+.

Do this by:
- Increasing curiosity gap
- Making the outcome clearer
- Adding specificity
- Introducing a stronger emotional trigger

Generate 1 improved version using the provided hook and score context.

You MUST return a pure JSON object. Do not include any markdown escaping like \`\`\`json. Output ONLY the JSON object.

Strict JSON format to follow:
{
  "type": "Mutated Winner",
  "text": "The improved hook...",
  "score": 95,
  "breakdown": {
    "curiosity": 20,
    "specificity": 20,
    "outcome": 20,
    "pattern": 18,
    "emotion": 17
  },
  "reason": "Why this mutated hook is better..."
}
`;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { idea, framework, action, originalHook, originalScore } = body;

    let systemContent = SYSTEM_PROMPT;
    let userContent = `INPUT:\nIdea: ${idea}\nPreferred Framework: ${framework}`;

    if (action === "mutate") {
      systemContent = MUTATION_PROMPT;
      userContent = `Original Hook:\n${JSON.stringify(originalHook)}\n\nPrior Score Breakdown:\n${JSON.stringify(originalScore)}`;
    }

    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "system", content: systemContent },
        { role: "user", content: userContent }
      ],
      temperature: 0.7,
    });

    const content = response.choices[0]?.message?.content || "[]";
    let data;
    try {
      data = JSON.parse(content);
    } catch(e) {
      data = JSON.parse(content.replace(/\`\`\`json/g, '').replace(/\`\`\`/g, '').trim());
    }

    return NextResponse.json({
      success: true,
      data
    });

  } catch (error: any) {
    console.error("Hook generation error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to generate hooks" },
      { status: 500 }
    );
  }
}
