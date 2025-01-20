import React from 'react';

const Header = ({ currentSection, setCurrentSection }) => {
  const sections = ['About Me', 'Portfolio', 'Contact', 'Resume'];

  return (
    <header style={{ background: '#071e36', padding: '1rem', color: '#fff', textAlign: 'center' }}>
      <h1>Parker Mikesell</h1>
      <nav>
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => setCurrentSection(section)}
            style={{
              background: currentSection === section ? '#daaeb7' : '#465632',
              color: '#fff',
              margin: '0 0.5rem',
              border: 'none',
              padding: '0.5rem 1rem',
              cursor: 'pointer',
            }}
          >
            {section}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;
