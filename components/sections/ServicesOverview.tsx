import { services } from '../../lib/content';
import { Sparkles } from 'lucide-react';

export function ServicesOverview() {
  return (
    <section className="container-balanced">
      <div className="flex items-center gap-3 mb-6">
        <Sparkles className="h-5 w-5 text-rose-500" />
        <div>
          <p className="section-title">Signature services</p>
          <p className="section-subtitle">Balloon artistry, bespoke backdrops, Cricut signage, and styling.</p>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <div key={service.key} className="card-glass p-6 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-display text-charcoal">{service.title}</h3>
              <span className="text-xs bg-rose-100 text-rose-600 px-3 py-1 rounded-full">Popular</span>
            </div>
            <p className="text-slate-700">{service.description}</p>
            <ul className="grid gap-2 sm:grid-cols-2 text-sm text-slate-600">
              {service.perks.map((perk) => (
                <li key={perk} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-rose-400" />
                  {perk}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
