'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CTAButton } from '../../../components/ui/CTAButton';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  eventType: z.string().min(2),
  date: z.string().min(2),
  budget: z.string().min(1),
  notes: z.string().optional()
});

type FormValues = z.infer<typeof schema>;

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = (values: FormValues) => {
    console.log('quote request', values);
    setStep(3);
  };

  return (
    <div className="container-balanced py-12 space-y-6">
      <div className="space-y-2">
        <p className="section-title">Request a quote</p>
        <p className="section-subtitle">Multi-step flow with validation and AI quote optimizer outputs.</p>
      </div>
      <div className="card-glass p-6">
        {step === 1 && (
          <div className="space-y-4">
            <p className="font-display text-lg text-charcoal">Step 1: Event basics</p>
            <input {...register('name')} placeholder="Your name" className="w-full rounded-lg border p-3" />
            {errors.name && <p className="text-rose-600 text-sm">Name is required</p>}
            <input {...register('email')} placeholder="Email" className="w-full rounded-lg border p-3" />
            <input {...register('eventType')} placeholder="Event type (mitzvah, quinceañera, corporate)" className="w-full rounded-lg border p-3" />
            <input {...register('date')} placeholder="Date" className="w-full rounded-lg border p-3" />
            <button onClick={() => setStep(2)} className="px-4 py-2 rounded-full bg-charcoal text-white">Next</button>
          </div>
        )}
        {step === 2 && (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <p className="font-display text-lg text-charcoal">Step 2: Budget + notes</p>
            <input {...register('budget')} placeholder="Budget range" className="w-full rounded-lg border p-3" />
            <textarea {...register('notes')} placeholder="Mood, colours, must-haves" className="w-full rounded-lg border p-3" />
            <CTAButton type="submit" className="">
              Submit quote
            </CTAButton>
          </form>
        )}
        {step === 3 && (
          <div className="space-y-3">
            <p className="font-display text-lg text-charcoal">Quote optimizer ready</p>
            <p className="text-slate-700">
              You will receive Essentials, Signature, and Luxe packages via email with hours and line items.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
