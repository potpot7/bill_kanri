import React from 'react';
import './Information.css';

const newsItems = [
  { id: 1, date: '2023.04.06', tag: 'ニュース', title: 'ホームページをリニューアルいたしました！' },
  { id: 2, date: '2023.02.15', tag: 'お知らせ', title: '本社オフィス移転のお知らせ' },
  { id: 3, date: '2022.11.30', tag: '採用', title: '新卒採用情報を更新しました' },
];

const Information = () => {
  return (
    <section id="information" className="section information-section bg-light">
      <div className="section-header">
        <span className="section-subtitle">INFORMATION</span>
        <h2 className="section-title">ニュース</h2>
      </div>

      <div className="news-list fade-in">
        {newsItems.map(item => (
          <a href="#information" key={item.id} className="news-item">
            <div className="news-meta">
              <span className="news-date">{item.date}</span>
              <span className="news-tag">{item.tag}</span>
            </div>
            <h3 className="news-title">{item.title}</h3>
            <span className="news-arrow">→</span>
          </a>
        ))}
      </div>
      
      <div className="text-center mt-40">
        <a href="#information" className="btn">ニュース一覧を見る</a>
      </div>
    </section>
  );
};

export default Information;
