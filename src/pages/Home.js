import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Home.css';
import CardSwap, { Card } from './CardSwap';

export default function Home() {
  const projects = [
    { label: 'Project 1', description: 'Description for project 1' },
    { label: 'Project 2', description: 'Description for project 2' },
    { label: 'Project 3', description: 'Description for project 3' },
    { label: 'Project 4', description: 'Description for project 4' }
  ];

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProjectIndex(prev => (prev + 1) % projects.length);
    }, 5000); 
  
    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to My Portfolio</h1>
      <p className="home-intro">
        Hi, I'm Mohamed Afkir. I'm a passionate developer eager to build impactful digital experiences. 
        Explore my work, learn more about me, or get in touch!
      </p>

      <div className='project-container'>
        <div className='project-info'>
          <div>Projects</div>
          <NavLink
              to="/projects"
              className={({ isActive }) => isActive ? 'active' : ''}
              end={"/projects"=== '/'}
            >
              View All Projects
            </NavLink>
        </div>
        
        <div className='card-stack'>
          <CardSwap
            cardDistance={60}
            verticalDistance={70}
            delay={2000}  
            pauseOnHover={false}
          >
            
              <Card className="card-item">
                <h3>{ projects[currentProjectIndex % projects.length].label}</h3>
                <p>{ projects[currentProjectIndex % projects.length].description}</p>
              </Card>
              <Card className="card-item">
                <h3>{ projects[(currentProjectIndex + 1) % projects.length].label}</h3>
                <p>{ projects[(currentProjectIndex + 1) % projects.length].description}</p>
              </Card>
              <Card className="card-item">
                <h3>{ projects[(currentProjectIndex + 2) % projects.length].label}</h3>
                <p>{ projects[(currentProjectIndex + 2) % projects.length].description}</p>
              </Card>
            
          </CardSwap>
        </div>
      </div>
    </div>
  );
}