import React from 'react';
import { SvgIconComponent } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';


import '@/pages/Layout/styles/navbar.scss'


interface NavButtonProps {
  icon: SvgIconComponent;
  label: string;
  href: string;
  tabIndex: 0 | -1
}

const NavButton: React.FC<NavButtonProps> = ({ icon: Icon, label, href, tabIndex }) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) => `nav-button ${isActive ? 'active' : 'nav-button'}`}
      tabIndex={tabIndex}
    >
      <Icon className="icon" />
      <span>{label}</span>
    </NavLink>
  );
};

export default NavButton;
