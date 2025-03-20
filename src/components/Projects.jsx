import React from 'react';
import './Projects.css';
import landing_page from '../assets/landing-page.png';
import calculator from '../assets/calculator.png';
import weather_app from '../assets/weather-app.png';

const Projects = () => {
  // Project data - you can expand this with your actual projects
  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description: "A landing page for an health care website. Build using HTML, CSS.",
      image: landing_page, // Replace with your actual image path
      projectUrl: "https://dhyanchandmarndi.github.io/Codesoft_L1_Task2_LandingPage/"
    },
    {
      id: 2,
      title: "Calculator",
      description: "A calculator app that performs basic arithmetic operations. Built using HTML, CSS, and JavaScript.",
      image: calculator, // Replace with your actual image path
      projectUrl: "https://dhyanchandmarndi.github.io/Codesoft_L1_Task3_Calculator/"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "An interactive weather dashboard that displays current and forecasted weather data. Utilizes React and OpenWeather API.",
      image: weather_app, // Replace with your actual image path
      projectUrl: "https://github.com/dhyanchandmarndi/Weather-App"
    }
  ];

  return (
    <section className="project-section" id='projects'>
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-container">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image"
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-actions">
                  <a 
                    href={project.projectUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-button"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
