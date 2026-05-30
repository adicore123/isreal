import { useState } from 'react';
import { Icons } from './Icons.jsx';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setIsSubmitting(false);
    setIsSent(true);
  };

  if (isSent) {
    return (
      <div className="py-4" aria-live="polite">
        <div className="w-12 h-12 bg-[#F7444E] rounded-full flex items-center justify-center mx-auto mb-3 text-white shadow-md">
          <Icons.Check className="w-6 h-6" aria-hidden="true" />
        </div>
        <h3 className="text-lg font-bold text-[#002C3E] mb-1">פנייתך התקבלה!</h3>
        <p className="text-[#002C3E]/80 text-sm">אנו ניצור קשר בהקדם האפשרי.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
      <input
        required
        type="text"
        placeholder="שם מלא"
        aria-label="שם מלא"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="flex-1 bg-white px-4 py-3.5 md:py-4 rounded-xl border border-[#002C3E]/10 outline-none focus:border-[#78BCC4] font-medium text-[#002C3E] transition-all text-sm md:text-base"
      />
      <input
        required
        type="tel"
        placeholder="מספר טלפון"
        aria-label="מספר טלפון"
        dir="ltr"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        className="flex-1 bg-white px-4 py-3.5 md:py-4 rounded-xl border border-[#002C3E]/10 outline-none focus:border-[#78BCC4] font-medium text-[#002C3E] text-right transition-all text-sm md:text-base"
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-[#F7444E] hover:bg-[#de3d46] text-white px-6 py-3.5 md:py-4 rounded-xl font-bold text-sm md:text-base disabled:opacity-50 flex items-center justify-center shrink-0 transition-colors shadow-md coral-glow min-w-[100px]"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin -mr-1 ml-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span className="sr-only">טוען,</span>שולח...
          </>
        ) : (
          'שליחה'
        )}
      </button>
    </form>
  );
};

export default ContactForm;
