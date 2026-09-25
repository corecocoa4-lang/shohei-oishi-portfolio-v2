import Link from "next/link";

export default function NotFound() {
  return <main className="not-found"><p className="eyebrow">404 / NOT FOUND</p><h1>作品が見つかりません</h1><Link className="button" href="/">トップページへ戻る</Link></main>;
}
