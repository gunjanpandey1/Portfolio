import React from 'react';
import './About.css';
import myPhoto from './IMG_20230831_091026~2.jpg'; 

const About = () => {
  return (
    <section id="about">
      <div className="about-content">
        <img src={myPhoto} alt="My Photo" className="profile-photo" />
        <div className="about-text">
          <h2>About Me</h2>
          <p>I'm Gunjan Pandey, currently in my third year studying Computer Science at Graphic Era Hill University. Passionate about technology and innovation, I'm actively seeking opportunities to apply my skills and make a meaningful impact.</p>
        </div>
      </div>
    </section>
  );
};

export default About;

