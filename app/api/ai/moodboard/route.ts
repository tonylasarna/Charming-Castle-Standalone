import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { theme, colors } = await req.json();
  const filename = `${theme.replace(/\s+/g, '-')}-board.png`;
  return NextResponse.json({
    message: 'Mood board generated',
    path: `/generated/${filename}`,
    colors
  });
}
