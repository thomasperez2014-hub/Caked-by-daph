"use client";

import { useState } from "react";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";

const faqs = [
  {
    q: "How far in advance should I place my order?",
    a: "We recommend placing your order at least 2–4 weeks in advance. For wedding cakes and large orders, 4–8 weeks is ideal. Peak seasons (spring and fall) book quickly — reach out early to secure your date!",
  },
  {
    q: "How do I place a custom cake order?",
    a: "Start by filling out our Order Inquiry form with your event details, cake size, flavors, and any inspiration photos. Daphh will review your request and respond within 48 hours with a custom quote.",
  },
  {
    q: "What is your deposit policy?",
    a: "A 50% non-refundable deposit is required to confirm your order and reserve your event date. The remaining balance is due at pickup.",
  },
  {
    q: "Do you offer tastings?",
    a: "Yes! Tasting consultations are available for wedding cakes and large orders. Please inquire when submitting your request and we'll include details in your quote.",
  },
  {
    q: "Do you deliver?",
    a: "Currently, we offer local pickup only. If you have specific delivery needs, please mention it in your inquiry and we'll do our best to accommodate.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept Venmo, Zelle, Cash App, and cash. Payment details will be included in your order confirmation.",
  },
  {
    q: "Can I request a custom design that's not in your gallery?",
    a: "Absolutely! The gallery is just a sample of what's possible. Daphh loves creative challenges. Share your inspiration photos and ideas in the inquiry form — there are very few designs we can't create.",
  },
  {
    q: "What flavors do you offer?",
    a: "We offer a wide range: Classic Vanilla, Rich Chocolate, Strawberry, Lemon Blueberry, Red Velvet, Funfetti, Carrot Cake, Cookies & Cream, Brown Butter, Champagne, Coconut Lime, and Chocolate Raspberry. Custom flavor combinations are always welcome.",
  },
  {
    q: "Do you accommodate allergies or dietary restrictions?",
    a: "Please disclose all allergies in your inquiry. We will do our best to accommodate requests, but please note that all products are made in a home kitchen where nuts, dairy, eggs, and gluten are present.",
  },
  {
    q: "What happens if I need to cancel my order?",
    a: "Because all cakes are made to order, deposits are non-refundable. If you need to reschedule, please contact us as soon as possible. We'll do our best to accommodate date changes based on availability.",
  },
  {
    q: "How should I store my cake?",
    a: "All custom cakes should be stored in the refrigerator. Remove the cake from the fridge 30–60 minutes before serving for the best taste and texture. Keep out of direct sunlight and heat.",
  },
  {
    q: "How long does a custom cake stay fresh?",
    a: "Custom cakes are best enjoyed within 3 days of pickup. If properly refrigerated, they can last up to 5 days. We recommend serving as close to pickup day as possible.",
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-6 flex items-center justify-between gap-4 group"
        aria-expanded={open}
      >
        <span className="font-serif text-dark-taupe text-lg group-hover:text-accent transition-colors">
          {question}
        </span>
        <span
          className={`text-accent text-xl transition-transform duration-200 flex-shrink-0 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-taupe/70 leading-relaxed text-sm pr-8">{answer}</p>
      </div>
    </div>
  );
}

export default function FaqPage() {
  return (
    <div className="bg-cream pt-20">
      {/* Header */}
      <section className="py-20 bg-beige text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="section-label mb-4">FAQ</p>
          <h1 className="section-heading text-5xl mb-5">Frequently Asked Questions</h1>
          <p className="text-taupe/70 leading-relaxed">
            Everything you need to know about ordering a custom cake from Daphh.
            Don't see your question? Reach out — we're happy to help.
          </p>
        </div>
      </section>

      {/* FAQ list */}
      <section className="py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-6">
          <div className="divide-y divide-border border-t border-border">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-20 bg-beige text-center">
        <div className="max-w-2xl mx-auto px-6">
          <SectionHeader
            heading="Still Have Questions?"
            subheading="We're happy to help. Send us a message and Daphh will get back to you within 48 hours."
            className="mb-8"
          />
          <Link href="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
