import React from 'react';
import './Hero.css';
import gifBg from '../../movie/eki_hayaokuri.gif';

const Hero = () => {
  return (
    <section id="top" className="hero-section">
      <div className="hero-background">
        <img src={gifBg} alt="" className="hero-gif" />
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content fade-in">
        <p className="hero-eyecatch">BUILDING MANAGEMENT</p>
        <h1 className="hero-title">
          快適な社会環境を創造し、<br />
          実現するエキスパート集団です。
        </h1>
        <p className="hero-subtitle">
          人・技術の育成こそ、絶えず変化するお客様のニーズにお応えする<br />
          最重要のサービスと考えています。
        </p>
        <div className="hero-buttons">
          <a href="#service" className="hero-btn hero-btn-primary">事業内容を見る</a>
          <a href="#contact" className="hero-btn hero-btn-outline">お問い合わせ</a>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <span>SCROLL</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;
