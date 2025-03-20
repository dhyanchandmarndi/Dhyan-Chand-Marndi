import React from 'react';
import './Skills.css';

const SkillsSection = () => {
  // Skills data organized by categories
  const skillsData = {
    frontend: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "TypeScript", level: 75 },
      { name: "Redux", level: 80 },
    ],
    backend: [
      { name: "Node.js", level: 80 },
      { name: "Express", level: 75 },
      { name: "MongoDB", level: 70 },
      { name: "SQL", level: 65 },
      { name: "RESTful APIs", level: 85 },
    ]
    // tools: [
    //   { name: "Git", level: 85 },
    //   { name: "Webpack", level: 70 },
    //   { name: "Jest", level: 65 },
    //   { name: "Docker", level: 60 },
    //   { name: "VS Code", level: 90 },
    // ],
    // design: [
    //   { name: "Figma", level: 75 },
    //   { name: "Responsive Design", level: 85 },
    //   { name: "Tailwind CSS", level: 80 },
    //   { name: "Material UI", level: 75 },
    // ]
  };

  // Function to render skill bars
  const renderSkillBars = (skills) => {
    return skills.map((skill, index) => (
      <div className="skill-item" key={index}>
        <div className="skill-info">
          <p className="skill-name">{skill.name}</p>
          <p className="skill-percentage">{skill.level}%</p>
        </div>
        <div className="skill-bar">
          <div 
            className="skill-progress" 
            style={{ width: `${skill.level}%` }}
          ></div>
        </div>
      </div>
    ));
  };

  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <p className="section-description">
          Here are my technical skills and proficiency levels in various web development technologies.
        </p>

        <div className="skills-container">
          <div className="skills-category">
            <h3>Frontend Development</h3>
            <div className="skills-list">
              {renderSkillBars(skillsData.frontend)}
            </div>
          </div>

          <div className="skills-category">
            <h3>Backend Development</h3>
            <div className="skills-list">
              {renderSkillBars(skillsData.backend)}
            </div>
          </div>
{/* 
          <div className="skills-category">
            <h3>Tools & Deployment</h3>
            <div className="skills-list">
              {renderSkillBars(skillsData.tools)}
            </div>
          </div>

          <div className="skills-category">
            <h3>Design & UI</h3>
            <div className="skills-list">
              {renderSkillBars(skillsData.design)}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;