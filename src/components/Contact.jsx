import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="section-header">
        <span className="section-subtitle">CONTACT</span>
        <h2 className="section-title">お問い合わせ</h2>
      </div>

      <div className="contact-methods fade-in">
        <div className="contact-card">
          <div className="contact-icon">✉️</div>
          <h3>フォームからお問い合わせする</h3>
          <p>24時間受付しております。</p>
          <a href="#contact" className="btn">お問い合わせフォーム</a>
        </div>
        
        <div className="contact-card">
          <div className="contact-icon">📞</div>
          <h3>お電話からお問い合わせする</h3>
          <p className="contact-tel">06-1234-5678</p>
          <p className="contact-hours">営業時間　平日 9:00 ～ 17:00</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
