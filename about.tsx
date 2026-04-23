import { createFileRoute } from "@tanstack/react-router";

import wingsFries from "@/assets/wings-fries.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — The Wing Spot Rexdale" },
      {
        name: "description",
        content:
          "The story of The Wing Spot Rexdale: a neighborhood late-night chicken wing joint serving Etobicoke since 2018. Crispy, saucy, no shortcuts.",
      },
      { property: "og:title", content: "About — The Wing Spot Rexdale" },
      {
        property: "og:description",
        content:
          "A Rexdale wing joint built on hot fryers, heavy sauce, and late nights. Serving Etobicoke since 2018.",
      },
      { property: "og:image", content: wingsFries },
      { name: "twitter:image", content: wingsFries },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-ink text-bone">
      <SiteHeader />

      <section className="border-b border-bone/10 px-4 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-sauce">
              Our Story
            </p>
            <h1 className="mt-3 font-display text-5xl uppercase leading-none tracking-tight text-bone sm:text-7xl">
              Frying wings <br />
              for Rexdale <br />
              <span className="text-sauce">since 2018.</span>
            </h1>
            <div className="mt-8 space-y-5 text-lg text-bone/80">
              <p>
                The Wing Spot started as a small storefront on Kipling Avenue with one simple
                idea: serve the best wings in Etobicoke, served hot, served late, no compromises.
              </p>
              <p>
                A few years and 563+ five-star reviews later, we're still doing the exact same
                thing — frying every wing to order, sauce-tossed by hand, served until the early
                hours. We don't do trends. We don't change the recipe. We just make it the way
                you like it.
              </p>
              <p>
                Whether you're stopping in after a late shift, ordering a party pack for the
                game, or just craving something hot and saucy at 1:47 AM — we got you.
              </p>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-px bg-bone/10">
              <div className="bg-ink p-5">
                <dt className="font-mono text-[10px] uppercase tracking-widest text-ash">
                  Founded
                </dt>
                <dd className="mt-1 font-display text-3xl text-bone">2018</dd>
              </div>
              <div className="bg-ink p-5">
                <dt className="font-mono text-[10px] uppercase tracking-widest text-ash">
                  Wings sold
                </dt>
                <dd className="mt-1 font-display text-3xl text-bone">2M+</dd>
              </div>
              <div className="bg-ink p-5">
                <dt className="font-mono text-[10px] uppercase tracking-widest text-ash">
                  Sauces on tap
                </dt>
                <dd className="mt-1 font-display text-3xl text-bone">9</dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-5">
            <div className="border-[4px] border-bone bg-card p-3 shadow-[12px_12px_0px_var(--sauce)]">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={wingsFries}
                  alt="Basket of wings and seasoned fries"
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="size-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-b border-bone/10 bg-card px-4 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-sauce">
            What we believe
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl uppercase tracking-tight text-bone sm:text-5xl">
            Three rules. <span className="text-sauce">Never broken.</span>
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-px bg-bone/10 md:grid-cols-3">
            {[
              {
                n: "01",
                title: "Fresh, always",
                body: "Every wing is fried to order. Nothing sits. Nothing gets reheated. Ever.",
              },
              {
                n: "02",
                title: "Sauce is sacred",
                body: "Made in-house, every batch. We don't water it down and we don't go light.",
              },
              {
                n: "03",
                title: "Open when you need us",
                body: "Late nights, weekends, holidays — we're frying until 2 AM. Come hungry.",
              },
            ].map((v) => (
              <div key={v.n} className="bg-ink p-8">
                <div className="font-mono text-xs font-bold tracking-widest text-mustard">
                  {v.n}
                </div>
                <div className="mt-4 font-display text-2xl uppercase text-bone">{v.title}</div>
                <p className="mt-3 text-sm text-ash">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
