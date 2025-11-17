import Image from 'next/image';
import { portfolio } from '../../../lib/content';

export default function PortfolioPage() {
  return (
    <div className="container-balanced py-12 space-y-6">
      <div>
        <p className="section-title">Portfolio</p>
        <p className="section-subtitle">A few favourites from mitzvahs, quinceañeras, and corporate socials.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {portfolio.map((item) => (
          <div key={item.title} className="card-glass overflow-hidden">
            <div className="relative h-52 w-full">
              <Image src={item.image} alt={item.title} fill className="object-cover" />
            </div>
            <div className="p-4 space-y-1">
              <p className="font-display text-lg text-charcoal">{item.title}</p>
              <p className="text-sm text-slate-600">{item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
