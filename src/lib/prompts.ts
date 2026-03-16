export const buildGeneratePrompt = ({
  title,
  originalIdea,
  audience,
  tone,
  cta,
}: {
  title: string;
  originalIdea: string;
  audience?: string;
  tone?: string;
  cta?: string;
}) => `
You are an elite social media strategist.

Take the following master post idea and convert it into a distribution pack.
Return valid JSON only.

Title: ${title}
Original Idea: ${originalIdea}
Audience: ${audience ?? "General audience"}
Tone: ${tone ?? "Clear and persuasive"}
CTA: ${cta ?? "Encourage discussion and clicks"}

Return JSON with this exact shape:
{
 "linkedin": "",
 "twitter_thread": "",
 "instagram_caption": "",
 "youtube_short_script": "",
 "newsletter_intro": ""
}
\`

Rules:
- Keep each platform native in style.
- Preserve the same core idea.
- Make the writing sharp and practical.
- Do not use hashtags unless natural.
- Each version should point back to a central post hub conceptually.
`;

export const buildBoostPrompt = ({
  originalIdea,
  currentVariant,
  boostType,
}: {
  originalIdea: string;
  currentVariant?: string;
  boostType: string;
}) => `
You are improving the performance potential of a master social media post.

Original Idea:
${originalIdea}

Current Variant:
${currentVariant ?? "N/A"}

Boost Type:
${boostType}

Return plain text only.

If boost type is:
- stronger_hook: write 5 stronger hooks
- follow_up_post: write 1 strong follow-up post
- smart_replies: write 5 thoughtful audience replies
- second_wave_repost: write 1 refreshed repost version with a new angle
`;
