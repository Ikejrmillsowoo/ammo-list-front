import { useState } from "react";
import Header from "../header/header";
import GuessWordGame from "../wordGuess/wordGuess";
import useFetchWord from "../fetch/fetch";


function Home() {
     const {word, fetchWord} = useFetchWord()
     const [newWord, setWord] = useState('word')
  
   

  return (
    <div>
      <Header setWord={setWord}/>
      <GuessWordGame word={newWord} fetchWord={fetchWord} />
      {/* Other content */}
    </div>
  );
}


export default Home;