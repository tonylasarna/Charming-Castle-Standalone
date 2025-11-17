'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { cn } from '../lib/utils';

export function Header({ locale }: { locale: string }) {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const navItems = useMemo(
    () => [
      { href: `/${locale}`, label: t('home') },
      { href: `/${locale}/services`, label: t('services') },
      { href: `/${locale}/portfolio`, label: t('portfolio') },
      { href: `/${locale}/rentals`, label: t('rentals') },
      { href: `/${locale}/about`, label: t('about') },
      { href: `/${locale}/blog`, label: t('blog') },
      { href: `/${locale}/contact`, label: t('contact') }
    ],
    [locale, t]
  );

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 border-b border-white/50">
      <div className="container-balanced flex items-center justify-between py-4">
        <Link href={`/${locale}`} className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-rose-400 via-gold to-lavender flex items-center justify-center shadow-glow">
            <span className="text-white font-display text-xl">CC</span>
          </div>
          <div>
            <p className="font-display text-xl text-charcoal">Charming Castle</p>
            <p className="text-sm text-slate-600">Forest Hill, Toronto</p>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'hover:text-rose-500 transition-colors',
                pathname === item.href && 'text-rose-500'
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={`/${locale}/contact`}
            className="rounded-full bg-charcoal text-white px-4 py-2 shadow-glow hover:bg-rose-500 transition-colors"
          >
            {t('contact')}
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link href={pathname?.replace(`/en`, '/es') || '/es'} className="text-sm text-slate-600">
            ES
          </Link>
          <Link href={pathname?.replace(`/es`, '/en') || '/en'} className="text-sm text-slate-600">
            EN
          </Link>
        </div>
      </div>
    </header>
  );
}
