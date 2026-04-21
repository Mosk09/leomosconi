import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Leo Mosconi · Lifestyle Creator",
  description:
    "Creador de contenido lifestyle y moda desde Argentina. Colaboraciones con marcas — contacto: leomosconi9@gmail.com",
  openGraph: {
    title: "Leo Mosconi · Lifestyle Creator",
    description:
      "54K+ views · +1,224% crecimiento · Reels, Stories y Posts para marcas en Argentina y LATAM.",
    url: "https://porfoliolmosconi.vercel.app",
    siteName: "Leo Mosconi",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leo Mosconi · Lifestyle Creator",
    description: "54K+ views · +1,224% crecimiento · Colaboraciones con marcas.",
  },
  metadataBase: new URL("https://porfoliolmosconi.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${dmSans.variable} ${dmSerifDisplay.variable}`}
    >
      <body
        style={{
          fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
          backgroundColor: "var(--bg)",
          color: "var(--text)",
          minHeight: "100vh",
        }}
      >
        {children}
      </body>
    </html>
  );
}
