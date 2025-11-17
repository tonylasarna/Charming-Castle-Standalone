import { useTranslation } from 'react-i18next';

type Props = {
  consent: string | null;
  onAccept: () => void;
  onDecline: () => void;
};

export default function ConsentBanner({ consent, onAccept, onDecline }: Props) {
  const { t } = useTranslation();
  if (consent) return null;

  const handleAccept = () => {
    localStorage.setItem('cc-consent', 'accepted');
    onAccept();
  };

  const handleDecline = () => {
    localStorage.setItem('cc-consent', 'declined');
    onDecline();
  };

  return (
    <div className="banner" role="region" aria-label="Cookie consent">
      <span>{t('consent.message')}</span>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button className="btn btn-primary" onClick={handleAccept}>{t('consent.accept')}</button>
        <button className="btn btn-secondary" onClick={handleDecline}>{t('consent.decline')}</button>
      </div>
    </div>
  );
}
