import { motion, useReducedMotion } from 'framer-motion';
import { BriefcaseBusiness, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

function Contact({ contactDetails }) {
  const reduceMotion = useReducedMotion();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
    setErrors((previous) => ({ ...previous, [name]: '' }));
  };

  const validate = () => {
    const nextErrors = {};

    if (!formData.name.trim()) nextErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) nextErrors.email = 'Please enter your email address.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) nextErrors.email = 'Please use a valid email address.';
    if (!formData.subject.trim()) nextErrors.subject = 'Please add a subject.';
    if (!formData.message.trim()) nextErrors.message = 'Please enter a message.';

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus('Please correct the highlighted fields and try again.');
      return;
    }

    setErrors({});

    const recipient = 'jagadeeshkalyan225@gmail.com';
    const subject = encodeURIComponent(formData.subject.trim());
    const body = encodeURIComponent(
      `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`,
    );

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;

    setStatus('Your email app is opening with the message prepared for jagadeeshkalyan225@gmail.com. Please send it from there.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.12),_transparent_25%),linear-gradient(180deg,#f8fbff_0%,#eef5ff_100%)] py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: -20 }}
          whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_25px_80px_rgba(15,23,42,0.07)] sm:p-8"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">Contact</p>
          <h2 className="text-4xl font-black tracking-[-0.05em] text-slate-950 sm:text-5xl">Have a project or opportunity in mind?</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">Let&apos;s connect and explore opportunities to create, learn, and build something meaningful.</p>

          <div className="mt-8 space-y-4 text-sm text-slate-700">
            <a href={`mailto:${contactDetails.email}`} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3 transition hover:border-blue-200 hover:bg-blue-50">
              <Mail size={18} className="text-blue-600" />
              {contactDetails.email}
            </a>
            <a href={`tel:${contactDetails.phone.replace(/\s+/g, '')}`} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3 transition hover:border-blue-200 hover:bg-blue-50">
              <Phone size={18} className="text-cyan-600" />
              {contactDetails.phone}
            </a>
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3">
              <MapPin size={18} className="text-orange-500" />
              Gudlavalleru, Andhra Pradesh
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={contactDetails.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-600">LinkedIn</a>
            <a href={contactDetails.instagram} target="_blank" rel="noreferrer" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-600">Instagram</a>
            <a href={contactDetails.behance} target="_blank" rel="noreferrer" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-600">Behance</a>
          </div>
        </motion.div>

        <motion.form
          initial={reduceMotion ? false : { opacity: 0, x: 20 }}
          whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          noValidate
          className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_25px_80px_rgba(15,23,42,0.07)] sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">Name</label>
              <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-400 focus:bg-white" placeholder="Your name" aria-invalid={Boolean(errors.name)} />
              {errors.name && <p className="mt-2 text-sm text-red-500">{errors.name}</p>}
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">Email</label>
              <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-400 focus:bg-white" placeholder="your@email.com" aria-invalid={Boolean(errors.email)} />
              {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email}</p>}
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-700">Subject</label>
              <input id="subject" name="subject" type="text" value={formData.subject} onChange={handleChange} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-400 focus:bg-white" placeholder="Project inquiry" aria-invalid={Boolean(errors.subject)} />
              {errors.subject && <p className="mt-2 text-sm text-red-500">{errors.subject}</p>}
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">Message</label>
              <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-400 focus:bg-white" placeholder="Tell me a little about your project or idea." aria-invalid={Boolean(errors.message)} />
              {errors.message && <p className="mt-2 text-sm text-red-500">{errors.message}</p>}
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(37,99,235,0.28)] transition hover:-translate-y-0.5">
              <Send size={18} />
              Send Message
            </button>

            <div className="inline-flex items-center gap-2 text-sm text-slate-600">
              <BriefcaseBusiness size={16} className="text-orange-500" />
              Opens your email app
            </div>
          </div>

          {status && (
            <p aria-live="polite" className={`mt-4 rounded-2xl border px-4 py-3 text-sm ${status.includes('Please correct') ? 'border-red-200 bg-red-50 text-red-700' : 'border-cyan-200 bg-cyan-50 text-cyan-700'}`}>
              {status}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
