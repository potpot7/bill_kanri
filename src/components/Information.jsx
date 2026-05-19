import React, { useState, useEffect } from 'react';
import './Information.css';

const Information = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedNews, setSelectedNews] = useState(null); // モーダル用のステート

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_MICROCMS_ENDPOINT, {
          headers: {
            'X-MICROCMS-API-KEY': import.meta.env.VITE_MICROCMS_API_KEY
          }
        });

        if (!response.ok) {
          throw new Error('APIの取得に失敗しました');
        }

        const data = await response.json();
        setNewsItems(data.contents);
      } catch (err) {
        console.error('microCMSの取得エラー:', err);
        setError('お知らせの読み込みに失敗しました');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const openModal = (e, item) => {
    e.preventDefault(); // ページ遷移を防ぐ
    setSelectedNews(item);
    document.body.style.overflow = 'hidden'; // 背面のスクロールを無効化
  };

  const closeModal = () => {
    setSelectedNews(null);
    document.body.style.overflow = 'unset'; // スクロール無効化を解除
  };

  return (
    <section id="information" className="section information-section bg-light">
      <div className="section-header">
        <span className="section-subtitle">INFORMATION</span>
        <h2 className="section-title">ニュース</h2>
      </div>

      <div className="news-list fade-in">
        {loading ? (
          <p style={{ textAlign: 'center', padding: '20px' }}>読み込み中...</p>
        ) : error ? (
          <p style={{ textAlign: 'center', color: 'red', padding: '20px' }}>{error}</p>
        ) : (
          newsItems.map(item => (
            <a 
              href="#information" 
              key={item.id} 
              className="news-item" 
              onClick={(e) => openModal(e, item)}
              style={{ cursor: 'pointer' }}
            >
              <div className="news-meta">
                <span className="news-date">
                  {item.publishedAt ? new Date(item.publishedAt).toLocaleDateString('ja-JP').replace(/\//g, '.') : ''}
                </span>
                <span className="news-tag">お知らせ</span>
              </div>
              
              <h3 className="news-title">{item.title}</h3>
              <span className="news-arrow">→</span>
            </a>
          ))
        )}
      </div>

      {/* 詳細表示用のモーダル */}
      {selectedNews && (
        <div 
          className="news-modal-overlay" 
          onClick={closeModal}
          style={{
            position: 'fixed',
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.6)',
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            zIndex: 9999,
            padding: '20px'
          }}
        >
          <div 
            className="news-modal-content" 
            onClick={(e) => e.stopPropagation()} // オーバーレイクリックで閉じるのを防ぐ
            style={{
              backgroundColor: '#fff',
              padding: '30px',
              borderRadius: '8px',
              maxWidth: '800px',
              width: '100%',
              maxHeight: '85vh',
              overflowY: 'auto',
              position: 'relative'
            }}
          >
            <button 
              onClick={closeModal}
              style={{
                position: 'absolute', 
                top: '15px', 
                right: '15px',
                background: 'none', 
                border: 'none', 
                fontSize: '1.5rem', 
                cursor: 'pointer',
                color: '#333'
              }}
              aria-label="閉じる"
            >
              ✖
            </button>

            <div className="news-meta" style={{ marginBottom: '15px' }}>
              <span className="news-date">
                {selectedNews.publishedAt ? new Date(selectedNews.publishedAt).toLocaleDateString('ja-JP').replace(/\//g, '.') : ''}
              </span>
              <span className="news-tag">お知らせ</span>
            </div>

            <h2 style={{ marginBottom: '20px', fontSize: '1.5rem', borderBottom: '1px solid #eee', paddingBottom: '15px' }}>
              {selectedNews.title}
            </h2>
            
            {/* 画像がある場合 */}
            {selectedNews.image && (
              <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                <img 
                  src={selectedNews.image.url} 
                  alt={selectedNews.title} 
                  style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'contain', borderRadius: '4px' }} 
                />
              </div>
            )}
            
            {/* 本文 */}
            {selectedNews.content && (
              <div 
                className="news-content-detail" 
                dangerouslySetInnerHTML={{ __html: selectedNews.content }}
                style={{ fontSize: '1rem', color: '#444', lineHeight: '1.8' }}
              />
            )}
          </div>
        </div>
      )}
      
      <div className="text-center mt-40">
        <a href="#information" className="btn">ニュース一覧を見る</a>
      </div>
    </section>
  );
};

export default Information;
