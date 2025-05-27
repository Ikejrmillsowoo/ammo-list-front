import { useState } from "react";
import useFetchWord from "../fetch/fetch";
import Header from "../header/header";
import GuessWordGame from "../wordGuess/wordGuess";


function Home() {
  const [word, setWord] = useState('')
 console.log(word)
  // const handleNewWord = () => {
  //   alert('New word logic goes here');
  // };

  // const handleRandomWord = () => {
  //   alert('Random word logic goes here');
  // };

  return (
    <div>
      <Header setWord={setWord} />
      <GuessWordGame word={word}/>
      <h1>{word}</h1>
      {/* Other content */}
    </div>
  );
}


export default Home;