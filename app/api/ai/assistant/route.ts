import { NextResponse } from 'next/server';
import OpenAI from 'openai';

export async function POST(req: Request) {
  const body = await req.json();
  const { message } = body;
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return NextResponse.json({
      reply:
        'AI assistant placeholder: share your event type, theme, and colours to receive décor, rentals, and quote ranges.'
    });
  }

  const client = new OpenAI({ apiKey });
  const completion = await client.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'system',
        content:
          'You are Charming Castle’s décor architect. Return concise packages: palette, balloons, backdrop, rentals, signage, and three budget tiers with hours.'
      },
      { role: 'user', content: message }
    ]
  });

  return NextResponse.json({ reply: completion.choices[0].message.content });
}
