"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  ["WORKS", "#works"], ["PROFILE", "#profile"], ["TOOLS", "#tools-skills"],
];

export default function Header() {
  const pathname = usePathname();
  const sectionHref = (hash: string) => pathname === "/" ? hash : `/${hash}`;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""} ${open ? "site-header--open" : ""}`}>
      <div className="site-container header-inner">
        <Link className="wordmark" href={sectionHref("#top")} onClick={() => setOpen(false)}>SHOHEI OISHI</Link>
        <button className="menu-button" type="button" aria-label="メニューを開閉" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span />
        </button>
        <nav className="desktop-nav" aria-label="メインナビゲーション">
          {nav.map(([label, href]) => <Link key={label} href={sectionHref(href)}>{label}</Link>)}
        </nav>
      </div>
      <nav className="mobile-nav" aria-label="モバイルナビゲーション">
        {nav.map(([label, href], index) => (
          <Link key={label} href={sectionHref(href)} onClick={() => setOpen(false)}><span>0{index + 1}</span>{label}</Link>
        ))}
      </nav>
    </header>
  );
}
