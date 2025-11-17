import { useEffect } from 'react';

const sendPageview = () => {
  if (window.gtag) {
    window.gtag('event', 'page_view');
  }
};

type Props = {
  consent: boolean;
};

export default function Analytics({ consent }: Props) {
  useEffect(() => {
    const gaId = import.meta.env.VITE_GA_ID as string | undefined;
    if (!consent || !gaId) return;

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag as typeof window.gtag;
    window.gtag('js', new Date());
    window.gtag('config', gaId, { anonymize_ip: true });
    sendPageview();

    return () => {
      document.head.removeChild(script);
    };
  }, [consent]);

  useEffect(() => {
    if (consent) {
      window.addEventListener('popstate', sendPageview);
      return () => window.removeEventListener('popstate', sendPageview);
    }
  }, [consent]);

  return null;
}

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}
