import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "@/styles/globals.css";
import { cn } from "@/lib/classes";
import { fontVariables } from "@/lib/fonts";
import Footer from "components/footer";
import { FadeWrapper } from "components/fade-wrapper";
import { Header } from "@/core/components/header";

const DOMAIN = process.env.NEXT_PUBLIC_APP_URL || "https://muskri.com";

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),
  title: {
    default: "Krishna",
    template: "%s",
  },
  description:
    "Passionate frontend engineer dedicated to creating beautiful and functional web applications.",
  keywords: [
    "frontend engineer",
    "krishna",
    "react",
    "typescript",
    "motion animation",
    "tailwind css",
    "next.js",
    "portfolio",
    "web development",
  ],
  authors: [{ name: "Krishna", url: DOMAIN }],
  creator: "Krishna",
  publisher: "Krishna",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: DOMAIN,
    title: "Krishna",
    description:
      "Passionate frontend engineer dedicated to creating beautiful and functional web applications.",
    siteName: "Krishna | Frontend Engineer",
    images: [
      {
        url: `${DOMAIN}/images/og.png`,
        width: 1200,
        height: 630,
        alt: "Krishna",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Krishna",
    description:
      "Passionate frontend engineer dedicated to creating beautiful and functional web applications.",
    images: [`${DOMAIN}/images/og.png`],
    creator: "@_MusKRii",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: `${DOMAIN}/apple-touch-icon.png`,
      },
    ],
  },
  manifest: "/site.webmanifest",
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          fontVariables,
          "antialiased font-sans scroll-pt-20 scroll-smooth text-pretty"
        )}
      >
        <Header />
        {/* <FadeWrapper> */}
        <div className="relative h-full flex min-h-dvh flex-col bg-pattern">
          <main className="flex grow container px-4 mx-auto justify-center py-8 sm:py-12">
            {children}
          </main>
        </div>
        {/* </FadeWrapper> */}
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
