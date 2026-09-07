import { useEffect, useRef, useState } from "react";

import type { Reel } from "@/lib/media";
import { cn } from "@/lib/utils";

/** Muted, looping vertical reel that only loads and plays while in view. */
export function ReelPlayer({ reel, className }: { reel: Reel; className?: string }) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setActive(true);
            void el.play().catch(() => undefined);
          } else {
            el.pause();
          }
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      poster={reel.poster}
      src={active ? reel.src : undefined}
      muted
      loop
      playsInline
      preload="none"
      controls
      aria-label={reel.label}
      className={cn(
        "aspect-9/16 w-full rounded-2xl border border-border/60 object-cover transition-transform duration-500 hover:scale-[1.02]",
        className,
      )}
    />
  );
}
