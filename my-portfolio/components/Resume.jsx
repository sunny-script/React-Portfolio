import React from 'react';

const Resume = () => {
  return (
    <section id="resume" style={{ padding: '2rem' }}>
      <h2>Resume</h2>
      <a
        href="/ParkerMikesellResumeJan2025.jpg"
        download="Parker_Mikesell_Resume.jpg"
        style={{ display: 'block', margin: '1rem 0', }}
      >
        Download My Resume
      </a>
      <h2>Proficiencies</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li>JavaScript (ES6+)</li>
        <li>React</li>
        <li>Node.js</li>
        <li>HTML5 & CSS3</li>
        <li>MongoDB</li>
        <li>SQL</li>
        <li>Git & GitHub</li>
      </ul>
    </section>
  );
};

export default Resume;
