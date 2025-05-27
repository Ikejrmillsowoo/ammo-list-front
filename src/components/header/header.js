import React from 'react';
import './header.css';
import CustomButton from '../buttons/button';
import useFetchWord from '../fetch/fetch';




const Header = ({setWord}) => {
  const { word, loading, fetchWord} = useFetchWord()
  setWord(word)
    return (
    <header className="header">
      <h1 className="title">Ammo's Words</h1>
      <div className="button-group">
        <CustomButton setWord={word} className="header-btn" id='newWord' onClick={fetchWord} label={loading? 'Loading...': 'New Word'}/>
        <CustomButton className="header-btn" id='randomWord' label="Random Word" />
      </div>
    </header>
  );
};

export default Header;
