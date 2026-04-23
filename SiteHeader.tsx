import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { useState } from "react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-bone/10 bg-ink/90 backdrop-blur-md">
      <div className="bg-sauce text-paper">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] sm:text-xs">
          <span className="hidden sm:inline">📍 2687 Kipling Ave, Etobicoke</span>
          <span>Open Late · Till 2 AM</span>
          <a href="tel:4167425959" className="font-bold hover:underline">
            (416) 742-5959
          </a>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-8">
        <Link to="/" className="group flex items-center gap-3">
          <div className="flex size-10 items-center justify-center border-[3px] border-bone bg-sauce font-display text-xl font-bold text-paper transition-transform group-hover:-rotate-6">
            W
          </div>
          <div className="leading-none">
            <div className="font-display text-xl font-bold uppercase tracking-tight text-bone sm:text-2xl">
              The Wing Spot
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-ash">
              Rexdale · Est. 2018
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-bone/70 transition-colors hover:text-sauce"
              activeProps={{ className: "text-sauce" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:4167425959"
            className="inline-flex items-center gap-2 border-[2px] border-bone bg-bone px-5 py-3 font-display text-sm font-bold uppercase tracking-wider text-ink transition-all hover:bg-sauce hover:text-paper hover:border-sauce"
          >
            <Phone className="size-4" />
            Order Now
          </a>
        </nav>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden flex size-10 flex-col items-center justify-center gap-1 border border-bone/20"
          aria-label="Toggle menu"
        >
          <span className={`block h-[2px] w-5 bg-bone transition ${open ? "translate-y-[6px] rotate-45" : ""}`} />
          <span className={`block h-[2px] w-5 bg-bone transition ${open ? "opacity-0" : ""}`} />
          <span className={`block h-[2px] w-5 bg-bone transition ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="border-t border-bone/10 bg-ink md:hidden">
          <nav className="flex flex-col px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-bone/5 py-4 font-display text-lg uppercase tracking-wider text-bone"
                activeProps={{ className: "text-sauce" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:4167425959"
              className="mt-4 inline-flex items-center justify-center gap-2 border-[2px] border-sauce bg-sauce px-5 py-4 font-display text-base font-bold uppercase tracking-wider text-paper"
            >
              <Phone className="size-4" />
              Call (416) 742-5959
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
