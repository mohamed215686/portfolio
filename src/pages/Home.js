import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Home.css';
import CardSwap, { Card } from './CardSwap';
import Carousel from './Carousel'
export default function Home() {
  const projects = [
    { label: 'Project 1', description: 'Description for project 1' },
    { label: 'Project 2', description: 'Description for project 2' },
    { label: 'Project 3', description: 'Description for project 3' },
  ];

 

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
                <h3>{ projects[0].label}</h3>
                <p>{ projects[0].description}</p>
              </Card>
              <Card className="card-item">
                <h3>{ projects[1].label}</h3>
                <p>{ projects[1].description}</p>
              </Card>
              <Card className="card-item">
                <h3>{ projects[2].label}</h3>
                <p>{ projects[2].description}</p>
              </Card>
            
          </CardSwap>
        </div>
        <div className='A'>
        <div style={{ height: '600px', position: 'relative' }}>
          <Carousel
            baseWidth={300}
            autoplay={true}
            autoplayDelay={3000}
            pauseOnHover={true}
            loop={true}
            round={false}
          />
        </div>
        </div>
        
      </div>
      <div className='c'>
          hi
        </div>
    </div>
  );
}