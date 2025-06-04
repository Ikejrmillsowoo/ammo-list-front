import React from 'react';
import './hangmanFigure.css';

const HangmanFigure = ({ wrongGuesses }) => {
  return (
    <svg height="250" width="200" className="hangman-figure">
      {/* Gallows */}
      <line x1="60" y1="20" x2="140" y2="20" />
      <line x1="60" y1="20" x2="60" y2="230" />
      <line x1="20" y1="230" x2="100" y2="230" />
      <line x1="140" y1="20" x2="140" y2="50" />

      {/* Head */}
      {wrongGuesses > 0 && <circle cx="140" cy="70" r="20" />}
      {/* Body */}
      {wrongGuesses > 1 && <line x1="140" y1="90" x2="140" y2="150" />}
      {/* Arms */}
      {wrongGuesses > 2 && <line x1="140" y1="100" x2="120" y2="130" />}
      {wrongGuesses > 3 && <line x1="140" y1="100" x2="160" y2="130" />}
      {/* Legs */}
      {wrongGuesses > 4 && <line x1="140" y1="150" x2="120" y2="180" />}
      {wrongGuesses > 5 && <line x1="140" y1="150" x2="160" y2="180" />}
    </svg>
  );
};

export default HangmanFigure;
