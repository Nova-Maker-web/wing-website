import { Outlet, createRootRoute, HeadContent, Scripts, Link } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-ink px-4 text-center">
      <div className="font-display text-[8rem] font-bold leading-none text-sauce">404</div>
      <h2 className="mt-4 font-display text-3xl uppercase tracking-tight text-bone">
        This page is off the menu
      </h2>
      <p className="mt-3 max-w-md text-ash">
        The page you're craving doesn't exist. Let's get you back to the wings.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center justify-center border-[3px] border-bone bg-bone px-8 py-4 font-display text-lg uppercase tracking-wider text-ink shadow-[6px_6px_0px_var(--sauce)] transition-transform hover:-translate-x-1 hover:-translate-y-1"
      >
        Back home
      </Link>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "The Wing Spot Rexdale — Etobicoke's Best Chicken Wings" },
      {
        name: "description",
        content:
          "Crispy, saucy, legendary chicken wings in Rexdale, Etobicoke. 4.8★ on Google · Open until 2 AM · Pickup. Call (416) 742-5959.",
      },
      { name: "author", content: "The Wing Spot Rexdale" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "The Wing Spot Rexdale" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#1a1311" },
      { property: "og:title", content: "The Wing Spot Rexdale — Etobicoke's Best Chicken Wings" },
      { name: "twitter:title", content: "The Wing Spot Rexdale — Etobicoke's Best Chicken Wings" },
      { name: "description", content: "Wing Spot Success is a website designed to increase sales and attract new customers for The Wing Spot - Rexdale." },
      { property: "og:description", content: "Wing Spot Success is a website designed to increase sales and attract new customers for The Wing Spot - Rexdale." },
      { name: "twitter:description", content: "Wing Spot Success is a website designed to increase sales and attract new customers for The Wing Spot - Rexdale." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/21ff453b-f58e-4cd2-b308-859f4e8e0799/id-preview-f89ce3dd--e1a1d225-eaaa-4018-aae4-fed4a3e15f9c.lovable.app-1776900467371.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/21ff453b-f58e-4cd2-b308-859f4e8e0799/id-preview-f89ce3dd--e1a1d225-eaaa-4018-aae4-fed4a3e15f9c.lovable.app-1776900467371.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=Oswald:wght@500;600;700&family=Space+Mono:wght@400;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
