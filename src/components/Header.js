import React from 'react';
import GooeyNav from './GooeyNav';
import './Header.css';
import ShinyText from './ShinyText';
import { NavLink } from "react-router-dom";

const Header = () => {
  const items = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className='app-container'>
      <header className='profile'>
      <div className='profile-section'>
        <img src='/images/me.jpg' alt="Mohamed Afkir" className='profile-image' />
      </div>
      <div className='name-section'>
            <ShinyText
              text="Mohamed Afkir" 
              disabled={false} 
              speed={3} 
              className='custom-class' 
            />
          </div></header>
      <div className='content-section'>
        <header className='header'>
          
          <div className='nav-section'>
            <GooeyNav
              items={items}
              particleCount={15}
              particleDistances={[90, 10]}
              particleR={100}
              initialActiveIndex={0}
              animationTime={600}
              timeVariance={300}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;