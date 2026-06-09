import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";

const values = [
  {
    icon: "🌿",
    title: "Premium Ingredients",
    desc: "Only the finest, freshest ingredients go into every cake — because taste matters as much as beauty.",
  },
  {
    icon: "✨",
    title: "Artisan Craftsmanship",
    desc: "Every layer, every decoration is made by hand with patience, care, and an artist's eye.",
  },
  {
    icon: "💌",
    title: "Personal Touch",
    desc: "Your cake is yours alone. Daphh works closely with every client to bring their unique vision to life.",
  },
  {
    icon: "🤝",
    title: "Reliability",
    desc: "Timely, professional, and committed. Your special day deserves someone you can count on.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-cream pt-20">
      {/* Hero */}
      <section className="py-24 bg-beige">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-4">The Story</p>
              <h1 className="font-serif text-dark-taupe text-5xl md:text-6xl leading-tight mb-6">
                Hi, I'm <span className="text-accent italic">Daphh</span>
              </h1>
              <p className="text-taupe/70 leading-relaxed mb-5 text-lg">
                What started as a love for baking in my home kitchen has blossomed into a full
                custom cake business — and I couldn't be more grateful.
              </p>
              <p className="text-taupe/70 leading-relaxed mb-5">
                I'm a self-taught cake artist with a passion for creating desserts that don't just
                taste incredible — they tell a story. Every client I work with has a vision, and my
                job is to bring it to life on a cake stand.
              </p>
              <p className="text-taupe/70 leading-relaxed mb-10">
                From elegant wedding tiers to playful birthday stacks, I approach every project
                with the same devotion: fresh ingredients, handcrafted details, and a whole lot of love.
              </p>
              <Link href="/contact" className="btn-primary">
                Work with Daphh
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl bg-cream border border-border flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl opacity-25 mb-4">👩‍🍳</div>
                  <p className="text-xs text-taupe/30 font-sans tracking-wide">Photo of Daphh</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent text-white rounded-2xl p-6 shadow-xl">
                <p className="font-serif text-3xl">5+</p>
                <p className="text-xs text-white/80 font-sans tracking-wide uppercase mt-1">Years Baking</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="Our Values"
            heading="What Makes Caked by Daphh Different"
            className="mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-beige rounded-2xl p-8 border border-border text-center">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-serif text-dark-taupe text-lg mb-3">{v.title}</h3>
                <p className="text-sm text-taupe/70 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dark-taupe text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-cream text-4xl mb-5">Let's Create Something Beautiful</h2>
          <p className="text-cream/60 mb-8 leading-relaxed">
            Ready to start planning your custom cake? I'd love to hear about your vision.
          </p>
          <Link href="/contact" className="btn-primary">
            Request a Cake
          </Link>
        </div>
      </section>
    </div>
  );
}
