'use client';

import React from 'react';
import styles from './Journey.module.css';
import { useInView } from '../hooks/useInView';

export default function Journey() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const steps = [
    {
      id: "01",
      title: "ACADEMIC FOUNDATIONS",
      desc: "Worked on various projects strengthening knowledge in frontend and backend development. Focused on writing clean, maintainable code to solve real problems."
    },
    {
      id: "02",
      title: "PROFESSIONAL GOALS",
      desc: "Growing as a professional full-stack developer to create highly scalable systems and contribute to impactful, real-world technology solutions."
    },
    {
      id: "03",
      title: "CONTINUOUS GROWTH",
      desc: "Outside of standard coding, I continuously learn new technologies, refine problem-solving skills, and build personal projects to expand my expertise."
    }
  ];

  return (
    <section ref={ref} className={styles.journeySection}>
      <div className={`container ${styles.container}`}>
        
        <div className={`animate-on-scroll ${isInView ? 'is-visible' : ''} ${styles.header}`}>
          <h2 className="cyber-title glitch-hover" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>SYS.LOG<br/>// JOURNEY</h2>
          <p className="body-text" style={{ color: 'var(--text-muted)' }}>&gt; Executing sequence 1 to 3...</p>
        </div>

        <div className={styles.flowContainer}>
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`animate-on-scroll ${isInView ? 'is-visible' : ''} ${styles.stepWrapper}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Connection Line */}
              {index !== steps.length - 1 && <div className={styles.connectionLine}></div>}
              
              {/* Step Node */}
              <div className={styles.stepNode}>
                {step.id}
              </div>
              
              {/* Step Content */}
              <div className={`cyber-card ${styles.stepContent}`}>
                <h3 className="cyber-subtitle" style={{ borderLeft: 'none', paddingLeft: 0, marginBottom: '1rem' }}>
                  &gt; {step.title}
                </h3>
                <p className="body-text" style={{ color: 'var(--text-muted)' }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
