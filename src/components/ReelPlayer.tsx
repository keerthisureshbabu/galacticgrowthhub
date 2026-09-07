import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import type { Reel } from "@/lib/media";
import { cn } from "@/lib/utils";

/**
 * Vertical reel that lazy-loads and autoplays muted while in view.
 * Audio stays available: the unmute button drives the real <video> element.
 */
export function ReelPlayer({ reel, className }: { reel: Reel; className?: string }) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [active, setActive] = useState(false);
  const [muted, setMuted] = useState(true);

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

  const toggleSound = () => {
    const el = ref.current;
    if (!el) return;
    const next = !muted;
    el.muted = next;
    el.volume = 1;
    setMuted(next);
    if (!next) void el.play().catch(() => undefined);
  };

  return (
    <div className={cn("relative w-full overflow-hidden rounded-2xl border border-border/60", className)}>
      <video
        ref={ref}
        poster={reel.poster}
        src={active ? reel.src : undefined}
        muted={muted}
        loop
        playsInline
        preload="none"
        controls
        controlsList="nodownload"
        aria-label={reel.label}
        className="block aspect-9/16 h-auto w-full object-contain bg-black"
      />
      <button
        type="button"
        onClick={toggleSound}
        aria-pressed={!muted}
        aria-label={muted ? "Unmute video" : "Mute video"}
        className="glass absolute right-3 top-3 z-10 grid size-10 place-items-center rounded-full text-foreground transition-transform duration-300 hover:scale-110"
      >
        {muted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
      </button>
    </div>
  );
}
