import { useState } from 'react';
import './index.css';

export default function App() {
  const [showQuranLogs, setShowQuranLogs] = useState(false);
  const [showGeneralLogs, setShowGeneralLogs] = useState(false);

  return (
    <div className="page-wrapper">

      {/* Navigation Bar */}
      <header className="navbar">
        <div className="nav-container">
          <a href="#" className="nav-logo">
            <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* App Icon Background */}
              <rect width="100" height="100" rx="24" fill="url(#qala-gradient)" />

              {/* Audio Waveform Bars */}
              <rect x="22" y="38" width="8" height="24" rx="4" fill="white" />
              <rect x="38" y="26" width="8" height="48" rx="4" fill="white" />
              <rect x="54" y="15" width="8" height="70" rx="4" fill="white" />
              <rect x="70" y="32" width="8" height="36" rx="4" fill="white" />

              {/* Gradient Definition */}
              <defs>
                <linearGradient id="qala-gradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#3b82f6" />
                  <stop offset="1" stopColor="#4f46e5" />
                </linearGradient>
              </defs>
            </svg>
            <span>Qala</span>
          </a>
          <nav className="nav-links">
            <a href="#domain-model">Domain-Adapted Model</a>
            <a href="#general-model">General Model</a>
            <a href="mailto:shukredev@gmail.com" className="nav-btn">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container">

        {/* Hero Section */}
        <section className="hero-section">
          <h1 className="hero-title">
            Arabic Speech Recognition
          </h1>
          <p className="hero-subtitle">
            A real-time streaming Fast Conformer-Hybrid ASR architecture. Starting from a shared foundational model, this project features two divergent fine-tunes: a highly constrained domain-adapted model optimized for classical recitation (<strong>2.9% WER</strong>), and a broader model trained for general unconstrained Arabic (<strong>21.71% WER</strong>).
          </p>
        </section>

        {/* ------------------------------------------- */}
        {/* MODEL 1: DOMAIN-ADAPTED (CLASSICAL)         */}
        {/* ------------------------------------------- */}
        <section id="domain-model" style={{ width: '100%', scrollMarginTop: '6rem', marginBottom: '6rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, color: 'white', marginBottom: '1rem' }}>
            Branch 1: Classical Recitation Domain
          </h2>
          <p style={{ color: '#a3a3a3', marginBottom: '2.5rem', maxWidth: '42rem', marginLeft: 'auto', marginRight: 'auto' }}>
            Specialized fine-tuning optimized for complex classical recitation. Trained on over 1,264 hours of constrained acoustic data.
          </p>

          <div className="video-container" style={{ marginBottom: '2.5rem' }}>
            <iframe
              src="https://www.youtube.com/embed/YOUR_YOUTUBE_VIDEO_ID_2"
              title="Domain-Adapted ASR Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
            </iframe>
          </div>

          <div className="metrics-grid">
            <div className="metric-card">
              <h3 className="metric-label">RNN-T Head (WER)</h3>
              <p className="metric-value">2.93%</p>
            </div>
            <div className="metric-card">
              <h3 className="metric-label">CTC Head (WER)</h3>
              <p className="metric-value">7.64%</p>
            </div>
          </div>

          {/* Domain Model Logs Toggle */}
          <div style={{ marginTop: '2rem', width: '100%' }}>
            <button
              onClick={() => setShowQuranLogs(!showQuranLogs)}
              style={{
                backgroundColor: '#171717',
                color: '#a3a3a3',
                border: '1px solid #262626',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                fontSize: '0.875rem',
                fontWeight: 500,
                transition: 'all 0.2s ease',
                width: '100%',
                maxWidth: '42rem'
              }}
              onMouseOver={(e) => e.target.style.color = '#ffffff'}
              onMouseOut={(e) => e.target.style.color = '#a3a3a3'}
            >
              {showQuranLogs ? 'Hide TensorBoard Logs' : 'View TensorBoard Logs'}
            </button>

            {/* Domain Model Logs Stack */}
            {showQuranLogs && (
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                marginTop: '1.5rem',
                maxWidth: '42rem',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}>
                <img src="/converged_classical/train_loss.png" alt="Domain Train Loss" style={{ width: '100%', borderRadius: '0.5rem', border: '1px solid #262626' }} />
                <img src="/converged_classical/train_rnnt_loss.png" alt="Domain Train RNN-T Loss" style={{ width: '100%', borderRadius: '0.5rem', border: '1px solid #262626' }} />
                <img src="/converged_classical/train_ctc_loss.png" alt="Domain Train CTC Loss" style={{ width: '100%', borderRadius: '0.5rem', border: '1px solid #262626' }} />
                <img src="/converged_classical/val_wer.png" alt="Domain Validation WER" style={{ width: '100%', borderRadius: '0.5rem', border: '1px solid #262626' }} />
                <img src="/converged_classical/val_wer_ctc.png" alt="Domain Validation WER CTC" style={{ width: '100%', borderRadius: '0.5rem', border: '1px solid #262626' }} />
                <img src="/converged_classical/learning_rate.png" alt="Domain Learning Rate" style={{ width: '100%', borderRadius: '0.5rem', border: '1px solid #262626' }} />
              </div>
            )}
          </div>
        </section>

        {/* Divider */}
        <hr style={{ width: '100%', borderColor: '#262626', marginBottom: '6rem' }} />

        {/* ------------------------------------------- */}
        {/* MODEL 2: GENERAL ARABIC                     */}
        {/* ------------------------------------------- */}
        <section id="general-model" style={{ width: '100%', scrollMarginTop: '6rem', marginBottom: '6rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, color: 'white', marginBottom: '1rem' }}>
            Branch 2: General Acoustic Domain
          </h2>
          <p style={{ color: '#a3a3a3', marginBottom: '2.5rem', maxWidth: '42rem', marginLeft: 'auto', marginRight: 'auto' }}>
            Trained on a curated 572-hour corpus for unconstrained speech transcription.
          </p>

          <div className="video-container" style={{ marginBottom: '2.5rem' }}>
            <iframe
              src="https://www.youtube.com/embed/YOUR_YOUTUBE_VIDEO_ID_1"
              title="General Arabic ASR Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
            </iframe>
          </div>

          <div className="metrics-grid">
            <div className="metric-card">
              <h3 className="metric-label">Undiacritized CER</h3>
              <p className="metric-value">6.91%</p>
            </div>
            <div className="metric-card">
              <h3 className="metric-label">Word Error Rate (WER)</h3>
              <p className="metric-value">21.71%</p>
            </div>
          </div>

          {/* General Model Logs Toggle */}
          <div style={{ marginTop: '2rem', width: '100%' }}>
            <button
              onClick={() => setShowGeneralLogs(!showGeneralLogs)}
              style={{
                backgroundColor: '#171717',
                color: '#a3a3a3',
                border: '1px solid #262626',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                fontSize: '0.875rem',
                fontWeight: 500,
                transition: 'all 0.2s ease',
                width: '100%',
                maxWidth: '42rem'
              }}
              onMouseOver={(e) => e.target.style.color = '#ffffff'}
              onMouseOut={(e) => e.target.style.color = '#a3a3a3'}
            >
              {showGeneralLogs ? 'Hide TensorBoard Logs' : 'View TensorBoard Logs'}
            </button>

            {/* General Model Logs Stack */}
            {showGeneralLogs && (
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                marginTop: '1.5rem',
                maxWidth: '42rem',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}>
                <img src="/converged_general_arabic/train_loss.png" alt="General Train Loss" style={{ width: '100%', borderRadius: '0.5rem', border: '1px solid #262626' }} />
                <img src="/converged_general_arabic/train_rnnt_loss.png" alt="General Train RNN-T Loss" style={{ width: '100%', borderRadius: '0.5rem', border: '1px solid #262626' }} />
                <img src="/converged_general_arabic/train_ctc_loss.png" alt="General Train CTC Loss" style={{ width: '100%', borderRadius: '0.5rem', border: '1px solid #262626' }} />
                <img src="/converged_general_arabic/val_wer.png" alt="General Validation WER" style={{ width: '100%', borderRadius: '0.5rem', border: '1px solid #262626' }} />
                <img src="/converged_general_arabic/val_wer_ctc.png" alt="General Validation WER CTC" style={{ width: '100%', borderRadius: '0.5rem', border: '1px solid #262626' }} />
                <img src="/converged_general_arabic/learning_rate.png" alt="General Learning Rate" style={{ width: '100%', borderRadius: '0.5rem', border: '1px solid #262626' }} />
                <img src="/converged_general_arabic/nemo_test.png" alt="NeMo Evaluation Output" style={{ width: '100%', borderRadius: '0.5rem', border: '1px solid #262626' }} />
              </div>
            )}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <p>&copy; {new Date().getFullYear()} Qala Project. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Contact Developer</a>
          </div>
        </div>
      </footer>

    </div>
  );
}