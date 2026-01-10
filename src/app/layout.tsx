import type { Metadata } from "next";
import { Karla, Lora, Lexend, Inter_Tight, Birthstone} from "next/font/google";
import { Analytics } from "@vercel/analytics/next"; 

import "../lib/fontawesome";

const karla = Karla({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-karla",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
});

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-lexend",
});

const intertight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-intertight",
})

const birthstone = Birthstone({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-birthstone",
})

export const metadata: Metadata = {
  title: "Recede Portfolio WebApp",
  description:
    "I work across coding, drawing, game development, and digital arts...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${karla.variable} ${lora.variable}  ${birthstone.variable} ${lexend.variable}  ${intertight.variable} antialiased`}
                                                                    >
                                                                     
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
