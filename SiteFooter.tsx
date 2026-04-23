import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Clock } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-bone/10 bg-ink">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-3xl font-bold uppercase tracking-tight text-bone">
            The Wing Spot
          </div>
          <p className="mt-4 max-w-md text-sm text-ash">
            Rexdale's go-to for the saucy-est, crispiest chicken wings in Etobicoke. Open late,
            every night, because cravings don't sleep.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <div className="border border-bone/20 px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-bone">
              ★ 4.8
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-ash">
              563+ Google reviews
            </span>
          </div>
        </div>

        <div>
          <div className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-sauce">
            Visit
          </div>
          <ul className="mt-4 space-y-3 text-sm text-bone/80">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-mustard" />
              <span>2687 Kipling Ave, Etobicoke, ON M9V 5G6</span>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 size-4 shrink-0 text-mustard" />
              <a href="tel:4167425959" className="hover:text-sauce">
                (416) 742-5959
              </a>
            </li>
            <li className="flex gap-2">
              <Clock className="mt-0.5 size-4 shrink-0 text-mustard" />
              <span>Daily until 2:00 AM</span>
            </li>
          </ul>
        </div>

        <div>
          <div className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-sauce">
            Explore
          </div>
          <ul className="mt-4 space-y-3 text-sm">
            <li><Link to="/" className="text-bone/80 hover:text-sauce">Home</Link></li>
            <li><Link to="/menu" className="text-bone/80 hover:text-sauce">Menu</Link></li>
            <li><Link to="/about" className="text-bone/80 hover:text-sauce">About</Link></li>
            <li><Link to="/contact" className="text-bone/80 hover:text-sauce">Contact & Order</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-bone/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 font-mono text-[10px] uppercase tracking-[0.2em] text-ash sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>© {new Date().getFullYear()} The Wing Spot Rexdale. All rights reserved.</span>
          <span>Made with sauce in Etobicoke 🌶️</span>
        </div>
      </div>
    </footer>
  );
}
