import Link from "next/link";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="site-container">
        <Reveal>
          <div className="contact-box">
            <div><p className="eyebrow">09 / CONTACT</p><h2>Thank you for viewing<br />my portfolio.</h2></div>
            <div className="contact-copy"><p>ポートフォリオをご覧いただきありがとうございます。</p><p>映像制作・動画編集・クリエイティブ制作に関する採用について、ご連絡いただけますと幸いです。</p></div>
            {/* TODO: 公開前に実際の連絡先メールアドレスへ差し替えてください。 */}
            <Link className="button button--contact" href="mailto:contact@example.com">CONTACT <span>↗</span></Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
