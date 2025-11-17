import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { rentals } from '../data/content';
import { Link } from 'react-router-dom';

const categories = ['All', ...new Set(rentals.map((item) => item.category))];

export default function Rentals() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return rentals;
    return rentals.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="container" style={{ padding: '3rem 0' }}>
      <div className="section-title">
        <span className="tag">{t('rentals.title')}</span>
        <h1>{t('rentals.title')}</h1>
      </div>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            className="btn btn-secondary"
            aria-pressed={activeCategory === cat}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
        {filtered.map((rental) => (
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
    </div>
  );
}
