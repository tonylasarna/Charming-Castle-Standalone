import { rentals } from '../../lib/content';
import { CTAButton } from '../ui/CTAButton';

export function RentalsPreview() {
  return (
    <section className="container-balanced">
      <div className="flex flex-col gap-3 mb-4">
        <p className="section-title">Rentals with instant matching</p>
        <p className="section-subtitle">Throne chairs, shimmer walls, plinths, and props suggested by AI.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {rentals.map((rental) => (
          <div key={rental.id} className="card-glass p-6 space-y-2">
            <div className="flex items-center justify-between">
              <p className="font-display text-lg text-charcoal">{rental.name}</p>
              <span className="text-xs bg-lavender text-charcoal px-3 py-1 rounded-full">{rental.category}</span>
            </div>
            <p className="text-sm text-slate-600">Starting at ${rental.price}</p>
            <ul className="text-sm text-slate-600 space-y-1">
              {rental.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-gold" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <CTAButton href="/en/rentals">Browse all rentals</CTAButton>
      </div>
    </section>
  );
}
