'use client';

import React from 'react';
import styles from './Contact.module.css';
import { useInView } from '../hooks/useInView';

export default function Contact() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className={styles.contactSection}>
      <div className={`container ${styles.container}`}>
        
        <div className={`animate-on-scroll ${isInView ? 'is-visible' : ''} ${styles.header}`}>
          <h2 className="cyber-title glitch-hover" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
            COMM_LINK
          </h2>
          <p className="body-text" style={{ color: 'var(--text-muted)' }}>
            &gt; Initiate connection sequence...
          </p>
        </div>
        
        <div className={`cyber-card animate-on-scroll delay-200 ${isInView ? 'is-visible' : ''} ${styles.contactForm}`}>
          <h3 className="cyber-subtitle">&gt; TRANSMIT_MESSAGE</h3>
          
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.inputGroup}>
              <label>ID_TAG // NAME</label>
              <input type="text" placeholder="Enter your designation" className={styles.input} />
            </div>
            
            <div className={styles.inputGroup}>
              <label>ROUTE // EMAIL</label>
              <input type="email" placeholder="Establish return path" className={styles.input} />
            </div>
            
            <div className={styles.inputGroup}>
              <label>PAYLOAD // MESSAGE</label>
              <textarea placeholder="Input transmission data..." className={styles.textarea} rows={4}></textarea>
            </div>
            
            <button type="submit" className={styles.submitBtn}>
              [ SEND_TRANSMISSION ]
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
