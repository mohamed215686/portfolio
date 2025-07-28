import React from 'react';
import './mobileNav.css';
import { 
  FaHome,
  FaUser,
  FaCode,
  FaEnvelope 
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const MobileNav = () => {
  const items = [
    { label: "Home", icon: <FaHome />, href: "/" },
    { label: "About", icon: <FaUser />, href: "/about" },
    { label: "Projects", icon: <FaCode />, href: "/projects" },
    { label: "Contact", icon: <FaEnvelope />, href: "/contact" },
  ];

  return (
    <div className='navigation'>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.href}
              className={({ isActive }) => isActive ? 'active' : ''}
              end={item.href === '/'}
            >
              <span className='icon'>{item.icon}</span>
              <span className='text'>{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNav;