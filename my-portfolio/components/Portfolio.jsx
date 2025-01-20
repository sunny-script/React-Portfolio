import React from 'react';

const projects = [
  {
    title: 'GitHub Candidate Search',
    image: '/CandidateSearchProject.png',
    liveLink: 'https://github-candidate-search-application-1.onrender.com',
    githubLink: 'https://github.com/sunny-script/GitHub-Candidate-Search-Application/blob/main/README.md',
  },
  {
    title: 'Indexd Flashcard App',
    image: '/IndexdProject.png',
    liveLink: 'https://danr55.github.io/Indexd/',
    githubLink: 'https://github.com/Danr55/Indexd',
  },
  {
    title: 'Employee Tracker',
    image: '/employeeTrackerProject.png',
    liveLink: 'https://drive.google.com/file/d/1YHtHZjVjZ1RBphM2zvrsc3edIIVwEVJW/view',
    githubLink: 'https://github.com/sunny-script/Challenge-10',
  },
  {
    title: 'StallStarz',
    image: '/StallStarzProject.png',
    liveLink: 'https://stallstarz.onrender.com/',
    githubLink: 'https://github.com/Ddan71117/stallStarz',
  },
  {
    title: 'CLI Vehicle Builder',
    image: '/vehicleBuilderProject.png',
    liveLink: 'https://drive.google.com/file/d/1H7B9FZFeh04MBGoxD7M-ptP_F3PhyIFW/view',
    githubLink: 'https://github.com/sunny-script/Challenge-08',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" style={{ padding: '2rem' }}>
      <h2>Portfolio</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {projects.map((project, index) => (
          <div key={index} style={{ width: '30%' }}>
            <img
              src={project.image}
              alt={project.title}
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
            <h3>{project.title}</h3>
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a> |{' '}
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
