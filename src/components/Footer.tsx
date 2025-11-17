import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer>
      <div className="container footer-grid">
        <div>
          <p className="tag">{t('footer.cta')}</p>
          <h3 style={{ marginTop: '0.5rem' }}>{t('brand')}</h3>
        </div>
        <div>
          <Link className="btn btn-primary" to="/quote">{t('footer.ctaButton')}</Link>
        </div>
        <div style={{ justifySelf: 'end', textAlign: 'right' }}>
          <small>© {new Date().getFullYear()} {t('brand')}. {t('footer.copyright')}</small>
        </div>
      </div>
    </footer>
  );
}
