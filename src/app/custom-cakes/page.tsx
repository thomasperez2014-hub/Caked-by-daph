import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";

const occasions = [
  {
    title: "Wedding Cakes",
    emoji: "💍",
    desc: "Timeless elegance for your most cherished day. From classic ivory tiers to modern floral masterpieces, Daphh creates the wedding cake of your dreams.",
    features: ["Custom designs", "Tasting consultations available", "Tiered & sculpted options", "Fondant & buttercream finishes"],
  },
  {
    title: "Birthday Cakes",
    emoji: "🎂",
    desc: "Because every birthday deserves something spectacular. Bold, fun, or beautifully classic — let's celebrate in style.",
    features: ["All ages welcome", "Character & theme cakes", "Smash cakes for babies", "Number & letter cakes"],
  },
  {
    title: "Baby Shower Cakes",
    emoji: "🌸",
    desc: "Welcome the newest addition with a cake as sweet as the occasion. Gender reveals, whimsical animals, and soft pastel dreams.",
    features: ["Gender reveal cakes", "Floral & botanical designs", "Animal character cakes", "Matching cupcake sets"],
  },
  {
    title: "Quinceañera & Milestone",
    emoji: "👑",
    desc: "Milestone birthdays deserve milestone cakes. Elegant, statement-making designs for the moments that mark a lifetime.",
    features: ["Quince & Sweet 16", "Anniversary cakes", "Retirement & promotion", "Custom monograms"],
  },
  {
    title: "Corporate & Events",
    emoji: "🥂",
    desc: "Branded cakes, dessert tables, and custom treats for corporate events, brand launches, and large celebrations.",
    features: ["Logo cakes", "Branded dessert tables", "Bulk orders welcome", "Delivery available"],
  },
  {
    title: "Just Because",
    emoji: "💛",
    desc: "You don't need a reason to order something beautiful. Surprise someone you love with a custom cake just because.",
    features: ["Romantic gestures", "Appreciation gifts", "Holiday cakes", "Mini celebration cakes"],
  },
];

export default function CustomCakesPage() {
  return (
    <div className="bg-cream pt-20">
      {/* Hero */}
      <section className="py-24 bg-beige text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="section-label mb-4">Custom Orders</p>
          <h1 className="font-serif text-dark-taupe text-5xl md:text-6xl leading-tight mb-6">
            Your Vision,<br />
            <span className="text-accent italic">Our Canvas</span>
          </h1>
          <p className="text-taupe/70 leading-relaxed text-lg mb-10">
            Every cake Daphh creates is one-of-a-kind. No templates, no shortcuts — just your ideas
            brought to life with artisan craftsmanship and premium ingredients.
          </p>
          <Link href="/contact" className="btn-primary text-base px-9 py-4">
            Start Your Custom Order
          </Link>
        </div>
      </section>

      {/* Occasions grid */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="Occasions We Love"
            heading="A Cake for Every Moment"
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {occasions.map((occ) => (
              <div key={occ.title} className="bg-beige rounded-2xl border border-border p-8 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{occ.emoji}</div>
                <h3 className="font-serif text-dark-taupe text-xl mb-3">{occ.title}</h3>
                <p className="text-sm text-taupe/70 leading-relaxed mb-5">{occ.desc}</p>
                <ul className="space-y-2">
                  {occ.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-taupe/60">
                      <span className="text-accent">✦</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process reminder */}
      <section className="py-20 bg-beige">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionHeader
            label="Good to Know"
            heading="Custom Order Guidelines"
            className="mb-10"
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            {[
              { label: "Lead Time", value: "2–4 weeks minimum", icon: "📅" },
              { label: "Deposit", value: "50% to confirm order", icon: "💳" },
              { label: "Pickup", value: "Local pickup only", icon: "📍" },
            ].map((item) => (
              <div key={item.label} className="bg-cream rounded-2xl border border-border p-6">
                <div className="text-2xl mb-3">{item.icon}</div>
                <p className="text-xs text-taupe/50 font-sans tracking-wide uppercase mb-1">{item.label}</p>
                <p className="font-serif text-dark-taupe text-lg">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dark-taupe text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-cream text-4xl mb-5">Ready to Begin?</h2>
          <p className="text-cream/60 mb-8 leading-relaxed">
            Tell Daphh about your event and your cake vision. She'll reach back with a custom
            quote and everything you need to know.
          </p>
          <Link href="/contact" className="btn-primary">
            Submit Your Inquiry
          </Link>
        </div>
      </section>
    </div>
  );
}
