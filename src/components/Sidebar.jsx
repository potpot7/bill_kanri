import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="sidebar-inner">
        <div className="sidebar-logo">
          <a href="#top">
            <div className="logo-icon">B</div>
            <div className="logo-text">
              <span className="logo-main">いどしたビル管理</span>
              <span className="logo-sub">Idoshita Building Management</span>
            </div>
          </a>
        </div>
        
        <ul className="sidebar-menu">
          <li><a href="#top">トップページ</a></li>
          <li><a href="#service">事業内容</a></li>
          <li><a href="#corporate">会社情報</a></li>
          <li><a href="#information">ニュース</a></li>
          <li><a href="#recruit">採用情報</a></li>
        </ul>

        <div className="sidebar-contact">
          <a href="#contact" className="sidebar-contact-btn">お問い合わせ</a>
        </div>
        
        <div className="sidebar-footer">
          <p>© Idoshita Building Management</p>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
