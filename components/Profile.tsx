import Image from "next/image";
import Reveal from "./Reveal";

export default function Profile() {
  return (
    <article id="about" className="info-column profile-panel">
      <Reveal>
        <div className="profile-layout">
          <figure className="profile-photo">
            <Image
              src="/profile/shohei-oishi.webp"
              alt="大石翔平のプロフィール写真"
              fill
              sizes="(max-width: 767px) 92vw, (max-width: 1100px) 30vw, 300px"
              priority={false}
            />
          </figure>
          <div className="profile-content">
            <header className="info-heading"><span>06</span><h2>PROFILE</h2><p>プロフィール</p></header>
            <div className="profile-identity">
              <div><h3>大石 翔平</h3><p>SHOHEI OISHI</p><small>Video Editor / Creative Designer</small></div>
            </div>
            <div className="profile-copy">
              <p>広告動画・プロモーション映像を中心に、動画編集・バナー制作・広告クリエイティブに取り組んでいます。</p>
              <p>広告代理店でMeta広告・Google広告の運用と広告クリエイティブ制作に携わってきました。</p>
              <p>「誰に・何を・どう伝えるか」を考え、ターゲットと広告目的から逆算してクリエイティブを設計することを大切にしています。</p>
              <p>Premiere Proを中心に、Photoshop・Canvaなどを使用し、必要に応じてAfter Effectsや生成AIも活用しています。</p>
            </div>
          </div>
        </div>
      </Reveal>
    </article>
  );
}
