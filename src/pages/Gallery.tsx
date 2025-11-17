import { gallery } from '../data/content';
import { useTranslation } from 'react-i18next';

export default function Gallery() {
  const { t } = useTranslation();
  return (
    <div className="container" style={{ padding: '3rem 0' }}>
      <div className="section-title">
        <span className="tag">{t('gallery.title')}</span>
        <h1>{t('gallery.title')}</h1>
      </div>
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
        {gallery.map((item) => (
          <article key={item.title} className="card gallery-card">
            <img src={item.image} alt={item.title} loading="lazy" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
