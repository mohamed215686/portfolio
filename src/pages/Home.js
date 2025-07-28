import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import CardSwap, { Card } from './CardSwap'
export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to My Portfolio</h1>
      <p className="home-intro">
        Hi, I'm Mohamed Afkir. I'm a passionate developer eager to build impactful digital experiences. Explore my work, learn more about me, or get in touch!
      </p>
      <div>
        <div>
          hi
        </div>
      <div style={{ height: '600px', position: 'relative' }}>
      <CardSwap
        cardDistance={60}
        verticalDistance={70}
        delay={5000}
        pauseOnHover={false}
      >
        <Card>
          <h3>Card 1</h3>
          <p>Your content here</p>
        </Card>
        <Card>
          <h3>Card 2</h3>
          <p>Your content here</p>
        </Card>
        <Card>
          <h3>Card 3</h3>
          <p>Your content here</p>
        </Card>
      </CardSwap>
    </div>
      </div>
      
    </div>
  );
} 