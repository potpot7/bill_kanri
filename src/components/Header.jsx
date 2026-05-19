import React, { useState, useEffect } from 'react';
import './Header.css';

const navItems = [
  { href: '#top', label: 'ホーム' },
  { href: '#service', label: '事業内容' },
  { href: '#corporate', label: '会社情報' },
  { href: '#information', label: 'ニュース' },
  { href: '#recruit', label: '採用情報' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-inner">
        <div className="header-logo">
          <a href="#top">
            <div className="logo-icon">B</div>
            <div className="logo-text">
              <span className="logo-main">いどしたビル管理</span>
              <span className="logo-sub">Idoshita Building Management</span>
            </div>
          </a>
        </div>

        <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
          <ul>
            {navItems.map(item => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="header-contact-btn" onClick={() => setMenuOpen(false)}>
            お問い合わせ
          </a>
        </nav>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニューを開く"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
