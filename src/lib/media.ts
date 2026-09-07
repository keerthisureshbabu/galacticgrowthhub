import berlinReel1 from "@/assets/berlin-reel-1.mp4";
import berlinReel1Poster from "@/assets/berlin-reel-1-poster.jpg";
import berlinReel2 from "@/assets/berlin-reel-2.mp4";
import berlinReel2Poster from "@/assets/berlin-reel-2-poster.jpg";
import berlinReel3 from "@/assets/berlin-reel-3.mp4";
import berlinReel3Poster from "@/assets/berlin-reel-3-poster.jpg";
import berlinReel4 from "@/assets/berlin-reel-4.mp4";
import berlinReel4Poster from "@/assets/berlin-reel-4-poster.jpg";
import founder from "@/assets/founder-sanjay.jpg";
import logoBerlin from "@/assets/logo-berlin.jpg";
import logoEyalMuzik from "@/assets/logo-eyalmuzik.jpg";
import logoGrm from "@/assets/logo-grm.jpg";
import siteBerlin from "@/assets/site-berlin.jpg";
import siteEyalMuzik from "@/assets/site-eyalmuzik.jpg";
import siteGrm from "@/assets/site-grm.jpg";

export const founderPhoto = founder;

export const clientLogos: Record<string, string> = {
  "grm-maternity-store": logoGrm,
  "eyal-muzik": logoEyalMuzik,
  "berlin-mens-clothing": logoBerlin,
};

export type Reel = { src: string; poster: string; label: string };

export const berlinReels: Reel[] = [
  { src: berlinReel1, poster: berlinReel1Poster, label: "Berlin Men's Clothing shirt reel" },
  { src: berlinReel2, poster: berlinReel2Poster, label: "Berlin Men's Clothing store reel" },
  {
    src: berlinReel3,
    poster: berlinReel3Poster,
    label: "Berlin Men's Clothing linen pant and shirt reel",
  },
  { src: berlinReel4, poster: berlinReel4Poster, label: "Berlin Men's Clothing shirt collection reel" },
];

/** Real client website front pages, keyed by project slug. */
export const projectImages: Record<string, string> = {
  "grm-maternity-store": siteGrm,
  "eyal-muzik": siteEyalMuzik,
  "berlin-mens-clothing": siteBerlin,
};
