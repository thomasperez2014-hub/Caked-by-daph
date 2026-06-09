import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";

const menuSections = [
  {
    title: "Custom Cakes",
    icon: "🎂",
    items: [
      { name: "6-inch Round (serves 8–10)", price: "Starting at $85" },
      { name: "8-inch Round (serves 12–15)", price: "Starting at $110" },
      { name: "10-inch Round (serves 20–25)", price: "Starting at $145" },
      { name: "2-Tier Cake (serves 30–40)", price: "Starting at $220" },
      { name: "3-Tier Cake (serves 50–75)", price: "Starting at $350" },
    ],
  },
  {
    title: "Cupcakes",
    icon: "🧁",
    items: [
      { name: "Mini Cupcakes (12-count)", price: "Starting at $30" },
      { name: "Standard Cupcakes (12-count)", price: "Starting at $42" },
      { name: "Jumbo Cupcakes (6-count)", price: "Starting at $36" },
      { name: "Cupcake Tower (50-count)", price: "Starting at $160" },
    ],
  },
  {
    title: "Specialty Desserts",
    icon: "🍰",
    items: [
      { name: "Cake Pops (dozen)", price: "Starting at $36" },
      { name: "Macarons (dozen)", price: "Starting at $40" },
      { name: "Dessert Table Package", price: "Custom quote" },
      { name: "Smash Cake (add-on)", price: "Starting at $35" },
    ],
  },
];

const flavors = [
  "Classic Vanilla", "Rich Chocolate", "Strawberry",
  "Lemon Blueberry", "Funfetti", "Red Velvet",
  "Carrot Cake", "Cookies & Cream", "Brown Butter",
  "Champagne", "Coconut Lime", "Chocolate Raspberry",
];

const frostings = [
  "Swiss Meringue Buttercream", "American Buttercream",
  "Cream Cheese Frosting", "Whipped Cream", "Ganache",
  "Fondant (for sculpted designs)",
];

export default function MenuPage() {
  return (
    <div className="bg-cream pt-20">
      {/* Header */}
      <section className="py-20 bg-beige text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="section-label mb-4">The Menu</p>
          <h1 className="section-heading text-5xl mb-5">Pricing & Flavors</h1>
          <p className="text-taupe/70 leading-relaxed">
            All cakes are custom-designed and made to order. Prices are starting points and
            vary based on design complexity, size, and delivery. Request a quote for your specific vision.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {menuSections.map((section) => (
              <div key={section.title} className="bg-beige rounded-2xl border border-border overflow-hidden">
                <div className="px-8 py-6 border-b border-border bg-cream">
                  <span className="text-3xl">{section.icon}</span>
                  <h2 className="font-serif text-dark-taupe text-2xl mt-2">{section.title}</h2>
                </div>
                <div className="px-8 py-6">
                  <ul className="space-y-4">
                    {section.items.map((item) => (
                      <li key={item.name} className="flex justify-between items-start gap-4 pb-4 border-b border-border last:border-0 last:pb-0">
                        <span className="text-sm text-taupe/80 leading-snug">{item.name}</span>
                        <span className="text-sm font-medium text-accent whitespace-nowrap">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-taupe/50 mt-8">
            * All prices are estimates. Final pricing depends on design complexity and requirements.
          </p>
        </div>
      </section>

      {/* Flavors */}
      <section className="py-24 bg-beige">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Cake Flavors */}
            <div>
              <SectionHeader label="Flavors" heading="Cake Flavors" align="left" className="mb-8" />
              <div className="flex flex-wrap gap-3">
                {flavors.map((f) => (
                  <span
                    key={f}
                    className="bg-cream border border-border rounded-full px-4 py-2 text-sm text-taupe/80"
                  >
                    {f}
                  </span>
                ))}
              </div>
              <p className="text-sm text-taupe/50 mt-5">
                Don't see your flavor? Ask! Custom flavor combinations are always welcome.
              </p>
            </div>

            {/* Frostings */}
            <div>
              <SectionHeader label="Finishes" heading="Frosting & Finish Options" align="left" className="mb-8" />
              <ul className="space-y-4">
                {frostings.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-taupe/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Booking notice + CTA */}
      <section className="py-20 bg-dark-taupe text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-cream text-4xl mb-5">Book Your Custom Cake</h2>
          <p className="text-cream/60 mb-3 leading-relaxed">
            Orders are accepted <strong className="text-cream/80">2–4 weeks in advance</strong>. 
            Peak seasons book fast — secure your date early!
          </p>
          <p className="text-cream/40 text-sm mb-8">A 50% deposit is required to confirm your order.</p>
          <Link href="/contact" className="btn-primary">
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
