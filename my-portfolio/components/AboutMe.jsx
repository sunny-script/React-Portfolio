import React from 'react';

const AboutMe = () => {
  return (
    <section id="about-me" style={{ padding: '2rem' }}>
      <div style={{ textAlign: 'center' }}>
        <img
          src="/AboutMeImage.jpg"
          alt="Parker Mikesell"
          style={{
            borderRadius: '50%',
            width: '150px',
            height: '150px',
            objectFit: 'cover',
            marginBottom: '1rem',
          }}
        />
        <h1>Hi, I'm Parker</h1>
        <h3>
          I'm a culture consultant and web developer.
        </h3>
      </div>
    </section>
  );
};

export default AboutMe;
