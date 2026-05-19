import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">B</div>
              <div>
                <p className="footer-company-name">いどしたビル管理</p>
                <p className="footer-company-sub">Idoshita Building Management Co., Ltd.</p>
              </div>
            </div>
            <p className="footer-tagline">
              快適な社会環境を創造し、<br />実現するエキスパート集団です。
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <h4>サービス</h4>
              <ul>
                <li><a href="#service">ビルメンテナンスサービス</a></li>
                <li><a href="#service">実験動物施設総合支援</a></li>
                <li><a href="#service">管理区域内（RI施設）サービス</a></li>
                <li><a href="#service">人材派遣サービス</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>企業情報</h4>
              <ul>
                <li><a href="#corporate">会社概要</a></li>
                <li><a href="#information">ニュース</a></li>
                <li><a href="#recruit">採用情報</a></li>
                <li><a href="#contact">お問い合わせ</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>お問い合わせ</h4>
              <p className="footer-tel">06-1234-5678</p>
              <p className="footer-hours">平日 9:00 〜 17:00</p>
              <a href="#contact" className="footer-contact-btn">お問い合わせフォーム</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 株式会社いどしたビル管理 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
