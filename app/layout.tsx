import type { Metadata, Viewport } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "NO BATIDÃO — Esports collective dari Malang",
  description:
    "Dua belas orang, satu grup chat, nol jam tidur. Kenalan sama orang-orang di balik NO BATIDÃO.",
  openGraph: {
    title: "NO BATIDÃO",
    description: "Dua belas orang. Satu grup chat. Nol jam tidur.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
