import { Barlow, Noto_Sans_Mono, Inter } from "next/font/google";
import { cn } from "./classes";

const fontBarlow = Barlow({
  subsets: ["latin"],
  variable: "--font-barlow",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const fontInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const fontNotoMono = Noto_Sans_Mono({
  subsets: ["latin"],
  variable: "--font-noto-mono",
});

export const fontVariables = cn(
  fontBarlow.variable,
  fontNotoMono.variable,
  fontInter.variable
);
