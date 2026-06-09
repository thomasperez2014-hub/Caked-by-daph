import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";

const categories = ["All", "Wedding", "Birthday", "Baby Shower", "Cupcakes", "Specialty"];

const galleryItems = [
  { label: "Floral Wedding Cake", category: "Wedding", emoji: "🌸" },
  { label: "3-Tier Birthday Drip Cake", category: "Birthday", emoji: "🎂" },
  { label: "Baby Elephant Shower Cake", category: "Baby Shower", emoji: "🐘" },
  { label: "Gold Leaf Anniversary Cake", category: "Wedding", emoji: "✨" },
  { label: "Rainbow Sprinkle Birthday Cake", category: "Birthday", emoji: "🌈" },
  { label: "Pastel Cupcake Tower", category: "Cupcakes", emoji: "🧁" },
  { label: "Gender Reveal Cake", category: "Baby Shower", emoji: "🩷" },
  { label: "Rustic Buttercream Wedding Cake", category: "Wedding", emoji: "🤍" },
  { label: "Unicorn Birthday Cake", category: "Birthday", emoji: "🦄" },
  { label: "Macaron Tower", category: "Specialty", emoji: "🍪" },
  { label: "Succulent Garden Cake", category: "Specialty", emoji: "🌵" },
  { label: "Ombre Birthday Cake", category: "Birthday", emoji: "🎨" },
];

const gradients = [
  "from-[#F2ECE4] to-[#E6DDD3]",
  "from-[#E6DDD3] to-[#F2ECE4]",
  "from-[#F8F4EE] to-[#F2ECE4]",
  "from-[#F2ECE4] to-[#F8F4EE]",
];

export default function GalleryPage() {
  return (
    <div className="bg-cream pt-20">
      {/* Header */}
      <section className="py-20 bg-beige text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="section-label mb-4">The Gallery</p>
          <h1 className="section-heading text-5xl mb-5">
            Cakes That Tell a Story
          </h1>
          <p className="text-taupe/70 leading-relaxed">
            Every cake in this gallery was custom-made for a real celebration. Browse for
            inspiration, and imagine what we could create for yours.
          </p>
        </div>
      </section>

      {/* Filter tabs — static in Phase 1 */}
      <section className="sticky top-[73px] z-30 bg-cream border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`px-5 py-2 rounded-full text-sm whitespace-nowrap font-sans transition-colors ${
                  i === 0
                    ? "bg-dark-taupe text-cream"
                    : "bg-beige border border-border text-taupe hover:bg-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className={`aspect-square rounded-2xl bg-gradient-to-br ${
                  gradients[i % gradients.length]
                } border border-border flex flex-col items-center justify-center gap-3 hover:shadow-md transition-shadow cursor-pointer group`}
              >
                <div className="text-5xl opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all">
                  {item.emoji}
                </div>
                <div className="text-center px-4">
                  <p className="text-xs text-taupe/50 font-sans">{item.label}</p>
                  <span className="text-xs text-accent/60 font-sans">{item.category}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Phase 2 note for dev context — remove before launch */}
          <div className="mt-16 text-center bg-beige border border-dashed border-accent/30 rounded-2xl p-8">
            <p className="text-sm text-taupe/50 font-sans">
              📸 <strong className="text-taupe/70">Phase 2:</strong> Real cake photos will be uploaded via Supabase Storage and displayed here dynamically.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dark-taupe text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-cream text-4xl mb-5">Inspired by What You See?</h2>
          <p className="text-cream/60 mb-8">Let's create something this beautiful — and completely yours.</p>
          <Link href="/contact" className="btn-primary">
            Request a Custom Cake
          </Link>
        </div>
      </section>
    </div>
  );
}
