import { useTranslation } from 'react-i18next';
import QuoteForm from '../components/QuoteForm';

export default function Quote() {
  const { t } = useTranslation();
  return (
    <div className="container" style={{ padding: '3rem 0' }}>
      <div className="section-title">
        <span className="tag">{t('quote.title')}</span>
        <h1>{t('quote.title')}</h1>
      </div>
      <p>{t('quote.intro')}</p>
      <QuoteForm />
    </div>
  );
}
