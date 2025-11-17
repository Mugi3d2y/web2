import React from 'react';
import './Header.css';

interface HeaderProps {
  image: string;
  children: React.ReactNode;
}

const Header = ({ image, children }: HeaderProps) => {
  return (
    <header className="header" style={{ backgroundImage: `url(${image})` }}>
      <div className="header__content">{children}</div>
    </header>
  );
};

export default Header;
