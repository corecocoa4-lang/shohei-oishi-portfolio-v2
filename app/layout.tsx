import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const noto = Noto_Sans_JP({ subsets: ["latin"], variable: "--font-noto", display: "swap" });

export const metadata: Metadata = {
  title: "SHOHEI OISHI | Video Editor / Creative Designer",
  description: "広告・マーケティング視点を持つ動画編集者、大石翔平の就職・転職活動用ポートフォリオ。",
  openGraph: {
    title: "SHOHEI OISHI | Video Editor / Creative Designer",
    description: "映像で、伝える力を最大化する。動画編集・広告クリエイティブ・マーケティングのポートフォリオ。",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja" className={`${inter.variable} ${noto.variable}`}><body>{children}</body></html>;
}
