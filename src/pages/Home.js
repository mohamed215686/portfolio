import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Home.css';
import CardSwap, { Card } from './CardSwap';
import Carousel from './Carousel'
import '../components/ShinyText'
import ShinyText from '../components/ShinyText';
export default function Home() {
  const projects = [
    { label: 'Project 1', description: 'Description for project 1' },
    { label: 'Project 2', description: 'Description for project 2' },
    { label: 'Project 3', description: 'Description for project 3' },
  ];

 

  return (
    <div className="home-container">
      <h1 className="N">
      <ShinyText
              text="Welcome to My Portfolio" 
              disabled={false} 
              speed={3} 
              className='home-title' 
            /></h1>
      <p className="home-intro">
        Hi, I'm Mohamed Afkir. I'm a passionate developer eager to build impactful digital experiences. 
        Explore my work, learn more about me, or get in touch!
      </p>

      <div className='project-container'>
        <div className='project-info'>
          <div className='P'>Some of my Projects</div>
          <NavLink
              to="/projects"
              className='link-P'
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
            
            {projects.map((project, index) => (
              <Card key={index} className="card-item">
                <h3>{project.label}</h3>
                <p>{project.description}</p>
              </Card>
            ))}
            
          </CardSwap>
        </div>
        <div className='card-mobile'>
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