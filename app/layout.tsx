import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const noto = Noto_Sans_JP({ subsets: ["latin"], variable: "--font-noto", display: "swap" });

export const metadata: Metadata = {
  title: "SHOHEI OISHI Portfolio V2 | Video / Design / AI Creative",
  description: "映像・デザイン・広告・AIを横断して制作する大石翔平のポートフォリオ。",
  openGraph: {
    title: "SHOHEI OISHI Portfolio V2 | Video / Design / AI Creative",
    description: "映像・デザイン・広告・AIを横断して制作する大石翔平のポートフォリオ。",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja" className={`${inter.variable} ${noto.variable}`}><body>{children}</body></html>;
}
