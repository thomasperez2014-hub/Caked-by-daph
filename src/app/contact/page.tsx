"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";

const cakeTypes = [
  "Birthday Cake",
  "Wedding Cake",
  "Baby Shower Cake",
  "Quinceañera / Milestone",
  "Cupcakes",
  "Dessert Table",
  "Corporate / Event",
  "Other",
];

const flavors = [
  "Classic Vanilla",
  "Rich Chocolate",
  "Strawberry",
  "Lemon Blueberry",
  "Red Velvet",
  "Funfetti",
  "Carrot Cake",
  "Cookies & Cream",
  "Brown Butter",
  "Champagne",
  "Coconut Lime",
  "Chocolate Raspberry",
  "Not sure yet",
];

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  eventDate: string;
  cakeType: string;
  servings: string;
  flavor: string;
  details: string;
}

const empty: FormData = {
  fullName: "",
  email: "",
  phone: "",
  eventDate: "",
  cakeType: "",
  servings: "",
  flavor: "",
  details: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<FormData>(empty);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validate = (): Partial<FormData> => {
    const e: Partial<FormData> = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required.";
    if (!form.email.trim()) {
      e.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      e.email = "Please enter a valid email.";
    }
    if (!form.phone.trim()) e.phone = "Phone number is required.";
    if (!form.eventDate) e.eventDate = "Event date is required.";
    if (!form.cakeType) e.cakeType = "Please select a cake type.";
    if (!form.servings.trim()) e.servings = "Please estimate servings needed.";
    if (!form.details.trim()) e.details = "Please share some details about your vision.";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    // Phase 2: POST to Supabase
    setSubmitted(true);
  };

  return (
    <div className="bg-cream pt-20">
      {/* Header */}
      <section className="py-20 bg-beige text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="section-label mb-4">Order Inquiry</p>
          <h1 className="section-heading text-5xl mb-5">
            Let's Create Your Dream Cake
          </h1>
          <p className="text-taupe/70 leading-relaxed">
            Fill out the form below and Daphh will review your inquiry. You'll receive a
            personalized quote within 48 hours.
          </p>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Sidebar info */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-8">
                <div>
                  <h3 className="font-serif text-dark-taupe text-2xl mb-4">Good to Know</h3>
                  <ul className="space-y-4">
                    {[
                      { icon: "📅", label: "Lead Time", val: "2–4 weeks minimum" },
                      { icon: "💳", label: "Deposit", val: "50% to confirm order" },
                      { icon: "⏱", label: "Response Time", val: "Within 48 hours" },
                      { icon: "📍", label: "Pickup", val: "Local pickup only" },
                    ].map((item) => (
                      <li key={item.label} className="flex items-start gap-4">
                        <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                        <div>
                          <p className="text-xs text-taupe/50 font-sans uppercase tracking-wide">{item.label}</p>
                          <p className="text-dark-taupe text-sm font-medium">{item.val}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-beige border border-border rounded-2xl p-6">
                  <p className="text-xs text-taupe/60 leading-relaxed">
                    💡 <strong className="text-taupe/80">Pro tip:</strong> The more details you share — 
                    colors, theme, inspiration photos — the better Daphh can tailor your quote.
                  </p>
                </div>

                <div>
                  <p className="text-xs text-taupe/50 font-sans mb-2">Have questions first?</p>
                  <a href="/faq" className="text-accent text-sm underline underline-offset-2">
                    Browse the FAQ →
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="text-center bg-beige rounded-2xl border border-border p-16">
                  <div className="text-6xl mb-6">🎂</div>
                  <h3 className="font-serif text-dark-taupe text-3xl mb-4">
                    Inquiry Received!
                  </h3>
                  <p className="text-taupe/70 leading-relaxed max-w-sm mx-auto">
                    Thank you, <strong>{form.fullName}</strong>! Daphh will review your request and
                    get back to you at <strong>{form.email}</strong> within 48 hours.
                  </p>
                  <div className="mt-8 pt-8 border-t border-border">
                    <p className="text-sm text-taupe/50 mb-4">While you wait, explore some inspiration:</p>
                    <a href="/gallery" className="btn-outline text-sm">
                      Browse the Gallery
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {/* Personal Info */}
                  <div>
                    <h3 className="font-serif text-dark-taupe text-xl mb-5 pb-3 border-b border-border">
                      Your Information
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs text-taupe/70 font-sans tracking-wide mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          className={`input-field ${errors.fullName ? "border-red-300 focus:border-red-400" : ""}`}
                          placeholder="Your full name"
                          value={form.fullName}
                          onChange={(e) => update("fullName", e.target.value)}
                        />
                        {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
                      </div>

                      <div>
                        <label className="block text-xs text-taupe/70 font-sans tracking-wide mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          className={`input-field ${errors.email ? "border-red-300" : ""}`}
                          placeholder="you@email.com"
                          value={form.email}
                          onChange={(e) => update("email", e.target.value)}
                        />
                        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                      </div>

                      <div>
                        <label className="block text-xs text-taupe/70 font-sans tracking-wide mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          className={`input-field ${errors.phone ? "border-red-300" : ""}`}
                          placeholder="(555) 555-5555"
                          value={form.phone}
                          onChange={(e) => update("phone", e.target.value)}
                        />
                        {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                      </div>

                      <div>
                        <label className="block text-xs text-taupe/70 font-sans tracking-wide mb-2">
                          Event Date *
                        </label>
                        <input
                          type="date"
                          className={`input-field ${errors.eventDate ? "border-red-300" : ""}`}
                          value={form.eventDate}
                          onChange={(e) => update("eventDate", e.target.value)}
                          min={new Date().toISOString().split("T")[0]}
                        />
                        {errors.eventDate && <p className="text-red-400 text-xs mt-1">{errors.eventDate}</p>}
                      </div>
                    </div>
                  </div>

                  {/* Order Details */}
                  <div>
                    <h3 className="font-serif text-dark-taupe text-xl mb-5 pb-3 border-b border-border">
                      Order Details
                    </h3>
                    <div className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs text-taupe/70 font-sans tracking-wide mb-2">
                            Cake Type *
                          </label>
                          <select
                            className={`input-field ${errors.cakeType ? "border-red-300" : ""}`}
                            value={form.cakeType}
                            onChange={(e) => update("cakeType", e.target.value)}
                          >
                            <option value="">Select cake type...</option>
                            {cakeTypes.map((t) => (
                              <option key={t} value={t}>{t}</option>
                            ))}
                          </select>
                          {errors.cakeType && <p className="text-red-400 text-xs mt-1">{errors.cakeType}</p>}
                        </div>

                        <div>
                          <label className="block text-xs text-taupe/70 font-sans tracking-wide mb-2">
                            Servings Needed *
                          </label>
                          <input
                            type="text"
                            className={`input-field ${errors.servings ? "border-red-300" : ""}`}
                            placeholder="e.g. 25, 50, 100+"
                            value={form.servings}
                            onChange={(e) => update("servings", e.target.value)}
                          />
                          {errors.servings && <p className="text-red-400 text-xs mt-1">{errors.servings}</p>}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs text-taupe/70 font-sans tracking-wide mb-2">
                          Flavor Preference
                        </label>
                        <select
                          className="input-field"
                          value={form.flavor}
                          onChange={(e) => update("flavor", e.target.value)}
                        >
                          <option value="">Select a flavor...</option>
                          {flavors.map((f) => (
                            <option key={f} value={f}>{f}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs text-taupe/70 font-sans tracking-wide mb-2">
                          Inspiration & Details *
                        </label>
                        <textarea
                          rows={6}
                          className={`input-field resize-none ${errors.details ? "border-red-300" : ""}`}
                          placeholder="Tell Daphh about your vision! Include colors, theme, any special details, design inspiration, or share a link to inspiration photos. The more you share, the better the quote will be."
                          value={form.details}
                          onChange={(e) => update("details", e.target.value)}
                        />
                        {errors.details && <p className="text-red-400 text-xs mt-1">{errors.details}</p>}
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full text-center py-4 text-base"
                  >
                    Submit My Inquiry
                  </button>

                  <p className="text-center text-xs text-taupe/40">
                    Submitting an inquiry does not guarantee a booking. Daphh will follow up with availability and a custom quote.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
