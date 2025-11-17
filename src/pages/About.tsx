import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function About() {
  const { t } = useTranslation();
  return (
    <div className="container" style={{ padding: '3rem 0' }}>
      <div className="section-title">
        <span className="tag">{t('about.title')}</span>
        <h1>{t('about.title')}</h1>
      </div>
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', alignItems: 'center' }}>
        <div>
          <p>{t('about.body')}</p>
          <p>{t('contact.area')}</p>
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
            <Link className="btn btn-primary" to="/quote">{t('hero.cta')}</Link>
            <a className="btn btn-secondary" href="tel:+14075550199">{t('contact.phone')} +1 (407) 555-0199</a>
          </div>
        </div>
        <div className="card">
          <h2>{t('contact.title')}</h2>
          <p><strong>{t('contact.phone')}:</strong> +1 (407) 555-0199</p>
          <p><strong>{t('contact.email')}:</strong> hello@charmingcastle.com</p>
          <p><strong>{t('contact.hours')}:</strong> Tue-Sat, 9a-6p</p>
        </div>
      </div>
    </div>
  );
}
