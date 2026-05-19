import React from 'react';
import './Corporate.css';
import bgImage from '../../image/machi.webp';

const Corporate = () => {
  return (
    <section id="corporate" className="section corporate-section" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="corporate-overlay"></div>
      <div className="corporate-container">
        <div className="section-header">
          <span className="section-subtitle">CORPORATE</span>
          <h2 className="section-title">会社情報</h2>
        </div>

        <div className="corporate-content">
          <div className="corporate-info fade-in">
            <table className="corporate-table">
              <tbody>
                <tr>
                  <th>会社名</th>
                  <td>株式会社いどしたビル管理</td>
                </tr>
                <tr>
                  <th>所在地</th>
                  <td>〒530-0044<br />大阪府大阪市北区東天満1-9-10 (ダミー住所)</td>
                </tr>
                <tr>
                  <th>連絡先</th>
                  <td>TEL: 06-1234-5678<br />FAX: 06-1234-5679</td>
                </tr>
                <tr>
                  <th>設立</th>
                  <td>1980年4月</td>
                </tr>
                <tr>
                  <th>代表者</th>
                  <td>代表取締役 井戸下 こうし</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="corporate-features fade-in">
            <h3>いどしたビル管理の3C</h3>
            <ul className="feature-list">
              <li>
                <strong>Clean</strong>
                <p>清潔で快適な環境を提供します。</p>
              </li>
              <li>
                <strong>Creative</strong>
                <p>新しい発想で施設の価値を創造します。</p>
              </li>
              <li>
                <strong>Care</strong>
                <p>人や環境に配慮した丁寧な管理を行います。</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Corporate;
