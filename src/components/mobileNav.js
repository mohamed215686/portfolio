import React, { useState } from 'react';
import './mobileNav.css';
import { 
  FaHome,
  FaUser,
  FaCode,
  FaEnvelope 
} from "react-icons/fa";
const MobileNav = () => {
  const [activeTab, setActiveTab] = useState(0);
  const items = [
    { label: "Home", icon: <FaHome />, href: "#" },
    { label: "About", icon: <FaUser />, href: "#" },
    { label: "Projects", icon: <FaCode />, href: "#" },
    { label: "Contact", icon: <FaEnvelope />, href: "#" },
  ];

  return (
    <div className='navigation'>
      <ul>
        {items.map((item, index) => (
          <li 
            key={index} 
            className={activeTab === index ? 'active' : ''}
            onClick={() => setActiveTab(index)}
          >
            <a href={item.href}>
              <span className='icon'>{item.icon}</span>
              <span className='text'>{item.label}</span>
            </a>
          </li>
        ))}
        <div 
          className='indicator' 
          style={{ 
            left: `calc(70px * ${activeTab})`,
            transition: 'left 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
          }}
        ></div>
      </ul>
    </div>
  );
};

export default MobileNav;