import { FormEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function QuoteForm() {
  const { t } = useTranslation();
  const [status, setStatus] = useState<'idle' | 'success' | 'error' | 'loading'>('idle');
  const [form, setForm] = useState({
    eventType: '',
    eventDate: '',
    location: '',
    budget: '',
    guests: '',
    rentalNeeds: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const required = ['eventType', 'eventDate', 'location', 'name', 'email'];
    const nextErrors: Record<string, string> = {};
    required.forEach((field) => {
      if (!form[field as keyof typeof form]) {
        nextErrors[field] = t('quote.required');
      }
    });
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    setTimeout(() => {
      if (form.email.includes('@')) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    }, 800);
  };

  const onChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <form className="quote-form" onSubmit={handleSubmit} noValidate>
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
        <label>
          {t('quote.eventType')}
          <select value={form.eventType} onChange={(e) => onChange('eventType', e.target.value)} required aria-invalid={!!errors.eventType}>
            <option value="">--</option>
            <option>Wedding</option>
            <option>Baby Shower</option>
            <option>Birthday</option>
            <option>Corporate</option>
            <option>Other</option>
          </select>
          {errors.eventType && <small role="alert">{errors.eventType}</small>}
        </label>
        <label>
          {t('quote.eventDate')}
          <input type="date" value={form.eventDate} onChange={(e) => onChange('eventDate', e.target.value)} required aria-invalid={!!errors.eventDate} />
          {errors.eventDate && <small role="alert">{errors.eventDate}</small>}
        </label>
        <label>
          {t('quote.location')}
          <input type="text" value={form.location} onChange={(e) => onChange('location', e.target.value)} required aria-invalid={!!errors.location} />
          {errors.location && <small role="alert">{errors.location}</small>}
        </label>
        <label>
          {t('quote.budget')}
          <input type="text" value={form.budget} onChange={(e) => onChange('budget', e.target.value)} placeholder="$1500 - $3000" />
        </label>
        <label>
          {t('quote.guests')}
          <input type="number" value={form.guests} onChange={(e) => onChange('guests', e.target.value)} min={1} />
        </label>
        <label>
          {t('quote.rentalNeeds')}
          <input type="text" value={form.rentalNeeds} onChange={(e) => onChange('rentalNeeds', e.target.value)} placeholder="Throne chairs, backdrops" />
        </label>
      </div>
      <label>
        {t('quote.name')}
        <input type="text" value={form.name} onChange={(e) => onChange('name', e.target.value)} required aria-invalid={!!errors.name} />
        {errors.name && <small role="alert">{errors.name}</small>}
      </label>
      <label>
        {t('quote.email')}
        <input type="email" value={form.email} onChange={(e) => onChange('email', e.target.value)} required aria-invalid={!!errors.email} />
        {errors.email && <small role="alert">{errors.email}</small>}
      </label>
      <label>
        {t('quote.phone')}
        <input type="tel" value={form.phone} onChange={(e) => onChange('phone', e.target.value)} />
      </label>
      <label>
        {t('quote.message')}
        <textarea value={form.message} onChange={(e) => onChange('message', e.target.value)} rows={4} />
      </label>
      <div>
        <button className="btn btn-primary" type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Sending…' : t('quote.submit')}
        </button>
      </div>
      {status === 'success' && <div className="status success" role="status">{t('quote.success')}</div>}
      {status === 'error' && <div className="status error" role="status">{t('quote.error')}</div>}
    </form>
  );
}
