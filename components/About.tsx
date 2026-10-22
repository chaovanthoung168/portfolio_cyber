'use client';

import React from 'react';
import styles from './About.module.css';
import { useInView } from '../hooks/useInView';
import TiltCard from './TiltCard';

export default function About() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className={styles.aboutSection}>
      <div className={`container ${styles.container}`}>
        
        <div className={`animate-on-scroll ${isInView ? 'is-visible' : ''} ${styles.header}`}>
          <h2 className="cyber-title glitch-hover" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>SYS.LOG<br/>// ABOUT</h2>
        </div>

        <div className={`animate-on-scroll delay-200 ${isInView ? 'is-visible' : ''}`}>
          <TiltCard maxTilt={10} className={styles.hologramCard}>
            
            {/* 3D Floating Elements inside the TiltCard */}
            <div className={styles.hologramContent}>
              
              <div className={styles.holoRings}>
                <div className={`${styles.ring} ${styles.ring1}`}></div>
                <div className={`${styles.ring} ${styles.ring2}`}></div>
                <div className={`${styles.ring} ${styles.ring3}`}></div>
              </div>

              <div className={styles.floatingData}>
                <h3 className={styles.holoTitle}>&lt; ENTITY: CHAO VANTHOUNG /&gt;</h3>
                <p className={styles.holoText}>
                  I am a Computer Science graduate with a strong passion for web development and software engineering. I enjoy building modern, scalable, and user-friendly applications while continuously improving my technical skills.
                </p>
                <div className={styles.hologramScanner}></div>
              </div>

            </div>

          </TiltCard>
        </div>

      </div>
    </section>
  );
}
