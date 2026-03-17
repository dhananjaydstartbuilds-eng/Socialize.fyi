import { NextResponse } from 'next/dist/server/web/spec-extension/response';

// This is a placeholder for the actual LLM integration.
// Currently it returns simulated data using the system prompt provided.

const SYSTEM_PROMPT = `
🧪 Hook Generation + Scoring Prompt

You are a high-performance social media strategist. Your job is to generate and evaluate hooks that maximize Social Media engagement, interaction, views and re-posts.

INPUT:
[Insert post topic or content]

STEP 1 — Generate 5 hook variations using different angles:
- Contrarian
- Curiosity gap
- Outcome-driven
- Mistake/warning
- Authority/tested insight

STEP 2 — Score each hook out of 100 using:
1. Curiosity (0–20)
2. Specificity (0–20)
3. Outcome clarity (0–20)
4. Pattern interrupt (0–20)
5. Emotional trigger (0–20)

STEP 3 — Display results in this format:
Hook:
Score: X/100
Breakdown:
- Curiosity: X
- Specificity: X
- Outcome: X
- Pattern Interrupt: X
- Emotion: X
Reason:
[Why this works or fails]

STEP 4 — Take the BEST hook and generate 3 improved versions.
Each improved version must:
- Increase curiosity
- Sharpen specificity
- Strengthen emotional pull
- Be more scroll-stopping

Return only high-performing hooks (70+ score).
`;

const MUTATION_PROMPT = `
🔥 Hook Mutation Prompt

You are optimizing a high-performing hook.

Original Hook:
[Insert hook]

Score:
[Insert score breakdown]

Your goal:
Increase this hook’s performance score to 85+.

Do this by:
- Increasing curiosity gap
- Making the outcome clearer
- Adding specificity
- Introducing a stronger emotional trigger

Generate 3 improved versions.
Each version must:
- Be more compelling than the original
- Not longer than necessary
- Feel natural, not robotic
`;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { idea, framework, action, originalHook, originalScore } = body;

    // TODO: Connect to OpenAI/Anthropic SDK here
    // Example:
    // const response = await openai.chat.completions.create({
    //   model: "gpt-4",
    //   messages: [
    //     { role: "system", content: action === 'mutate' ? MUTATION_PROMPT : SYSTEM_PROMPT },
    //     { role: "user", content: action === 'mutate' ? \`Original: \${originalHook}, Score: \${originalScore}\` : \`INPUT: \${idea}, Focus: \${framework}\` }
    //   ]
    // });
    
    // For MVP frontend development, we simulate a successful 200 response.
    return NextResponse.json({
      success: true,
      message: "AI Endpoint Structure created. Ready for LLM integration.",
      systemPrompt: SYSTEM_PROMPT,
      mutationPrompt: MUTATION_PROMPT
    });

  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to generate hooks" },
      { status: 500 }
    );
  }
}
