import { useTranslation } from 'react-i18next';
import { services, faqs } from '../data/content';
import { Link } from 'react-router-dom';

export default function Services() {
  const { t } = useTranslation();
  return (
    <div className="container" style={{ padding: '3rem 0' }}>
      <div className="section-title">
        <span className="tag">{t('services.title')}</span>
        <h1>{t('services.title')}</h1>
      </div>
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
        {services.map((service) => (
          <article className="card" key={service.id}>
            <h2>{t(`services.items.${service.id}.title`) || service.name}</h2>
            <p>{t(`services.items.${service.id}.description`) || service.description}</p>
            <Link className="btn btn-secondary" to="/quote">{t('hero.cta')}</Link>
          </article>
        ))}
      </div>

      <section style={{ marginTop: '2rem' }}>
        <div className="section-title">
          <span className="tag">FAQ</span>
          <h2>Details</h2>
        </div>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
          {faqs.map((faq) => (
            <article className="card" key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
