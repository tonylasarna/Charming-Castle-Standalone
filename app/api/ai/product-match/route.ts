import { NextResponse } from 'next/server';
import { rentals } from '../../../../lib/content';

export async function POST(req: Request) {
  const { preferences } = await req.json();
  const matched = rentals.slice(0, 2);
  return NextResponse.json({
    matches: matched,
    preferences
  });
}
