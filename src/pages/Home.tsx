import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { rentals, gallery, services } from '../data/content';
import QuoteForm from '../components/QuoteForm';

export default function Home() {
  const { t } = useTranslation();
  return (
    <div>
      <section className="container hero">
        <div>
          <p className="badge">{t('brand')}</p>
          <h1>{t('hero.title')}</h1>
          <p>{t('hero.subtitle')}</p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <Link className="btn btn-primary" to="/quote">{t('hero.cta')}</Link>
            <Link className="btn btn-secondary" to="/rentals">{t('hero.secondary')}</Link>
          </div>
        </div>
        <div className="card">
          <h2 className="section-title"><span className="tag">Quote</span> {t('quote.title')}</h2>
          <p>{t('quote.intro')}</p>
          <QuoteForm />
        </div>
      </section>

      <section className="container">
        <div className="section-title">
          <span className="tag">{t('services.title')}</span>
          <h2>{t('services.title')}</h2>
        </div>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
          {services.map((service) => (
            <div className="card" key={service.id}>
              <h3>{t(`services.items.${service.id}.title`) || service.name}</h3>
              <p>{t(`services.items.${service.id}.description`) || service.description}</p>
              <Link to="/quote">{t('hero.cta')}</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="section-title">
          <span className="tag">{t('rentals.title')}</span>
          <h2>{t('rentals.title')}</h2>
        </div>
        <p>{t('rentals.mobile_hint')}</p>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
          {rentals.map((rental) => (
            <article key={rental.id} className="card rental-card">
              <img src={rental.image} alt={rental.name} loading="lazy" />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3>{rental.name}</h3>
                <span className="badge">{t('catalog.priceFrom')} {rental.priceFrom}</span>
              </div>
              <p>{rental.description}</p>
              <Link className="btn btn-secondary" to="/quote">{t('catalog.cta')}</Link>
            </article>
          ))}
        </div>
        <div style={{ marginTop: '1rem' }}>
          <Link className="btn btn-primary" to="/rentals">{t('rentals.cta')}</Link>
        </div>
      </section>

      <section className="container">
        <div className="section-title">
          <span className="tag">{t('gallery.title')}</span>
          <h2>{t('gallery.title')}</h2>
        </div>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
          {gallery.map((item) => (
            <article className="card gallery-card" key={item.title}>
              <img src={item.image} alt={item.title} loading="lazy" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
