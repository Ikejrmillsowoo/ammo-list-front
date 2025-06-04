import useFetchAllWords from "../fetchAllWords/fetchAllwords";
import './allWords.css'

const AllWords = () => {
    const { words, loading } = useFetchAllWords();
  
    if (loading) return <p>Loading...</p>;
  
    return (
        <div className='word-guess' style={{ padding: '1rem' }}>
         <h2>Guess the Word</h2>
      <ul>
        {words.map((word, index) => (
          <li id="wordDisplay" key={index}>{word.word}</li>
        ))}
      </ul>
      </div>
    );
  };

export default AllWords;
  