import Link from 'next/link';
import { cn } from '../../lib/utils';
import { ReactNode } from 'react';

type Props = {
  href?: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

export function CTAButton({ href, children, className, onClick, type = 'button' }: Props) {
  const shared = cn(
    'inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-rose-500 via-gold to-lavender px-5 py-3 text-white shadow-glow transition-transform hover:-translate-y-0.5',
    className
  );

  if (href) {
    return (
      <Link href={href} className={shared} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={shared} onClick={onClick}>
      {children}
    </button>
  );
}
