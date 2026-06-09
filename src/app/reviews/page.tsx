"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import StarRating from "@/components/ui/StarRating";

const reviews = [
  {
    name: "Jessica M.",
    event: "Wedding",
    rating: 5,
    date: "October 2024",
    review:
      "Our wedding cake was absolutely breathtaking. Every guest commented on how beautiful and delicious it was. Daphh brought my vision to life perfectly — the floral details were beyond what I imagined. I will recommend her to everyone.",
  },
  {
    name: "Tiana R.",
    event: "Baby Shower",
    rating: 5,
    date: "August 2024",
    review:
      "The cake for my baby shower was a showstopper. So elegant, so yummy. Daphh is incredibly talented and so easy to work with! She listened to everything I wanted and executed it flawlessly.",
  },
  {
    name: "Camille B.",
    event: "Birthday",
    rating: 5,
    date: "July 2024",
    review:
      "I ordered a custom birthday cake and could not have been happier. The attention to detail was unreal. The drip was perfect, the flavors were incredible. Will be ordering again for every occasion!",
  },
  {
    name: "Marlene V.",
    event: "Quinceañera",
    rating: 5,
    date: "June 2024",
    review:
      "Daphh made my daughter's quinceañera cake and we were blown away. It was the most gorgeous cake I've ever seen. All our guests were taking photos. Thank you so much, Daphh!",
  },
  {
    name: "Simone T.",
    event: "Corporate Event",
    rating: 5,
    date: "May 2024",
    review:
      "We ordered a branded cake for our office launch party and it was stunning. Professional, on time, and absolutely delicious. Everyone raved about it. Highly recommend for corporate events!",
  },
  {
    name: "Destiny K.",
    event: "Birthday",
    rating: 5,
    date: "April 2024",
    review:
      "My daughter wanted a unicorn cake and Daphh delivered beyond what we expected. She was so patient during the whole process and the result was magical. We'll definitely be back!",
  },
];

interface FormData {
  name: string;
  event: string;
  rating: number;
  message: string;
}

export default function ReviewsPage() {
  const [form, setForm] = useState<FormData>({ name: "", event: "", rating: 0, message: "" });
  const [errors, setErrors] = useState<Partial<FormData & { rating: string }>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.event.trim()) newErrors.event = "Event type is required.";
    if (!form.rating) newErrors.rating = "Please select a rating.";
    if (!form.message.trim()) newErrors.message = "Review message is required.";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    // Phase 2: submit to Supabase
    setSubmitted(true);
  };

  return (
    <div className="bg-cream pt-20">
      {/* Header */}
      <section className="py-20 bg-beige text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="section-label mb-4">Kind Words</p>
          <h1 className="section-heading text-5xl mb-5">What Our Clients Say</h1>
          <p className="text-taupe/70 leading-relaxed">
            Every review is a memory made sweeter. Here's what real clients have shared
            about their Caked by Daphh experience.
          </p>
        </div>
      </section>

      {/* Average rating banner */}
      <section className="py-10 bg-cream border-b border-border">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-8 text-center">
          <div>
            <p className="font-serif text-6xl text-dark-taupe">5.0</p>
            <div className="flex justify-center gap-0.5 mt-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-accent text-2xl">★</span>
              ))}
            </div>
            <p className="text-xs text-taupe/50 font-sans mt-1">Average Rating</p>
          </div>
          <div className="h-px w-16 sm:h-16 sm:w-px bg-border" />
          <div>
            <p className="font-serif text-5xl text-dark-taupe">{reviews.length}+</p>
            <p className="text-xs text-taupe/50 font-sans mt-2">Verified Reviews</p>
          </div>
          <div className="h-px w-16 sm:h-16 sm:w-px bg-border" />
          <div>
            <p className="font-serif text-5xl text-dark-taupe">100%</p>
            <p className="text-xs text-taupe/50 font-sans mt-2">Would Recommend</p>
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-beige rounded-2xl p-8 border border-border flex flex-col">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <span key={i} className="text-accent">★</span>
                  ))}
                </div>
                <p className="text-taupe/80 text-sm leading-relaxed mb-6 italic flex-1">"{r.review}"</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-accent text-sm font-serif">{r.name[0]}</span>
                    </div>
                    <div>
                      <p className="text-dark-taupe text-sm font-medium">{r.name}</p>
                      <p className="text-taupe/50 text-xs">{r.event}</p>
                    </div>
                  </div>
                  <p className="text-taupe/40 text-xs">{r.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leave a Review */}
      <section className="py-24 bg-beige">
        <div className="max-w-2xl mx-auto px-6">
          <SectionHeader
            label="Share Your Experience"
            heading="Leave a Review"
            subheading="Had a cake made by Daphh? We'd love to hear about your experience!"
            className="mb-12"
          />

          {submitted ? (
            <div className="text-center bg-cream rounded-2xl border border-border p-12">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="font-serif text-dark-taupe text-2xl mb-3">Thank You!</h3>
              <p className="text-taupe/70 leading-relaxed">
                Your review has been submitted and is awaiting approval. We appreciate you taking
                the time to share your experience with Caked by Daphh!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 bg-cream rounded-2xl border border-border p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs text-taupe/70 font-sans tracking-wide mb-2">Your Name *</label>
                  <input
                    type="text"
                    className={`input-field ${errors.name ? "border-red-300" : ""}`}
                    placeholder="Jane Doe"
                    value={form.name}
                    onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: "" }); }}
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-xs text-taupe/70 font-sans tracking-wide mb-2">Event Type *</label>
                  <input
                    type="text"
                    className={`input-field ${errors.event ? "border-red-300" : ""}`}
                    placeholder="Wedding, Birthday, etc."
                    value={form.event}
                    onChange={(e) => { setForm({ ...form, event: e.target.value }); setErrors({ ...errors, event: "" }); }}
                  />
                  {errors.event && <p className="text-red-400 text-xs mt-1">{errors.event}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs text-taupe/70 font-sans tracking-wide mb-2">Your Rating *</label>
                <StarRating
                  rating={form.rating}
                  onRate={(r) => { setForm({ ...form, rating: r }); setErrors({ ...errors, rating: "" }); }}
                  size="lg"
                />
                {errors.rating && <p className="text-red-400 text-xs mt-1">{errors.rating}</p>}
              </div>

              <div>
                <label className="block text-xs text-taupe/70 font-sans tracking-wide mb-2">Your Review *</label>
                <textarea
                  rows={5}
                  className={`input-field resize-none ${errors.message ? "border-red-300" : ""}`}
                  placeholder="Tell us about your experience with Caked by Daphh..."
                  value={form.message}
                  onChange={(e) => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: "" }); }}
                />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </div>

              {/* Photo upload — Phase 2 placeholder */}
              <div>
                <label className="block text-xs text-taupe/70 font-sans tracking-wide mb-2">Photo (Optional)</label>
                <div className="border border-dashed border-border rounded-xl p-6 text-center bg-beige">
                  <div className="text-2xl mb-2 opacity-40">📷</div>
                  <p className="text-xs text-taupe/50">Photo uploads coming soon</p>
                </div>
              </div>

              <button type="submit" className="btn-primary w-full text-center py-4">
                Submit My Review
              </button>

              <p className="text-center text-xs text-taupe/40">
                Reviews are moderated and published after approval.
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
