import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "@/styles/globals.css";
import { cn } from "@/lib/classes";
import { fontVariables } from "@/lib/fonts";
import Footer from "components/footer";
import { FadeWrapper } from "@/core/components/fade-wrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Krishna",
  description: "Krishna's Portfolio",
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
        <FadeWrapper>
          <main className="flex grow container px-4 mx-auto justify-center py-8 sm:py-12 mt-20">
            {children}
          </main>
        </FadeWrapper>
        <Footer />
      </body>
    </html>
  );
}
