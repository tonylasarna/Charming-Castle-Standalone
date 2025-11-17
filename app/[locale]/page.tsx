import { Hero } from '../../components/sections/Hero';
import { ServicesOverview } from '../../components/sections/ServicesOverview';
import { AIShowcase } from '../../components/sections/AIShowcase';
import { RentalsPreview } from '../../components/sections/RentalsPreview';
import { QuoteCTA } from '../../components/sections/QuoteCTA';

export default function HomePage({ params }: { params: { locale: string } }) {
  return (
    <div className="space-y-16">
      <Hero locale={params.locale} />
      <ServicesOverview />
      <AIShowcase />
      <RentalsPreview />
      <QuoteCTA locale={params.locale} />
    </div>
  );
}
