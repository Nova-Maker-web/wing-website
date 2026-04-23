import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Star, Clock, MapPin, Flame, ShoppingBag } from "lucide-react";

import heroWings from "@/assets/hero-wings.jpg";
import wingsFries from "@/assets/wings-fries.jpg";
import wingDip from "@/assets/wing-dip.jpg";
import wingFlavors from "@/assets/wing-flavors.jpg";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Marquee } from "@/components/Marquee";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Wing Spot Rexdale — Etobicoke's Best Chicken Wings" },
      {
        name: "description",
        content:
          "The legendary chicken wings of Rexdale. Crispy, saucy, served until 2 AM. Pickup in Etobicoke. 4.8★ · 563+ reviews. Call (416) 742-5959.",
      },
      { property: "og:title", content: "The Wing Spot Rexdale — Etobicoke's Best Chicken Wings" },
      {
        property: "og:description",
        content:
          "Crispy, saucy, legendary chicken wings. Open until 2 AM. Pickup in Rexdale.",
      },
      { property: "og:image", content: heroWings },
      { name: "twitter:image", content: heroWings },
    ],
  }),
  component: HomePage,
});

const reviews = [
  {
    text: "The wings were absolutely delicious — crispy, juicy, and packed with flavor. Easily the best in the area.",
    author: "Verified Google Reviewer",
  },
  {
    text: "I really enjoy the food and service from this place. Always fresh, always hot, never disappoints.",
    author: "Verified Google Reviewer",
  },
  {
    text: "My go-to late-night spot. Open till 2am and the sauces are unreal. Honey garlic is dangerous.",
    author: "Verified Google Reviewer",
  },
];

const highlights = [
  { value: "4.8", label: "Google Rating", sub: "563+ reviews" },
  { value: "2AM", label: "Open Late", sub: "Every single night" },
  { value: "$10–20", label: "Per Person", sub: "Big portions, fair price" },
  { value: "8+", label: "Sauce Flavors", sub: "From mild to merciless" },
];

function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-ink text-bone">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-bone/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--sauce)_0%,_transparent_55%)] opacity-25" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:py-20">
          <div className="flex flex-col justify-center gap-8 lg:col-span-7">
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 border border-bone/20 bg-card px-3 py-1.5">
                <Star className="size-4 fill-mustard text-mustard" />
                <span className="font-mono text-xs font-bold tracking-widest">
                  4.8 <span className="text-ash">· 563 REVIEWS</span>
                </span>
              </div>
              <div className="inline-flex items-center gap-2 border border-sauce/40 bg-sauce/10 px-3 py-1.5">
                <Flame className="size-4 text-sauce" />
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-sauce">
                  Open Till 2 AM
                </span>
              </div>
            </div>

            <h1 className="font-display text-[3.25rem] leading-[0.85] uppercase tracking-tight text-balance sm:text-[5rem] lg:text-[7.5rem]">
              <span className="block text-bone">Messy.</span>
              <span className="block text-bone">Saucy.</span>
              <span className="mt-3 inline-block -rotate-2 bg-bone px-4 py-2 text-ink shadow-[8px_8px_0px_var(--sauce)] sm:px-6">
                Legendary.
              </span>
            </h1>

            <p className="max-w-xl text-lg text-ash text-pretty sm:text-xl">
              Rexdale's go-to wing joint. We fry 'em crispy, sauce 'em heavy, and serve 'em hot
              until <span className="text-bone font-semibold">2 AM</span> every single night.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/menu"
                className="group inline-flex items-center justify-center gap-3 border-[3px] border-bone bg-sauce px-8 py-5 font-display text-xl uppercase tracking-wider text-paper shadow-[6px_6px_0px_var(--bone)] transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_var(--bone)] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_var(--bone)]"
              >
                <ShoppingBag className="size-5" />
                Order Pickup
              </Link>
              <a
                href="tel:4167425959"
                className="inline-flex items-center justify-center gap-3 border-[3px] border-bone bg-transparent px-8 py-5 font-display text-xl uppercase tracking-wider text-bone transition-colors hover:bg-bone hover:text-ink"
              >
                <Phone className="size-5" />
                Call To Order
              </a>
            </div>

            <div className="mt-2 flex items-center gap-6 border-t border-bone/10 pt-6">
              <div className="flex flex-col">
                <span className="font-mono text-[10px] uppercase tracking-widest text-ash">
                  Call Direct
                </span>
                <a
                  href="tel:4167425959"
                  className="font-display text-2xl tracking-wider text-bone hover:text-sauce"
                >
                  (416) 742-5959
                </a>
              </div>
              <div className="h-12 w-px bg-bone/15" />
              <div className="flex flex-col">
                <span className="font-mono text-[10px] uppercase tracking-widest text-ash">
                  Find Us
                </span>
                <span className="font-display text-base text-bone">2687 Kipling Ave</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative flex items-center justify-center lg:col-span-5">
            <div className="absolute -top-4 -left-4 hidden size-full border-[3px] border-dashed border-bone/20 lg:block" />
            <div className="absolute -bottom-4 -right-4 hidden size-full bg-sauce/10 lg:block" />

            <div className="relative w-full max-w-md border-[4px] border-bone bg-card p-3 shadow-[16px_16px_0px_var(--sauce)]">
              <div className="aspect-[4/5] overflow-hidden bg-card">
                <img
                  src={heroWings}
                  alt="Crispy buffalo chicken wings drenched in red hot sauce, steam rising"
                  width={1080}
                  height={1920}
                  className="size-full object-cover"
                />
              </div>
              <div className="absolute -right-4 bottom-10 rotate-[6deg] border-[3px] border-ink bg-mustard px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest text-ink shadow-[4px_4px_0px_var(--sauce-deep)]">
                Hot &amp; Ready
              </div>
              <div className="absolute -left-3 top-6 -rotate-[8deg] border-[3px] border-ink bg-bone px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-ink">
                Since Day One
              </div>
            </div>
          </div>
        </div>
      </section>

      <Marquee
        items={[
          "Open Till 2 AM",
          "Pickup Available",
          "4.8★ on Google",
          "Made Fresh, Served Hot",
          "Rexdale's #1 Wing Spot",
        ]}
        variant="sauce"
      />

      {/* HIGHLIGHTS */}
      <section className="border-b border-bone/10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-bone/10 sm:grid-cols-4">
          {highlights.map((h) => (
            <div key={h.label} className="bg-ink p-6 sm:p-8">
              <div className="font-display text-4xl text-bone sm:text-5xl">{h.value}</div>
              <div className="mt-2 font-mono text-[10px] font-bold uppercase tracking-widest text-sauce">
                {h.label}
              </div>
              <div className="mt-1 text-xs text-ash">{h.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MENU TEASER */}
      <section className="relative border-b border-bone/10 px-4 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-sauce">
                The Goods
              </p>
              <h2 className="mt-3 max-w-2xl font-display text-4xl uppercase tracking-tight text-bone sm:text-6xl">
                A wing for every kind of hunger.
              </h2>
            </div>
            <Link
              to="/menu"
              className="inline-flex w-fit items-center gap-2 border-[2px] border-bone px-5 py-3 font-mono text-xs font-bold uppercase tracking-widest text-bone transition-colors hover:bg-bone hover:text-ink"
            >
              Full Menu →
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <article className="group relative overflow-hidden border border-bone/10 bg-card transition-transform hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={wingsFries}
                  alt="Basket of seasoned wings and golden fries with dipping sauces"
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="font-mono text-[10px] uppercase tracking-widest text-mustard">
                  Most Loved
                </div>
                <h3 className="mt-2 font-display text-2xl uppercase text-bone">Wings & Fries</h3>
                <p className="mt-2 text-sm text-ash">
                  Our signature combo. Crispy wings tossed in your sauce of choice + a heap of
                  seasoned fries.
                </p>
                <div className="mt-4 font-display text-xl text-sauce">From $13.99</div>
              </div>
            </article>

            <article className="group relative overflow-hidden border border-bone/10 bg-card transition-transform hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={wingFlavors}
                  alt="Four flavors of saucy chicken wings on dark slate plates"
                  width={1920}
                  height={1080}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="font-mono text-[10px] uppercase tracking-widest text-mustard">
                  8+ Sauces
                </div>
                <h3 className="mt-2 font-display text-2xl uppercase text-bone">
                  Pick Your Heat
                </h3>
                <p className="mt-2 text-sm text-ash">
                  Honey Garlic, Buffalo, BBQ, Lemon Pepper, Hot, Suicide, Sweet Chili, Cajun Dry
                  Rub.
                </p>
                <div className="mt-4 font-display text-xl text-sauce">10 / 20 / 30 pcs</div>
              </div>
            </article>

            <article className="group relative overflow-hidden border border-bone/10 bg-card transition-transform hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={wingDip}
                  alt="Saucy buffalo wing dipped into creamy ranch"
                  width={1080}
                  height={1920}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="font-mono text-[10px] uppercase tracking-widest text-mustard">
                  Built For Sharing
                </div>
                <h3 className="mt-2 font-display text-2xl uppercase text-bone">Party Packs</h3>
                <p className="mt-2 text-sm text-ash">
                  50 or 100 wing platters with multiple sauces, fries and dips. Game-night ready.
                </p>
                <div className="mt-4 font-display text-xl text-sauce">From $54.99</div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="relative border-b border-bone/10 bg-card px-4 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-sauce">
              The Wing Spot Difference
            </p>
            <h2 className="mt-3 font-display text-4xl uppercase tracking-tight text-bone sm:text-6xl">
              Real wings. <br />
              <span className="text-sauce">Real heat.</span> <br />
              No shortcuts.
            </h2>
            <p className="mt-6 max-w-lg text-lg text-ash">
              We've been frying Rexdale's favorite wings since 2018. Same recipes, same fryers,
              same regulars. We don't do gimmicks — just hot, crispy, sauce-soaked wings.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                { title: "Made fresh to order", body: "Never sitting under a heat lamp." },
                { title: "Fried crispy, sauced heavy", body: "The way wings are meant to be." },
                { title: "Open until 2 AM", body: "Late-night cravings, sorted." },
                { title: "Pickup ready fast", body: "Usually 15–25 minutes from your call." },
              ].map((item) => (
                <li key={item.title} className="flex gap-4">
                  <div className="mt-1 flex size-6 shrink-0 items-center justify-center border-[2px] border-sauce bg-sauce/10">
                    <Flame className="size-3.5 text-sauce" />
                  </div>
                  <div>
                    <div className="font-display text-lg uppercase text-bone">{item.title}</div>
                    <div className="text-sm text-ash">{item.body}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="border-[4px] border-bone bg-ink p-3 shadow-[12px_12px_0px_var(--sauce)]">
              <div className="aspect-square overflow-hidden">
                <img
                  src={wingDip}
                  alt="Buffalo wing being dipped into ranch sauce"
                  width={1080}
                  height={1920}
                  loading="lazy"
                  className="size-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="border-b border-bone/10 px-4 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-sauce">
                What Rexdale Says
              </p>
              <h2 className="mt-3 font-display text-4xl uppercase tracking-tight text-bone sm:text-6xl">
                4.8 stars. <br />
                <span className="text-ash/70">563+ reviews.</span>
              </h2>
            </div>
            <div className="hidden md:flex items-center gap-1 text-mustard">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-6 fill-mustard text-mustard" />
              ))}
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {reviews.map((r, i) => (
              <figure
                key={i}
                className="relative border-[2px] border-bone/15 bg-card p-8 transition-colors hover:border-sauce/50"
              >
                <div className="flex items-center gap-1 text-mustard">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="size-4 fill-mustard text-mustard" />
                  ))}
                </div>
                <blockquote className="mt-4 font-display text-lg leading-snug text-bone">
                  "{r.text}"
                </blockquote>
                <figcaption className="mt-6 font-mono text-[10px] uppercase tracking-widest text-ash">
                  — {r.author}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-sauce px-4 py-20 sm:px-8 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--sauce-deep)_0%,_transparent_70%)]" />
        <div className="relative mx-auto max-w-5xl text-center">
          <h2 className="font-display text-5xl uppercase leading-none tracking-tight text-paper sm:text-7xl lg:text-8xl">
            Hungry yet?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-paper/90">
            Skip the line. Call ahead, order pickup, or get it delivered. Open every night until
            2 AM.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:4167425959"
              className="inline-flex items-center justify-center gap-3 border-[3px] border-ink bg-bone px-10 py-5 font-display text-2xl uppercase tracking-wider text-ink shadow-[8px_8px_0px_var(--ink)] transition-transform hover:-translate-x-1 hover:-translate-y-1"
            >
              <Phone className="size-6" />
              (416) 742-5959
            </a>
            <Link
              to="/menu"
              className="inline-flex items-center justify-center gap-3 border-[3px] border-ink bg-transparent px-10 py-5 font-display text-2xl uppercase tracking-wider text-ink hover:bg-ink hover:text-paper"
            >
              See the Menu
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 font-mono text-xs uppercase tracking-widest text-paper/80">
            <span className="flex items-center gap-2">
              <MapPin className="size-3.5" /> 2687 Kipling Ave, Etobicoke
            </span>
            <span className="flex items-center gap-2">
              <Clock className="size-3.5" /> Daily until 2 AM
            </span>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
