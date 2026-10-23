'use client';

import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';
import { useInView } from '../hooks/useInView';

export default function Hero() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className={styles.heroSection}>
      <div className={`container ${styles.heroContainer}`}>
        
        <div className={`animate-on-scroll ${isInView ? 'is-visible' : ''} ${styles.textWrap}`}>
          <div className="cyber-card" style={{ display: 'inline-block', marginBottom: '2rem', padding: '0.5rem 1rem' }}>
            <span style={{ color: 'var(--neon-yellow)', fontWeight: 'bold' }}>[ STATUS: ONLINE ]</span>
          </div>
          <h1 className="cyber-title glitch-hover">CHAO<br/>VANTHOUNG v8.</h1>
          <h2 className="cyber-subtitle" style={{ marginTop: '2rem' }}>SYS.DEV // FULLSTACK</h2>
          <p className="body-text" style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>
            &gt; Initializing creative protocols...<br/>
            &gt; Building scalable architectures...<br/>
            &gt; Ready for deployment.
          </p>
        </div>

        <div className={`animate-on-scroll delay-200 ${isInView ? 'is-visible' : ''} ${styles.imageWrap}`}>
          <div className={`cyber-card ${styles.imageContainer}`}>
             <Image 
                src="/profile.jpg" 
                alt="Chao Vanthoung" 
                fill
                className={styles.profileImage}
                priority
              />
              <div className={styles.scanlineOverlay}></div>
          </div>
        </div>

      </div>
    </section>
  );
}
