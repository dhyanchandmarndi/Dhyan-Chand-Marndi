import React from "react";
import "./Projects.css";
import note_app from "../assets/note-app.png";
import twitter_app from "../assets/twitter-app.png";
import weather_app from "../assets/weather-app.png";

const Projects = () => {
  // Project data - you can expand this with your actual projects
  const projects = [
    {
      id: 1,
      title: "Note App",
      description:
        "A simple and responsive app to create, edit, and manage notes with auto-save and local storage support.",
      image: note_app, // Replace with your actual image path
      projectUrl: "https://tubular-yeot-98e703.netlify.app/",
    },
    {
      id: 2,
      title: "Twitter Sentiment Analysis",
      description:
        "Analyzes real-time tweets to determine public sentiment on any hashtag using NLP and the Twitter API.",
      image: twitter_app, // Replace with your actual image path
      projectUrl: "https://real-time-sentiment-analysis.vercel.app/",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "An interactive weather dashboard that displays current and forecasted weather data. Utilizes React and OpenWeather API.",
      image: weather_app, // Replace with your actual image path
      projectUrl: "https://github.com/dhyanchandmarndi/Weather-App",
    },
  ];

  return (
    <section className="project-section" id="projects">
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
