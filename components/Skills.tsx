'use client';

import React from 'react';
import styles from './Skills.module.css';
import { useInView } from '../hooks/useInView';

export default function Skills() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const skills = [
    "HTML", "CSS", "JAVASCRIPT", "REACT", "NEXT.JS", "TAILWIND_CSS",
    "JAVA", "SPRING_BOOT", "MICROSERVICES", "KAFKA", "DEBEZIUM", 
    "DOCKER", "POSTGRESQL", "MONGODB"
  ];

  return (
    <section ref={ref} className={styles.skillsSection}>
      <div className={`container ${styles.content}`}>
        <h2 className={`cyber-title glitch-hover animate-on-scroll ${isInView ? 'is-visible' : ''}`} style={{ textAlign: 'center', marginBottom: '4rem', fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
          &gt;&gt; TECH_MODULES
        </h2>
        
        <div className={styles.tagGrid}>
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className={`cyber-card animate-on-scroll ${isInView ? 'is-visible' : ''} ${styles.skillTag}`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <span style={{ color: 'var(--neon-pink)', marginRight: '0.5rem' }}>#</span>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
