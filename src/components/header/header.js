import React from 'react';
import './header.css';

const Header = ({ onNewWord, onRandomWord }) => {
  return (
    <header className="header">
      <h1 className="title">Ammo's Words</h1>
      <div className="button-group">
        <button className="header-btn" onClick={onNewWord}>New Word</button>
        <button className="header-btn" onClick={onRandomWord}>Random Word</button>
      </div>
    </header>
  );
};

export default Header;
