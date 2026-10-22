'use client';

import React from 'react';
import styles from './Projects.module.css';
import { useInView } from '../hooks/useInView';

export default function Projects() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const projects = [
    { title: "RESTLAB_SYS", desc: "API testing platform with WebSockets & RabbitMQ." },
    { title: "TODO_PROTO", desc: "Intuitive task management with Spring Boot & Docker." },
    { title: "REAN_DATA_NET", desc: "Interactive data learning and visualization platform." },
    { title: "SCHOOL_API_SECURE", desc: "Secure backend system with payment processing." }
  ];

  return (
    <section ref={ref} className={styles.projectsSection}>
      <div className={`container ${styles.container}`}>
        <div className={`animate-on-scroll ${isInView ? 'is-visible' : ''} ${styles.header}`}>
          <h2 className="cyber-title glitch-hover" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>DATA<br/>ARCHIVES</h2>
        </div>
        
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`cyber-card animate-on-scroll ${isInView ? 'is-visible' : ''} ${styles.projectCard}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={styles.cardNumber}>FILE_0{index + 1}</div>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDesc}>{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
