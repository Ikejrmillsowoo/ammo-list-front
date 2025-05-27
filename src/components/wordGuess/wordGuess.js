import React, { useState } from 'react';
import CustomButton from '../buttons/button';

const GuessWordGame = ({word}) => {
  const targetWord = word;
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [input, setInput] = useState('');
  const [wrongGuesses, setWrongGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState('playing');

  const maxTries = targetWord.length;

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
    setGuessedLetters([]);
    setWrongGuesses([]);
    setInput('');
    setGameStatus('playing');
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Guess the Word</h2>
      <h3>{displayWord}</h3>
      <p>Tries left: {maxTries - wrongGuesses.length}</p>

      {gameStatus === 'playing' && (
        <form onSubmit={handleGuess}>
          <input
            type="text"
            maxLength={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <CustomButton type="submit" label="Guess" />
          {/* <button type="submit">Guess</button> */}
        </form>
      )}

      {gameStatus === 'won' && <h3>🎉 You Won!</h3>}
      {gameStatus === 'lost' && (
        <div>
          <h3>💀 You Lost. The word was: {targetWord}</h3>
        </div>
      )}

      {(gameStatus === 'won' || gameStatus === 'lost') && (
        <CustomButton label="Play Again" onClick={resetGame} />
        // <button onClick={resetGame}>Play Again</button>
      )}

      <p>Wrong guesses: {wrongGuesses.join(', ')}</p>
    </div>
  );
};

export default GuessWordGame;
