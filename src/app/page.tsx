import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";

const categories = [
  {
    title: "Birthday Cakes",
    desc: "Make every birthday unforgettable with a one-of-a-kind custom creation.",
    icon: "🎂",
  },
  {
    title: "Wedding Cakes",
    desc: "Elegant, timeless designs to sweeten your most important day.",
    icon: "🤍",
  },
  {
    title: "Baby Shower Cakes",
    desc: "Whimsical and sweet designs to celebrate the newest little one.",
    icon: "🌸",
  },
  {
    title: "Cupcakes & Desserts",
    desc: "Mini indulgences and dessert spreads for any occasion.",
    icon: "🧁",
  },
];

const steps = [
  {
    number: "01",
    title: "Submit Your Inquiry",
    desc: "Fill out our order form with your event details, cake vision, and inspiration photos.",
  },
  {
    number: "02",
    title: "Review Your Quote",
    desc: "Daphh will review your request and send a personalized quote within 48 hours.",
  },
  {
    number: "03",
    title: "Pay Your Deposit",
    desc: "Secure your date with a deposit. Your cake is custom — we start planning right away.",
  },
  {
    number: "04",
    title: "Pick Up & Celebrate",
    desc: "Pick up your cake fresh and ready to make memories that last a lifetime.",
  },
];

const testimonials = [
  {
    name: "Jessica M.",
    event: "Wedding",
    rating: 5,
    quote:
      "Our wedding cake was absolutely breathtaking. Every guest commented on how beautiful and delicious it was. Daphh brought my vision to life perfectly.",
  },
  {
    name: "Tiana R.",
    event: "Baby Shower",
    rating: 5,
    quote:
      "The cake for my baby shower was a showstopper. So elegant, so yummy. Daphh is incredibly talented and so easy to work with!",
  },
  {
    name: "Camille B.",
    event: "Birthday",
    rating: 5,
    quote:
      "I ordered a custom birthday cake and could not have been happier. The attention to detail was unreal. Will be ordering again for every occasion!",
  },
];

// Decorative cake SVG placeholder cards
function GalleryCard({ index }: { index: number }) {
  const labels = [
    "Floral Wedding Cake",
    "Birthday Drip Cake",
    "Baby Shower Cake",
    "Elegant Tiered Cake",
    "Cupcake Tower",
    "Macaron Cake",
  ];
  const gradients = [
    "from-beige to-border",
    "from-border to-beige",
    "from-beige to-cream",
    "from-cream to-beige",
    "from-border to-cream",
    "from-beige to-border",
  ];
  return (
    <div className={`aspect-square rounded-2xl bg-gradient-to-br ${gradients[index % gradients.length]} border border-border flex flex-col items-center justify-center gap-3 group hover:shadow-md transition-shadow`}>
      <div className="text-4xl opacity-50 group-hover:opacity-70 transition-opacity">🎂</div>
      <p className="text-xs text-taupe/50 font-sans tracking-wide text-center px-4">
        {labels[index % labels.length]}
      </p>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="bg-cream">
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Soft background shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-beige/60 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 text-center py-24">
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-accent/40" />
            <p className="section-label">Handcrafted with love</p>
            <div className="h-px w-12 bg-accent/40" />
          </div>

          <h1 className="font-serif text-dark-taupe text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
            Custom Cakes Made for{" "}
            <span className="text-accent italic">Sweet Moments</span>
          </h1>

          <p className="text-taupe/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Beautiful custom cakes, cupcakes, and desserts handcrafted by Daphh for birthdays,
            weddings, baby showers, and life's sweetest celebrations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-base px-9 py-4">
              Request a Cake
            </Link>
            <Link href="/gallery" className="btn-outline text-base px-9 py-4">
              View Gallery
            </Link>
          </div>

          {/* Floating stat badges */}
          <div className="flex flex-wrap justify-center gap-8 mt-16 text-center">
            {[
              { value: "200+", label: "Cakes Delivered" },
              { value: "100%", label: "Custom Designs" },
              { value: "5 ★", label: "Avg. Rating" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl text-dark-taupe">{stat.value}</p>
                <p className="text-xs text-taupe/60 font-sans tracking-wide uppercase mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Categories ── */}
      <section className="py-24 bg-beige">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="What We Create"
            heading="Every Celebration Deserves a Cake"
            subheading="From intimate gatherings to grand affairs, Daphh crafts custom cakes that are as beautiful as they are delicious."
            className="mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="bg-cream rounded-2xl p-8 border border-border hover:shadow-md transition-shadow group text-center"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">
                  {cat.icon}
                </div>
                <h3 className="font-serif text-dark-taupe text-xl mb-3">{cat.title}</h3>
                <p className="text-sm text-taupe/70 leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Preview ── */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image side */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl bg-beige border border-border flex items-center justify-center">
                <div className="text-center">
                  <div className="text-7xl opacity-30 mb-4">👩‍🍳</div>
                  <p className="text-xs text-taupe/40 font-sans tracking-wide">Photo of Daphh</p>
                </div>
              </div>
              {/* Floating accent card */}
              <div className="absolute -bottom-6 -right-6 bg-dark-taupe text-cream rounded-2xl p-6 shadow-xl">
                <p className="font-serif text-3xl text-accent">5+</p>
                <p className="text-xs text-cream/70 font-sans tracking-wide uppercase mt-1">Years of Baking</p>
              </div>
            </div>

            {/* Text side */}
            <div>
              <p className="section-label mb-4">Meet the Baker</p>
              <h2 className="section-heading mb-6">
                Baked with Passion,<br />Crafted with Care
              </h2>
              <p className="text-taupe/70 leading-relaxed mb-5">
                Hi! I'm Daphh — a self-taught baker turned custom cake artist with a passion for
                transforming your sweetest ideas into edible works of art. Every cake I create is
                made to order, from scratch, with premium ingredients.
              </p>
              <p className="text-taupe/70 leading-relaxed mb-8">
                Whether it's an intimate birthday celebration or a grand wedding reception, I pour
                love and artistry into every tier, every petal, every detail — because your moments
                deserve nothing less.
              </p>
              <Link href="/about" className="btn-primary">
                Learn More About Daphh
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery Preview ── */}
      <section className="py-24 bg-beige">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="The Gallery"
            heading="A Little Taste of the Magic"
            subheading="Each cake is one-of-a-kind. Browse a few highlights from recent creations."
            className="mb-12"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <GalleryCard key={i} index={i} />
            ))}
          </div>
          <div className="text-center">
            <Link href="/gallery" className="btn-outline">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* ── How to Order ── */}
      <section className="py-24 bg-dark-taupe">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="The Process"
            heading="How to Order Your Custom Cake"
            subheading="Getting your dream cake is simple. Here's how it works."
            className="mb-16 [&_.section-heading]:text-cream [&_.section-label]:text-accent [&_p:last-child]:text-cream/50"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={step.number} className="relative">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-accent/20 z-0" />
                )}
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center mb-5">
                    <span className="font-serif text-accent text-xl">{step.number}</span>
                  </div>
                  <h3 className="font-serif text-cream text-lg mb-3">{step.title}</h3>
                  <p className="text-sm text-cream/50 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link href="/contact" className="btn-primary bg-accent hover:bg-accent/80">
              Start Your Order
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="Kind Words"
            heading="What Our Customers Say"
            subheading="Real reviews from real celebrations. Every kind word means the world."
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-beige rounded-2xl p-8 border border-border">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-accent text-lg">★</span>
                  ))}
                </div>
                <p className="text-taupe/80 text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent text-sm font-serif">{t.name[0]}</span>
                  </div>
                  <div>
                    <p className="text-dark-taupe text-sm font-medium">{t.name}</p>
                    <p className="text-taupe/50 text-xs">{t.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/reviews" className="btn-outline">
              Read All Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-24 bg-beige">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-accent/40" />
            <span className="text-2xl">🎂</span>
            <div className="h-px w-12 bg-accent/40" />
          </div>
          <h2 className="section-heading mb-5">
            Ready to Create Something Sweet?
          </h2>
          <p className="text-taupe/70 text-lg leading-relaxed mb-10">
            Let's make your vision a reality. Submit your inquiry today and let Daphh
            craft the cake of your dreams.
          </p>
          <Link href="/contact" className="btn-primary text-base px-10 py-4">
            Request Your Cake
          </Link>
        </div>
      </section>
    </div>
  );
}
