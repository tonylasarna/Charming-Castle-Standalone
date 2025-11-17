'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import { CTAButton } from './ui/CTAButton';

export function AIChat() {
  const [message, setMessage] = useState('Plan a blush and gold quinceañera at Casa Loma with 80 guests.');
  const [reply, setReply] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    setLoading(true);
    const res = await fetch('/api/ai/assistant', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    });
    const data = await res.json();
    setReply(data.reply);
    setLoading(false);
  };

  return (
    <div className="card-glass p-6 space-y-3">
      <div className="flex items-center justify-between">
        <p className="font-display text-lg text-charcoal">AI Décor Assistant</p>
        <span className="text-xs rounded-full bg-rose-100 text-rose-600 px-3 py-1">Live</span>
      </div>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full rounded-2xl border border-charcoal/10 p-3 text-sm"
      />
      <CTAButton onClick={sendMessage} className="w-full" type="button">
        <Send className="h-4 w-4" /> Ask the studio
      </CTAButton>
      <div className="rounded-2xl bg-white/80 border border-white/70 p-3 min-h-[120px] text-sm text-slate-700">
        {loading ? 'Thinking through palettes and rentals…' : reply || 'Your tailored recommendations will appear here.'}
      </div>
    </div>
  );
}
