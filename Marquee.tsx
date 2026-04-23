interface MarqueeProps {
  items: string[];
  variant?: "sauce" | "mustard" | "bone";
}

export function Marquee({ items, variant = "sauce" }: MarqueeProps) {
  const styles = {
    sauce: "bg-sauce text-paper border-y-[3px] border-ink",
    mustard: "bg-mustard text-ink border-y-[3px] border-ink",
    bone: "bg-bone text-ink border-y-[3px] border-ink",
  };

  // Duplicate for seamless loop
  const doubled = [...items, ...items];

  return (
    <div className={`relative w-full overflow-hidden py-4 ${styles[variant]}`}>
      <div className="flex animate-marquee whitespace-nowrap font-display text-2xl uppercase tracking-wider sm:text-3xl">
        {doubled.map((item, i) => (
          <span key={i} className="mx-6 flex items-center gap-6">
            <span>{item}</span>
            <span className="size-2 rounded-full bg-current opacity-40" />
          </span>
        ))}
      </div>
    </div>
  );
}
