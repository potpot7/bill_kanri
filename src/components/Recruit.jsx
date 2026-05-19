import React from 'react';
import './Recruit.css';

const Recruit = () => {
  return (
    <section id="recruit" className="section recruit-section">
      <div className="recruit-container fade-in">
        <div className="recruit-content">
          <span className="section-subtitle">RECRUIT</span>
          <h2 className="section-title">採用情報</h2>
          <p className="recruit-text">
            いどしたビル管理では、一緒に働く仲間を募集しています。<br />
            一人ひとりが成長を感じながら働くことができる環境で<br />
            あなたも活躍してみませんか。<br />
            ご応募お待ちしております。
          </p>
          <a href="#recruit" className="btn btn-outline">詳しく見る</a>
        </div>
      </div>
    </section>
  );
};

export default Recruit;
