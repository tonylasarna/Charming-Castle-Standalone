import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const navClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? { textDecoration: 'underline', textDecorationThickness: '3px' } : undefined;

export default function Header() {
  const { t, i18n } = useTranslation();

  const handleLanguage = (lang: 'en' | 'es') => {
    i18n.changeLanguage(lang);
  };

  return (
    <header>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" aria-label={t('brand')} style={{ fontWeight: 800, letterSpacing: '0.04em' }}>
          {t('brand')}
        </Link>
        <nav aria-label="Primary">
          <ul>
            <li><NavLink style={navClass} to="/">{t('nav.home')}</NavLink></li>
            <li><NavLink style={navClass} to="/services">{t('nav.services')}</NavLink></li>
            <li><NavLink style={navClass} to="/rentals">{t('nav.rentals')}</NavLink></li>
            <li><NavLink style={navClass} to="/gallery">{t('nav.gallery')}</NavLink></li>
            <li><NavLink style={navClass} to="/about">{t('nav.about')}</NavLink></li>
            <li><NavLink style={navClass} to="/quote" className="btn btn-primary">{t('nav.quote')}</NavLink></li>
          </ul>
        </nav>
        <div className="lang-switcher" aria-label={t('lang.label')}>
          <button className="btn btn-secondary" aria-pressed={i18n.language === 'en'} onClick={() => handleLanguage('en')}>
            {t('lang.en')}
          </button>
          <button className="btn btn-secondary" aria-pressed={i18n.language === 'es'} onClick={() => handleLanguage('es')}>
            {t('lang.es')}
          </button>
        </div>
      </div>
    </header>
  );
}
