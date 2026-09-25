import Link from "next/link";

const nav = [["WORKS", "#works"], ["ABOUT", "#about"], ["STRENGTHS", "#strengths"], ["TOOLS", "#tools"]];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="site-container footer-inner">
        <div><Link href="#top" className="wordmark">SHOHEI OISHI</Link><p>© {new Date().getFullYear()} SHOHEI OISHI</p></div>
        <nav aria-label="フッターナビゲーション">{nav.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}</nav>
        <Link href="#top" className="back-top" aria-label="ページトップへ戻る">↑</Link>
      </div>
    </footer>
  );
}
