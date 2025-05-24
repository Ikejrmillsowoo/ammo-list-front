import Header from "../header/header";


function Home() {
  const handleNewWord = () => {
    alert('New word logic goes here');
  };

  const handleRandomWord = () => {
    alert('Random word logic goes here');
  };

  return (
    <div>
      <Header onNewWord={handleNewWord} onRandomWord={handleRandomWord} />
      {/* Other content */}
    </div>
  );
}


export default Home;