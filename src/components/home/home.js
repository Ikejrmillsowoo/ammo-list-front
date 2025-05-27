import useFetchWord from "../fetch/fetch";
import Header from "../header/header";


function Home() {
  const { word} = useFetchWord()
 console.log(word)
  // const handleNewWord = () => {
  //   alert('New word logic goes here');
  // };

  // const handleRandomWord = () => {
  //   alert('Random word logic goes here');
  // };

  return (
    <div>
      <Header />
      <h1>{word}</h1>
      {/* Other content */}
    </div>
  );
}


export default Home;