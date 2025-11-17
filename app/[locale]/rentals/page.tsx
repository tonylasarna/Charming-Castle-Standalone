'use client';

import { useMemo, useState } from 'react';
import { rentals } from '../../../lib/content';
import { CTAButton } from '../../../components/ui/CTAButton';
import { BadgeCheck, Heart, Search } from 'lucide-react';

export default function RentalsPage() {
  const [query, setQuery] = useState('');
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [matchmakerStatus, setMatchmakerStatus] = useState<{ state: 'idle' | 'loading' | 'success' | 'error'; message?: string }>({
    state: 'idle'
  });

  const filtered = useMemo(() => {
    return rentals.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()));
  }, [query]);

  const toggleWishlist = (id: string) => {
    setWishlist((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  };

  const handleMatchmaker = async () => {
    setMatchmakerStatus({ state: 'loading', message: 'Matching rentals to your wishlist...' });

    try {
      const response = await fetch('/api/ai/product-match', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ preferences: { wishlist } })
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      const data = await response.json();
      const suggestedNames = data.matches?.map((match: { name: string }) => match.name).join(', ');

      setMatchmakerStatus({
        state: 'success',
        message: suggestedNames ? `Suggested matches: ${suggestedNames}` : 'No matches found. Try adding items to your wishlist.'
      });
    } catch (error) {
      setMatchmakerStatus({ state: 'error', message: 'Matchmaker is unavailable right now. Please try again.' });
    }
  };

  return (
    <div className="container-balanced py-12 space-y-6">
      <div className="space-y-3">
        <p className="section-title">Rentals</p>
        <p className="section-subtitle">Search, filter, and let the AI match the perfect props.</p>
      </div>
      <div className="card-glass p-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2 border border-charcoal/10 rounded-full px-4 py-2 bg-white">
          <Search className="h-4 w-4 text-slate-500" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="focus:outline-none text-sm bg-transparent"
            placeholder="Search rentals"
          />
        </div>
        <CTAButton onClick={handleMatchmaker} className="text-sm" disabled={matchmakerStatus.state === 'loading'}>
          {matchmakerStatus.state === 'loading' ? 'Matching...' : 'Run AI matchmaker'}
        </CTAButton>
      </div>
      {matchmakerStatus.state !== 'idle' && matchmakerStatus.message && (
        <div
          className={`text-sm ${matchmakerStatus.state === 'error' ? 'text-rose-600' : 'text-slate-700'} bg-white/70 border border-charcoal/10 rounded-xl px-4 py-3`}
        >
          {matchmakerStatus.message}
        </div>
      )}
      <div className="grid gap-4 md:grid-cols-3">
        {filtered.map((rental) => (
          <div key={rental.id} className="card-glass p-5 space-y-2">
            <div className="flex items-center justify-between">
              <p className="font-display text-lg text-charcoal">{rental.name}</p>
              <button
                onClick={() => toggleWishlist(rental.id)}
                className="p-2 rounded-full bg-white/70 hover:bg-rose-100"
              >
                <Heart className={`h-4 w-4 ${wishlist.includes(rental.id) ? 'text-rose-500 fill-rose-300' : 'text-slate-400'}`} />
              </button>
            </div>
            <p className="text-sm text-slate-600">{rental.category}</p>
            <p className="text-sm text-charcoal font-semibold">${rental.price} day rate</p>
            <ul className="text-sm text-slate-600 space-y-1">
              {rental.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-gold" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
