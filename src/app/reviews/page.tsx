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
      "Our wedding cake was absolutely breathtaking. Every guest commented on how beautiful and delicious it was. Daphh brought my vision to life perfectly.",
  },
  {
    name: "Tiana R.",
    event: "Baby Shower",
    rating: 5,
    date: "August 2024",
    review:
      "The cake for my baby shower was a showstopper. So elegant, so yummy. Daphh is incredibly talented and so easy to work with.",
  },
  {
    name: "Camille B.",
    event: "Birthday",
    rating: 5,
    date: "July 2024",
    review:
      "I ordered a custom birthday cake and could not have been happier. The attention to detail was unreal and the flavors were incredible.",
  },
  {
    name: "Marlene V.",
    event: "Quinceañera",
    rating: 5,
    date: "June 2024",
    review:
      "Daphh made my daughter's quinceañera cake and we were blown away. It was the most gorgeous cake I've ever seen.",
  },
  {
    name: "Simone T.",
    event: "Corporate Event",
    rating: 5,
    date: "May 2024",
    review:
      "We ordered a branded cake for our office launch party and it was stunning. Professional, on time, and absolutely delicious.",
  },
  {
    name: "Destiny K.",
    event: "Birthday",
    rating: 5,
    date: "April 2024",
    review:
      "My daughter wanted a unicorn cake and Daphh delivered beyond what we expected. The result was magical.",
  },
];

interface ReviewFormData {
  name: string;
  event: string;
  rating: number;
  message: string;
}

export default function ReviewsPage() {
  const [form, setForm] = useState<ReviewFormData>({
    name: "",
    event: "",
    rating: 0,
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.event.trim()) newErrors.event = "Event type is required.";
    if (!form.rating) newErrors.rating = "Please select a rating.";
    if (!form.message.trim()) newErrors.message = "Review message is required.";

    return newErrors;
  };

  const clearError = (field: string) => {
    setErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errs = validate();

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setSubmitted(true);
  };

  return (
    <div className="bg-cream pt-20">
      <section className="bg-beige py-20 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <p className="section-label mb-4">Kind Words</p>
          <h1 className="section-heading mb-5 text-5xl">
            What Our Clients Say
          </h1>
          <p className="leading-relaxed text-taupe/70">
            Every review is a memory made sweeter. Here&apos;s what clients have
            shared about their Caked by Daphh experience.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-cream py-10">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-8 px-6 text-center sm:flex-row">
          <div>
            <p className="font-serif text-6xl text-dark-taupe">5.0</p>
            <div className="mt-1 flex justify-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-2xl text-accent">
                  ★
                </span>
              ))}
            </div>
            <p className="mt-1 font-sans text-xs text-taupe/50">
              Average Rating
            </p>
          </div>

          <div className="h-px w-16 bg-border sm:h-16 sm:w-px" />

          <div>
            <p className="font-serif text-5xl text-dark-taupe">
              {reviews.length}+
            </p>
            <p className="mt-2 font-sans text-xs text-taupe/50">
              Verified Reviews
            </p>
          </div>

          <div className="h-px w-16 bg-border sm:h-16 sm:w-px" />

          <div>
            <p className="font-serif text-5xl text-dark-taupe">100%</p>
            <p className="mt-2 font-sans text-xs text-taupe/50">
              Would Recommend
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="flex flex-col rounded-2xl border border-border bg-beige p-8"
              >
                <div className="mb-4 flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i} className="text-accent">
                      ★
                    </span>
                  ))}
                </div>

                <p className="mb-6 flex-1 text-sm italic leading-relaxed text-taupe/80">
                  &quot;{review.review}&quot;
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-accent/20">
                      <span className="font-serif text-sm text-accent">
                        {review.name[0]}
                      </span>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-dark-taupe">
                        {review.name}
                      </p>
                      <p className="text-xs text-taupe/50">{review.event}</p>
                    </div>
                  </div>

                  <p className="text-xs text-taupe/40">{review.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-beige py-24">
        <div className="mx-auto max-w-2xl px-6">
          <SectionHeader
            label="Share Your Experience"
            heading="Leave a Review"
            subheading="Had a cake made by Daphh? We'd love to hear about your experience!"
            className="mb-12"
          />

          {submitted ? (
            <div className="rounded-2xl border border-border bg-cream p-12 text-center">
              <div className="mb-4 text-5xl">🎉</div>
              <h3 className="mb-3 font-serif text-2xl text-dark-taupe">
                Thank You!
              </h3>
              <p className="leading-relaxed text-taupe/70">
                Your review has been submitted and is awaiting approval. We
                appreciate you taking the time to share your experience with
                Caked by Daphh.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-2xl border border-border bg-cream p-8"
            >
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block font-sans text-xs tracking-wide text-taupe/70">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    className={`input-field ${
                      errors.name ? "border-red-300" : ""
                    }`}
                    placeholder="Jane Doe"
                    value={form.name}
                    onChange={(e) => {
                      setForm({ ...form, name: e.target.value });
                      clearError("name");
                    }}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block font-sans text-xs tracking-wide text-taupe/70">
                    Event Type *
                  </label>
                  <input
                    type="text"
                    className={`input-field ${
                      errors.event ? "border-red-300" : ""
                    }`}
                    placeholder="Wedding, Birthday, etc."
                    value={form.event}
                    onChange={(e) => {
                      setForm({ ...form, event: e.target.value });
                      clearError("event");
                    }}
                  />
                  {errors.event && (
                    <p className="mt-1 text-xs text-red-400">{errors.event}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="mb-2 block font-sans text-xs tracking-wide text-taupe/70">
                  Your Rating *
                </label>
                <StarRating
                  rating={form.rating}
                  onRate={(rating) => {
                    setForm({ ...form, rating });
                    clearError("rating");
                  }}
                  size="lg"
                />
                {errors.rating && (
                  <p className="mt-1 text-xs text-red-400">{errors.rating}</p>
                )}
              </div>

              <div>
                <label className="mb-2 block font-sans text-xs tracking-wide text-taupe/70">
                  Your Review *
                </label>
                <textarea
                  rows={5}
                  className={`input-field resize-none ${
                    errors.message ? "border-red-300" : ""
                  }`}
                  placeholder="Tell us about your experience with Caked by Daphh..."
                  value={form.message}
                  onChange={(e) => {
                    setForm({ ...form, message: e.target.value });
                    clearError("message");
                  }}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-400">{errors.message}</p>
                )}
              </div>

              <div>
                <label className="mb-2 block font-sans text-xs tracking-wide text-taupe/70">
                  Photo Optional
                </label>
                <div className="rounded-xl border border-dashed border-border bg-beige p-6 text-center">
                  <div className="mb-2 text-2xl opacity-40">📷</div>
                  <p className="text-xs text-taupe/50">
                    Photo uploads coming soon
                  </p>
                </div>
              </div>

              <button type="submit" className="btn-primary w-full py-4 text-center">
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
