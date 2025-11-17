import { Brain, Image as ImageIcon, Sparkles, Wallet } from 'lucide-react';
import { CTAButton } from '../ui/CTAButton';
import { AIChat } from '../AIChat';

const features = [
  {
    title: 'AI Décor Assistant',
    description: 'Conversational planning that captures theme, palette, and venue to draft décor instantly.',
    icon: Sparkles
  },
  {
    title: 'Mood Board Generator',
    description: 'Create dreamy collages from palettes and themes, then download or share.',
    icon: ImageIcon
  },
  {
    title: 'Product Matchmaker',
    description: 'Semantic matching pairs your vibe with throne chairs, props, and balloons.',
    icon: Brain
  },
  {
    title: 'Quote Optimizer',
    description: 'Smart budgets produce Essentials, Signature, and Luxe options with hours and pricing.',
    icon: Wallet
  }
];

export function AIShowcase() {
  return (
    <section className="container-balanced">
      <div className="flex flex-col gap-4 mb-6">
        <p className="section-title">AI studio built-in</p>
        <p className="section-subtitle">Four intelligence layers to design, source, and budget faster.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {features.map((feature) => (
          <div key={feature.title} className="card-glass p-6 flex gap-4 items-start">
            <div className="h-11 w-11 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center">
              <feature.icon className="h-5 w-5" />
            </div>
            <div>
              <p className="font-display text-lg text-charcoal">{feature.title}</p>
              <p className="text-slate-700 text-sm mt-1">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr] items-start mt-8">
        <div className="flex flex-wrap gap-3 items-center">
          <CTAButton href="/en/rentals" className="">Try product matching</CTAButton>
          <CTAButton href="/en/contact" className="bg-white text-charcoal bg-none border border-charcoal/10">
            Start a quote
          </CTAButton>
        </div>
        <AIChat />
      </div>
    </section>
  );
}
