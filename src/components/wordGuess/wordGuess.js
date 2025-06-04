import React, { useEffect, useState } from 'react';
import './wordGuess.css'
import CustomButton from '../buttons/button';
import useFetchWord from '../fetch/fetch';
import HangmanFigure from '../hangmanFigure/hangmanFigure';

const GuessWordGame = ({word}) => {
    
  const {fetchWord} = useFetchWord()
   
  const [targetWord, setTargetWord] = useState(word);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [input, setInput] = useState('');
  const [wrongGuesses, setWrongGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState('playing');
 
  useEffect(() => {
    setTargetWord(word);
    setGuessedLetters([]);
    setWrongGuesses([]);
    setGameStatus('playing');
    setInput('');
  }, [word]);


//   const maxTries = targetWord.length;
  const maxTries = 6;

  const handleGuess = (e) => {
    e.preventDefault();
    const guess = input.toLowerCase();

    // Ignore empty or repeated guesses
    if (!guess || guessedLetters.includes(guess) || wrongGuesses.includes(guess)) {
      setInput('');
      return;
    }

    if (targetWord.includes(guess)) {
      const updatedGuessed = [...guessedLetters, guess];
      setGuessedLetters(updatedGuessed);

      // Check win
      const uniqueLetters = [...new Set(targetWord.split(''))];
      if (uniqueLetters.every(letter => updatedGuessed.includes(letter))) {
        setGameStatus('won');
      }
    } else {
      const updatedWrong = [...wrongGuesses, guess];
      setWrongGuesses(updatedWrong);
      if (updatedWrong.length >= maxTries) {
        setGameStatus('lost');
      }
    }

    setInput('');
  };

  const displayWord = targetWord
    .split('')
    .map(letter => (guessedLetters.includes(letter) ? letter : '_'))
    .join(' ');

  const resetGame = () => {
     console.log("Play again clicked")
     fetchWord()
    setGuessedLetters([]);
    setWrongGuesses([]);
    setInput('');
    setGameStatus('playing');
    
  };

  return (
    <div className='word-guess' style={{ padding: '1rem' }}>
      <h2>Guess the Word</h2>
      <h3 id='display-word'>{displayWord}</h3>
      <p className='tries'>Tries left: {maxTries - wrongGuesses.length}</p>

      {gameStatus === 'playing' && (
        <form onSubmit={handleGuess}>
          <input
            type="text"
            maxLength={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          /><br/>
          <CustomButton type="submit" label="Guess" />
        </form>
      )}

      {gameStatus === 'won' && <h3>🎉 You Won!</h3>}
      {gameStatus === 'lost' && (
        <div>
          <h3 className='tries'>💀 You Lost. The word was: {targetWord}</h3>
        </div>
      )}

      {(gameStatus === 'won' || gameStatus === 'lost') && (
        <CustomButton label="Play Again" onClick={resetGame} />
      )}

      <p className='tries'>Wrong guesses: {wrongGuesses.join(', ')}</p>
      <HangmanFigure wrongGuesses={wrongGuesses.length} />
    </div>
  );
};

export default GuessWordGame;
