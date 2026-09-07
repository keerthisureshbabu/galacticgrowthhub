import berlinReel1 from "@/assets/berlin-reel-1.mp4.asset.json";
import berlinReel1Poster from "@/assets/berlin-reel-1-poster.jpg.asset.json";
import berlinReel2 from "@/assets/berlin-reel-2.mp4.asset.json";
import berlinReel2Poster from "@/assets/berlin-reel-2-poster.jpg.asset.json";
import berlinReel3 from "@/assets/berlin-reel-3.mp4.asset.json";
import berlinReel3Poster from "@/assets/berlin-reel-3-poster.jpg.asset.json";
import berlinReel4 from "@/assets/berlin-reel-4.mp4.asset.json";
import berlinReel4Poster from "@/assets/berlin-reel-4-poster.jpg.asset.json";
import founder from "@/assets/founder-sanjay.jpg.asset.json";
import logoBerlin from "@/assets/logo-berlin.jpg.asset.json";
import logoEyalMuzik from "@/assets/logo-eyalmuzik.jpg.asset.json";
import logoGrm from "@/assets/logo-grm.jpg.asset.json";

export const founderPhoto = founder.url;

export const clientLogos: Record<string, string> = {
  "grm-maternity-store": logoGrm.url,
  "eyal-muzik": logoEyalMuzik.url,
  "berlin-mens-clothing": logoBerlin.url,
};

export type Reel = { src: string; poster: string; label: string };

export const berlinReels: Reel[] = [
  { src: berlinReel1.url, poster: berlinReel1Poster.url, label: "Berlin Men's Clothing shirt reel" },
  { src: berlinReel2.url, poster: berlinReel2Poster.url, label: "Berlin Men's Clothing store reel" },
  {
    src: berlinReel3.url,
    poster: berlinReel3Poster.url,
    label: "Berlin Men's Clothing linen pant and shirt reel",
  },
  { src: berlinReel4.url, poster: berlinReel4Poster.url, label: "Berlin Men's Clothing shirt collection reel" },
];
