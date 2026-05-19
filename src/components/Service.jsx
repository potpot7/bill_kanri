import React from 'react';
import './Service.css';
import img1 from '../../image/joushi_to_buka.webp';
import img2 from '../../image/neko_syokuji.webp';
import img3 from '../../image/purezen.webp';
import img4 from '../../image/fight.webp';

const services = [
  {
    id: '01',
    title: 'ビルメンテナンスサービス',
    description: '施設の清掃・設備(運転・点検・保守管理)・警備、さらには緑化と施設運営のあらゆる管理を担い、ベストな環境をご提案いたします。',
    image: img1,
  },
  {
    id: '02',
    title: '実験動物施設総合支援サービス',
    description: '研究施設など専門的な作業空間の管理にも、私たちの経験が活かされています。',
    image: img2,
  },
  {
    id: '03',
    title: '管理区域内（RI施設）サービス',
    description: 'いどしたビル管理では、管理区域内業務や、薬剤製造支援業務など専門性の高い業務をご提供しております。',
    image: img3,
  },
  {
    id: '04',
    title: '人材派遣サービス',
    description: '多くのお客様に満足して頂けるように様々な人材を提案し、現場の発展に貢献いたします。',
    image: img4,
  }
];

const Service = () => {
  return (
    <section id="service" className="section service-section bg-light">
      <div className="section-header">
        <span className="section-subtitle">SERVICE</span>
        <h2 className="section-title">事業内容</h2>
      </div>
      
      <div className="service-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card fade-in">
            <div className="service-image-container">
              <img src={service.image} alt={service.title} className="service-image" />
              <div className="service-number">{service.id}</div>
            </div>
            <div className="service-content">
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-text">{service.description}</p>
              <a href="#service" className="service-link">詳しく見る <span className="arrow">→</span></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
