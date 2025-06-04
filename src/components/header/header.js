import React, { useEffect } from 'react';
import './header.css';
import CustomButton from '../buttons/button';
import useFetchWord from '../fetch/fetch';
import { Link } from 'react-router-dom';
import RandomWord from '../randomWord/rendomWord';




const Header = ({setWord}) => {
  const { word, loading, fetchWord} = useFetchWord()


   useEffect(() => {
  if (setWord && typeof setWord === 'function') {
    setWord(word);
  }
}, [word, setWord]);  
    return (
    <header className="header">
      <Link to='/' className="title"><h1 className="title">Ammo's Words</h1></Link>
      <div className="button-group">
        <Link to="/wordGuess"> <CustomButton  className="header-btn" id='newWord' onClick={fetchWord} label={loading? 'Loading...': 'New Word'} /></Link>
        <CustomButton className="header-btn" id='randomWord' label="Random Word" onClick={RandomWord} />
      </div>
    </header>
  );
};

export default Header;
