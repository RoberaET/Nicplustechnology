import { useState } from 'react';
import { Button } from './Button';
import { Send, CheckCircle2 } from 'lucide-react';
import { services } from '../../data/services';

interface ContactFormProps {
  isQuote?: boolean;
}

export function ContactForm({ isQuote = false }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-surface border border-border p-8 rounded-xl text-center">
        <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-text-main mb-2">Message Sent</h3>
        <p className="text-text-muted mb-6">
          Thank you for reaching out. Our engineering team will review your request and contact you shortly.
        </p>
        <Button onClick={() => setStatus('idle')} variant="outline">
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-surface border border-border p-6 md:p-8 rounded-xl shadow-xl">
      <h3 className="text-2xl font-bold text-text-main mb-6">
        {isQuote ? 'Request a Quote' : 'Send a Message'}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text-muted mb-2">Full Name</label>
          <input
            type="text"
            id="name"
            required
            className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-primary transition-colors"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-text-muted mb-2">Company Name</label>
          <input
            type="text"
            id="company"
            className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-primary transition-colors"
            placeholder="Company Ltd."
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-muted mb-2">Email Address</label>
          <input
            type="email"
            id="email"
            required
            className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-primary transition-colors"
            placeholder="john@company.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-text-muted mb-2">Phone Number</label>
          <input
            type="tel"
            id="phone"
            className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-primary transition-colors"
            placeholder="+251 900 000 000"
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="service" className="block text-sm font-medium text-text-muted mb-2">Service Required</label>
        <select
          id="service"
          required
          className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-primary transition-colors appearance-none"
        >
          <option value="" disabled selected>Select a primary service</option>
          {services.map(s => (
            <option key={s.slug} value={s.slug}>{s.title}</option>
          ))}
          <option value="other">Other / Not Sure</option>
        </select>
      </div>

      {isQuote && (
        <div className="mb-6">
          <label htmlFor="budget" className="block text-sm font-medium text-text-muted mb-2">Estimated Budget (ETB)</label>
          <select
            id="budget"
            className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-primary transition-colors appearance-none"
          >
            <option value="" disabled selected>Select a budget range</option>
            <option value="<50k">Less than 50,000 ETB</option>
            <option value="50k-200k">50,000 - 200,000 ETB</option>
            <option value="200k-500k">200,000 - 500,000 ETB</option>
            <option value=">500k">500,000+ ETB</option>
            <option value="unknown">To be determined</option>
          </select>
        </div>
      )}

      <div className="mb-8">
        <label htmlFor="message" className="block text-sm font-medium text-text-muted mb-2">Project Description</label>
        <textarea
          id="message"
          required
          rows={5}
          className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text-main focus:outline-none focus:border-primary transition-colors resize-none"
          placeholder="Briefly describe your requirements..."
        ></textarea>
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full flex items-center justify-center gap-2"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Submitting...' : (
          <>
            {isQuote ? 'Request Quote' : 'Send Message'} <Send className="h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
}
