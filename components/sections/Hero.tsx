import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Sparkles } from 'lucide-react';
import { CTAButton } from '../ui/CTAButton';

export function Hero({ locale }: { locale: string }) {
  const t = useTranslations('hero');
  return (
    <section className="container-balanced py-16 grid gap-10 lg:grid-cols-2 items-center">
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 shadow-glow">
          <Sparkles className="h-4 w-4 text-rose-500" />
          <span className="text-xs font-semibold text-charcoal">AI-powered planning • Same-week installs</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-semibold text-charcoal leading-tight">
          {t('title')}
        </h1>
        <p className="text-lg text-slate-700">{t('subtitle')}</p>
        <div className="flex flex-wrap gap-4">
          <CTAButton href={`/${locale}/contact`}>{t('cta')}</CTAButton>
          <Link
            href={`/${locale}/services`}
            className="px-4 py-3 rounded-full border border-charcoal/20 text-charcoal hover:border-rose-400"
          >
            {t('secondary')}
          </Link>
        </div>
        <div className="flex gap-6 text-sm text-slate-600">
          <div>
            <p className="font-display text-3xl text-charcoal">300+</p>
            <p>Celebrations styled</p>
          </div>
          <div>
            <p className="font-display text-3xl text-charcoal">95%</p>
            <p>Requests answered in 1h</p>
          </div>
        </div>
      </div>
      <div className="card-glass p-8 relative overflow-hidden">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-rose-200 to-lavender blur-3xl" />
        <div className="relative space-y-4">
          <div className="flex items-center justify-between">
            <p className="font-display text-xl text-charcoal">AI Décor Assistant</p>
            <span className="text-xs bg-rose-100 text-rose-600 px-3 py-1 rounded-full">Beta</span>
          </div>
          <div className="rounded-2xl bg-white/90 border border-white/70 p-4 space-y-2">
            <p className="text-sm text-slate-700">“Plan a whimsical sweet 16 in blush, gold, and lilac with a shimmer wall.”</p>
            <div className="rounded-xl bg-rose-50 p-3 text-sm text-charcoal">
              <p className="font-semibold">AI recommends</p>
              <ul className="list-disc ml-4 space-y-1">
                <li>Organic balloon arch with pearl shimmer</li>
                <li>Champagne shimmer wall + “Sweet Sixteen” neon</li>
                <li>Rosé throne chair + marble plinths</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
