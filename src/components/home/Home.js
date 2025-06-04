import { useState } from "react";
import Header from "../header/header";
import GuessWordGame from "../wordGuess/wordGuess";
import useFetchWord from "../fetch/fetch";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AllWords from "../allWords/allWords";



function Home() {
  const { word, fetchWord } = useFetchWord()
  const [newWord, setWord] = useState(word)



  return (
    <div>
      <Header setWord={setWord} />
      {/* <Router> */}
        <Routes>
          <Route path='/' element={<AllWords />} />
          <Route path='/wordGuess' element={<GuessWordGame word={newWord} fetchWord={fetchWord} />} />
        </Routes>
      {/* </Router> */}


      {/* Other content */}
    </div>
  );
}


export default Home;