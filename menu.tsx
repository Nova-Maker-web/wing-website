import { createFileRoute } from "@tanstack/react-router";
import { Phone, Flame } from "lucide-react";

import wingFlavors from "@/assets/wing-flavors.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — The Wing Spot Rexdale" },
      {
        name: "description",
        content:
          "Browse The Wing Spot Rexdale's full menu: chicken wings in 8+ sauces, loaded fries, party packs, sides and drinks. $10–$20 per person.",
      },
      { property: "og:title", content: "Menu — The Wing Spot Rexdale" },
      {
        property: "og:description",
        content:
          "Wings in 8+ sauces, loaded fries, party packs and more. Pickup in Etobicoke.",
      },
      { property: "og:image", content: wingFlavors },
      { name: "twitter:image", content: wingFlavors },
    ],
  }),
  component: MenuPage,
});

const sauces = [
  { name: "Honey Garlic", heat: 1, note: "Sweet, sticky, dangerously addictive." },
  { name: "Mild Buffalo", heat: 2, note: "Classic tang with just a kiss of heat." },
  { name: "Medium Buffalo", heat: 3, note: "The crowd favorite." },
  { name: "Hot Buffalo", heat: 4, note: "Sweat-on-the-brow territory." },
  { name: "Suicide", heat: 5, note: "Don't say we didn't warn you." },
  { name: "BBQ", heat: 1, note: "Smoky, slow, southern-style." },
  { name: "Sweet Chili", heat: 2, note: "Sweet up front, slow burn finish." },
  { name: "Lemon Pepper Dry", heat: 1, note: "Zesty dry rub, no sauce mess." },
  { name: "Cajun Dry Rub", heat: 3, note: "Bold spice blend, crispy finish." },
];

const wings = [
  { qty: "5 pcs", price: "$8.99", note: "Solo lunch" },
  { qty: "10 pcs", price: "$14.99", note: "1 sauce, fries available" },
  { qty: "20 pcs", price: "$26.99", note: "2 sauces" },
  { qty: "30 pcs", price: "$39.99", note: "3 sauces" },
  { qty: "50 pcs", price: "$59.99", note: "Party pack · 4 sauces" },
  { qty: "100 pcs", price: "$109.99", note: "Mega pack · 6 sauces" },
];

const sides = [
  { name: "Seasoned Fries", price: "$4.99" },
  { name: "Loaded Fries (cheese, bacon, sauce)", price: "$8.99" },
  { name: "Onion Rings", price: "$5.99" },
  { name: "Mozzarella Sticks (6)", price: "$7.49" },
  { name: "Coleslaw", price: "$3.49" },
  { name: "Garlic Bread", price: "$3.99" },
];

const drinks = [
  { name: "Pop (can)", price: "$1.99" },
  { name: "Bottled Water", price: "$1.99" },
  { name: "Juice", price: "$2.49" },
  { name: "Milkshake", price: "$5.99" },
];

const dips = [
  { name: "Ranch / Blue Cheese", price: "$0.99" },
  { name: "Garlic Aioli / Honey Mustard", price: "$0.99" },
  { name: "Sweet Chili / Hot Sauce", price: "$0.99" },
];

function HeatLevel({ level }: { level: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Flame
          key={i}
          className={`size-3.5 ${i < level ? "fill-sauce text-sauce" : "text-bone/15"}`}
        />
      ))}
    </div>
  );
}

function MenuSection({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-bone/10 px-4 py-16 sm:px-8 lg:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-sauce">
              The Menu
            </p>
            <h2 className="mt-2 font-display text-4xl uppercase tracking-tight text-bone sm:text-5xl">
              {title}
            </h2>
            {subtitle && <p className="mt-2 max-w-xl text-sm text-ash">{subtitle}</p>}
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}

function MenuPage() {
  return (
    <div className="flex min-h-screen flex-col bg-ink text-bone">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-bone/10">
        <div className="absolute inset-0">
          <img
            src={wingFlavors}
            alt="Four flavors of saucy chicken wings"
            width={1920}
            height={1080}
            className="size-full object-cover opacity-30"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/80 to-ink" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-8 lg:py-28">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-sauce">
            What we sling
          </p>
          <h1 className="mt-3 font-display text-5xl uppercase tracking-tight text-bone sm:text-7xl lg:text-8xl">
            The Menu
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ash">
            Wings, fries, party packs, sides and drinks. Built for late nights, hangovers, game
            days, and everything in between. Prices in CAD.
          </p>
          <a
            href="tel:4167425959"
            className="mt-8 inline-flex items-center gap-2 border-[3px] border-bone bg-bone px-6 py-4 font-display text-base uppercase tracking-wider text-ink shadow-[6px_6px_0px_var(--sauce)] transition-transform hover:-translate-x-1 hover:-translate-y-1"
          >
            <Phone className="size-4" />
            Call to order · (416) 742-5959
          </a>
        </div>
      </section>

      <MenuSection
        title="Chicken Wings"
        subtitle="All wings come with celery, carrots and 1 dip. Pick your sauce(s) at checkout."
      >
        <div className="grid grid-cols-1 gap-px bg-bone/10 sm:grid-cols-2">
          {wings.map((w) => (
            <div
              key={w.qty}
              className="flex items-baseline justify-between gap-4 bg-ink p-5 transition-colors hover:bg-card"
            >
              <div>
                <div className="font-display text-xl uppercase text-bone">{w.qty}</div>
                <div className="text-xs text-ash">{w.note}</div>
              </div>
              <div className="font-display text-xl text-sauce">{w.price}</div>
            </div>
          ))}
        </div>
      </MenuSection>

      <MenuSection title="Sauces & Dry Rubs" subtitle="Mix and match. The more wings, the more sauces.">
        <div className="grid grid-cols-1 gap-px bg-bone/10 md:grid-cols-3">
          {sauces.map((s) => (
            <div key={s.name} className="bg-ink p-5">
              <div className="flex items-center justify-between">
                <div className="font-display text-lg uppercase text-bone">{s.name}</div>
                <HeatLevel level={s.heat} />
              </div>
              <p className="mt-2 text-xs text-ash">{s.note}</p>
            </div>
          ))}
        </div>
      </MenuSection>

      <MenuSection title="Sides">
        <div className="grid grid-cols-1 gap-px bg-bone/10 sm:grid-cols-2">
          {sides.map((s) => (
            <div
              key={s.name}
              className="flex items-center justify-between gap-4 bg-ink p-5"
            >
              <div className="font-display text-base uppercase text-bone">{s.name}</div>
              <div className="font-display text-lg text-sauce">{s.price}</div>
            </div>
          ))}
        </div>
      </MenuSection>

      <MenuSection title="Dips & Drinks">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-mustard">
              Extra Dips
            </h3>
            <div className="mt-4 grid grid-cols-1 gap-px bg-bone/10">
              {dips.map((d) => (
                <div
                  key={d.name}
                  className="flex items-center justify-between gap-4 bg-ink p-5"
                >
                  <div className="font-display text-base uppercase text-bone">{d.name}</div>
                  <div className="font-display text-lg text-sauce">{d.price}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-mustard">
              Drinks
            </h3>
            <div className="mt-4 grid grid-cols-1 gap-px bg-bone/10">
              {drinks.map((d) => (
                <div
                  key={d.name}
                  className="flex items-center justify-between gap-4 bg-ink p-5"
                >
                  <div className="font-display text-base uppercase text-bone">{d.name}</div>
                  <div className="font-display text-lg text-sauce">{d.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MenuSection>

      <section className="bg-sauce px-4 py-16 text-center sm:px-8">
        <p className="mx-auto max-w-2xl font-display text-3xl uppercase leading-tight text-paper sm:text-4xl">
          Ready to order? Call us or swing by.
        </p>
        <a
          href="tel:4167425959"
          className="mt-6 inline-flex items-center gap-3 border-[3px] border-ink bg-bone px-8 py-4 font-display text-xl uppercase tracking-wider text-ink shadow-[6px_6px_0px_var(--ink)] transition-transform hover:-translate-x-1 hover:-translate-y-1"
        >
          <Phone className="size-5" />
          (416) 742-5959
        </a>
      </section>

      <SiteFooter />
    </div>
  );
}
