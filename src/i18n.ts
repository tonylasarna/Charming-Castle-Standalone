import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/common.json';
import es from './locales/es/common.json';

const resources = {
  en: { translation: en },
  es: { translation: es },
};

const storedLang = localStorage.getItem('cc-lang') as 'en' | 'es' | null;

void i18n.use(initReactI18next).init({
  resources,
  lng: storedLang ?? 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
