import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Clock, ShoppingBag } from "lucide-react";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Order — The Wing Spot Rexdale" },
      {
        name: "description",
        content:
          "Order pickup from The Wing Spot Rexdale. Call (416) 742-5959. Located at 2687 Kipling Ave, Etobicoke. Open daily until 2 AM.",
      },
      { property: "og:title", content: "Contact & Order — The Wing Spot Rexdale" },
      {
        property: "og:description",
        content:
          "Call (416) 742-5959 to order. 2687 Kipling Ave, Etobicoke. Open daily until 2 AM.",
      },
    ],
  }),
  component: ContactPage,
});

const hours = [
  { day: "Monday", time: "11:00 AM – 2:00 AM" },
  { day: "Tuesday", time: "11:00 AM – 2:00 AM" },
  { day: "Wednesday", time: "11:00 AM – 2:00 AM" },
  { day: "Thursday", time: "11:00 AM – 2:00 AM" },
  { day: "Friday", time: "11:00 AM – 2:00 AM" },
  { day: "Saturday", time: "12:00 PM – 2:00 AM" },
  { day: "Sunday", time: "12:00 PM – 2:00 AM" },
];

function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-ink text-bone">
      <SiteHeader />

      <section className="border-b border-bone/10 px-4 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-sauce">
            Get In Touch
          </p>
          <h1 className="mt-3 font-display text-5xl uppercase tracking-tight text-bone sm:text-7xl">
            Place your order.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ash">
            Call ahead for pickup, or stop by the shop. We'll have it hot and ready.
          </p>
        </div>
      </section>

      {/* Order options */}
      <section className="border-b border-bone/10 px-4 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <a
            href="tel:4167425959"
            className="group relative flex flex-col gap-4 border-[3px] border-bone bg-card p-8 shadow-[8px_8px_0px_var(--sauce)] transition-transform hover:-translate-x-1 hover:-translate-y-1 sm:p-10"
          >
            <div className="flex size-14 items-center justify-center border-[3px] border-bone bg-sauce text-paper">
              <ShoppingBag className="size-6" />
            </div>
            <div>
              <h2 className="font-display text-3xl uppercase text-bone">Order Pickup</h2>
              <p className="mt-2 text-sm text-ash">
                Call us, drive over, walk in. Usually ready in 15–25 minutes.
              </p>
            </div>
            <div className="mt-2 inline-flex items-center gap-2 font-display text-xl text-sauce group-hover:text-bone">
              <Phone className="size-5" />
              (416) 742-5959
            </div>
          </a>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="px-4 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="space-y-8">
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-sauce">
                  Find Us
                </p>
                <h2 className="mt-3 font-display text-3xl uppercase tracking-tight text-bone sm:text-4xl">
                  The Shop
                </h2>
                <ul className="mt-6 space-y-4 text-base">
                  <li className="flex gap-3">
                    <MapPin className="mt-1 size-5 shrink-0 text-mustard" />
                    <div>
                      <div className="font-display text-lg uppercase text-bone">
                        2687 Kipling Ave
                      </div>
                      <div className="text-ash">Etobicoke, ON M9V 5G6</div>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Phone className="mt-1 size-5 shrink-0 text-mustard" />
                    <div>
                      <a href="tel:4167425959" className="font-display text-lg text-bone hover:text-sauce">
                        (416) 742-5959
                      </a>
                      <div className="text-xs uppercase tracking-widest text-ash">
                        Tap to call
                      </div>
                    </div>
                  </li>
                </ul>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=2687+Kipling+Ave+Etobicoke+ON"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-6 inline-flex items-center gap-2 border-[2px] border-bone px-5 py-3 font-mono text-xs font-bold uppercase tracking-widest text-bone transition-colors hover:bg-bone hover:text-ink"
                >
                  Get directions →
                </a>
              </div>

              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-sauce">
                  Hours
                </p>
                <h2 className="mt-3 flex items-center gap-3 font-display text-3xl uppercase tracking-tight text-bone sm:text-4xl">
                  <Clock className="size-6 text-mustard" />
                  Open Late
                </h2>
                <ul className="mt-6 divide-y divide-bone/10 border-y border-bone/10">
                  {hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex items-center justify-between py-3 font-mono text-sm"
                    >
                      <span className="uppercase tracking-widest text-bone">{h.day}</span>
                      <span className="text-ash">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="overflow-hidden border-[4px] border-bone shadow-[12px_12px_0px_var(--sauce)]">
              <iframe
                title="The Wing Spot Rexdale location"
                src="https://www.google.com/maps?q=2687+Kipling+Ave,+Etobicoke,+ON+M9V+5G6&output=embed"
                width="100%"
                height="500"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full grayscale"
                style={{ border: 0 }}
              />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
