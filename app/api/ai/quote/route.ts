import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { budget } = await req.json();
  const base = budget || 1200;
  return NextResponse.json({
    tiers: [
      { name: 'Essentials', estimate: base, items: ['Balloon focal', 'Backdrop', 'Delivery'] },
      { name: 'Signature', estimate: base * 1.6, items: ['Backdrop', 'Throne chair', 'Cricut signage', 'On-site stylist'] },
      { name: 'Premium Luxe', estimate: base * 2.3, items: ['Floral upgrade', 'Lighting', 'Extended strike window'] }
    ]
  });
}
