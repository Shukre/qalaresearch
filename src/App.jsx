import { useState } from 'react';
import './index.css';

export default function App() {
  const [showQuranLogs, setShowQuranLogs] = useState(false);
  const [showGeneralLogs, setShowGeneralLogs] = useState(false);

  return (
    <div className="page-wrapper">

      {/* Navigation Bar */}
      <header className="navbar">
        <a href="#" className="nav-logo">
          <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="100" rx="24" fill="url(#qala-gradient)" />
            <rect x="22" y="38" width="8" height="24" rx="4" fill="white" />
            <rect x="38" y="26" width="8" height="48" rx="4" fill="white" />
            <rect x="54" y="15" width="8" height="70" rx="4" fill="white" />
            <rect x="70" y="32" width="8" height="36" rx="4" fill="white" />
            <defs>
              <linearGradient id="qala-gradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                <stop stop-color="#3b82f6" />
                <stop offset="1" stop-color="#4f46e5" />
              </linearGradient>
            </defs>
          </svg>
          <span>Qala</span>
        </a>
        <nav className="nav-links">
          <a href="#domain-model" className="nav-item">Classical</a>
          <a href="#general-model" className="nav-item">General Arabic</a>
          <a href="mailto:shukredev@gmail.com" className="nav-btn">
            Contact
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container">

        {/* Hero Section */}
        <section className="hero-section">
          <div className="badge">
            <div className="badge-pulse"></div>
            Active Research
          </div>
          <h1 className="hero-title">
            The Next Generation of<br />Arabic Speech Recognition.
          </h1>
          <p className="hero-subtitle">
            A real-time streaming Fast Conformer-Hybrid ASR architecture. Starting from a shared foundational model, this project features two divergent fine-tunes: a highly constrained domain-adapted model optimized for classical recitation (<strong>2.9% WER</strong>), and a broader model trained for general Arabic (<strong>21.71% WER</strong>).
          </p>
        </section>

        {/* Elegant Vertical Divider */}
        <div className="section-divider"></div>

        {/* ------------------------------------------- */}
        {/* MODEL 1: DOMAIN-ADAPTED (CLASSICAL)         */}
        {/* ------------------------------------------- */}
        <section id="domain-model" style={{ width: '100%', scrollMarginTop: '8rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: 'white', marginBottom: '1rem', letterSpacing: '-0.025em' }}>
            Branch 1: Classical Recitation
          </h2>
          <p style={{ color: '#a3a3a3', marginBottom: '3rem', maxWidth: '42rem', marginLeft: 'auto', marginRight: 'auto', fontSize: '1.125rem' }}>
            Specialized fine-tuning optimized for complex classical recitation. Trained on over 1,264 hours of data.
          </p>

          <div className="video-container">
            <video
              controls
              playsInline
              style={{ width: '100%', height: '100%', outline: 'none', objectFit: 'cover' }}
            >
              {/* Uses .mp4 if available, otherwise falls back to your .mov file */}
              <source src="/quran_test.mp4" type="video/mp4" />
              <source src="/quran_test.mov" type="video/quicktime" />
              Your browser does not support the video tag.
            </video>
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

          <div style={{ marginTop: '3rem', width: '100%' }}>
            <button
              onClick={() => setShowQuranLogs(!showQuranLogs)}
              className="logs-toggle-btn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="4 17 10 11 4 5"></polyline>
                <line x1="12" y1="19" x2="20" y2="19"></line>
              </svg>
              {showQuranLogs ? 'Hide TensorBoard Logs' : 'View TensorBoard Logs'}
            </button>

            {showQuranLogs && (
              <div className="logs-grid">
                <img src="/converged_classical/train_loss.png" alt="Domain Train Loss" />
                <img src="/converged_classical/train_rnnt_loss.png" alt="Domain Train RNN-T Loss" />
                <img src="/converged_classical/train_ctc_loss.png" alt="Domain Train CTC Loss" />
                <img src="/converged_classical/val_wer.png" alt="Domain Validation WER" />
                <img src="/converged_classical/val_wer_ctc.png" alt="Domain Validation WER CTC" />
                <img src="/converged_classical/learning_rate.png" alt="Domain Learning Rate" />
              </div>
            )}
          </div>
        </section>

        {/* Elegant Vertical Divider */}
        <div className="section-divider"></div>

        {/* ------------------------------------------- */}
        {/* MODEL 2: GENERAL ARABIC                     */}
        {/* ------------------------------------------- */}
        <section id="general-model" style={{ width: '100%', scrollMarginTop: '8rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: 'white', marginBottom: '1rem', letterSpacing: '-0.025em' }}>
            Branch 2: General Acoustic Domain
          </h2>
          <p style={{ color: '#a3a3a3', marginBottom: '3rem', maxWidth: '42rem', marginLeft: 'auto', marginRight: 'auto', fontSize: '1.125rem' }}>
            Trained on a curated 572-hour corpus for general arabic speech transcription.
          </p>

          <div className="video-container">
            <video
              controls
              playsInline
              style={{ width: '100%', height: '100%', outline: 'none', objectFit: 'cover' }}
            >
              {/* Uses .mp4 if available, otherwise falls back to your .mov file */}
              <source src="/general_arabic_model_test.mp4" type="video/mp4" />
              <source src="/general_arabic_model_test.mov" type="video/quicktime" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="metrics-grid">
            <div className="metric-card">
              <h3 className="metric-label">Undiacritized CER</h3>
              <p className="metric-value">6.91%</p>
            </div>
            <div className="metric-card">
              <h3 className="metric-label">Word Error (WER)</h3>
              <p className="metric-value">21.71%</p>
            </div>
          </div>

          <div style={{ marginTop: '3rem', width: '100%' }}>
            <button
              onClick={() => setShowGeneralLogs(!showGeneralLogs)}
              className="logs-toggle-btn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="4 17 10 11 4 5"></polyline>
                <line x1="12" y1="19" x2="20" y2="19"></line>
              </svg>
              {showGeneralLogs ? 'Hide TensorBoard Logs' : 'View TensorBoard Logs'}
            </button>

            {showGeneralLogs && (
              <div className="logs-grid">
                <img src="/converged_general_arabic/train_loss.png" alt="General Train Loss" />
                <img src="/converged_general_arabic/train_rnnt_loss.png" alt="General Train RNN-T Loss" />
                <img src="/converged_general_arabic/train_ctc_loss.png" alt="General Train CTC Loss" />
                <img src="/converged_general_arabic/val_wer.png" alt="General Validation WER" />
                <img src="/converged_general_arabic/val_wer_ctc.png" alt="General Validation WER CTC" />
                <img src="/converged_general_arabic/learning_rate.png" alt="General Learning Rate" />
                <img src="/converged_general_arabic/nemo_test.png" alt="NeMo Evaluation Output" />
              </div>
            )}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <p>&copy; {new Date().getFullYear()} Qala Research. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}