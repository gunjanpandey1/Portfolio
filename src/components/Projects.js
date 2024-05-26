import React from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Online Python interpter',
    description: 'I have developed a web-based project—an online Python interpreter. Users can input Python code directly into the browser and see the output in real-time. Additionally, the interpreter supports various Python libraries and syntax highlighting for ease of use.',
    link: 'https://github.com/gunjanpandey1/Python-interpreter', // Replace with your project URL
  },
  {
    id: 2,
    title: 'AQI PREDICTION',
    description: 'I have collaborated on a team project focused on predicting Air Quality Index (AQI) using machine learning methods. Our project aims to forecast AQI levels based on various environmental factors such as particulate matter, humidity, and temperature',
    link: 'https://github.com/gunjanpandey1/AQI-Prediction', // Replace with your project URL
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map(project => (
          <div className="project" key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

