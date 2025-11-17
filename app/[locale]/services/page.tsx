import { services } from '../../../lib/content';
import { CTAButton } from '../../../components/ui/CTAButton';

export default function ServicesPage() {
  return (
    <div className="container-balanced py-12 space-y-8">
      <div className="space-y-3">
        <p className="section-title">Services</p>
        <p className="section-subtitle">From balloon artistry to full-service styling with fast AI planning.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <div key={service.key} className="card-glass p-6 space-y-3">
            <p className="font-display text-2xl text-charcoal">{service.title}</p>
            <p className="text-slate-700">{service.description}</p>
            <ul className="list-disc ml-5 text-sm text-slate-600 space-y-1">
              {service.perks.map((perk) => (
                <li key={perk}>{perk}</li>
              ))}
            </ul>
            <CTAButton href="/en/contact">Request this service</CTAButton>
          </div>
        ))}
      </div>
    </div>
  );
}
