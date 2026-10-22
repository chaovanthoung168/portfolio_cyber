'use client';

import React from 'react';
import styles from './Education.module.css';
import { useInView } from '../hooks/useInView';

export default function Education() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className={styles.educationSection}>
      <div className={`container ${styles.splitLayout}`}>
        
        {/* Left Side: Typography */}
        <div className={`animate-on-scroll ${isInView ? 'is-visible' : ''} ${styles.leftCol}`}>
          <h2 className="cyber-title glitch-hover" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>SYS.LOG<br/>// TRAINING</h2>
        </div>

        {/* Right Side: Data readout */}
        <div className={styles.rightCol}>
          <div className={`cyber-card animate-on-scroll delay-200 ${isInView ? 'is-visible' : ''} ${styles.infoBlock}`}>
            <h3 className="cyber-subtitle">&gt; EDUCATION_DATA</h3>
            <p className="body-text" style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              I graduated from the Department of Computer Science at the Royal University of Phnom Penh. In addition, I successfully completed my studies at ISTAD, where I gained practical, hands-on experience in modern web development and real-world software projects.
            </p>
            <div className={styles.eduItem}>
              <strong style={{ color: 'var(--neon-pink)' }}>ROYAL UNIVERSITY OF PHNOM PENH</strong>
              <span>[ Computer Science // 2023 - 2026 ]</span>
            </div>
            <div className={styles.eduItem}>
              <strong style={{ color: 'var(--neon-pink)' }}>ISTAD ACADEMY</strong>
              <span>[ Full-Stack & Microservices // 2025 - 2026 ]</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
