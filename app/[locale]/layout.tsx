import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { Locale } from '../../lib/intl';
import '../globals.css';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }];
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: { locale: Locale };
}) {
  const { locale } = params;
  if (!['en', 'es'].includes(locale)) {
    notFound();
  }

  const messages = (await import(`../../i18n/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <body className="font-body">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="min-h-screen flex flex-col">
            <Header locale={locale} />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
