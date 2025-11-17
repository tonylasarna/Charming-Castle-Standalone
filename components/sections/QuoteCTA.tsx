import { CTAButton } from '../ui/CTAButton';

export function QuoteCTA({ locale }: { locale: string }) {
  return (
    <section className="container-balanced">
      <div className="card-glass p-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="section-title">Ready for a tailored quote?</p>
          <p className="section-subtitle">Answer 6 quick steps, then receive Essentials, Signature, and Luxe options.</p>
        </div>
        <div className="flex gap-3">
          <CTAButton href={`/${locale}/contact`}>Start quote flow</CTAButton>
          <CTAButton
            href={`/${locale}/rentals`}
            className="bg-white text-charcoal border border-charcoal/10"
          >
            View rentals
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
