import { useState} from 'react'

const useFetchWord = ()=> {
    const [word,  setWord] = useState('')
    const [loading, setLoading] = useState(false)

    const fetchWord = async () => {
        setLoading(true);
        try {
          const response = await fetch('http://192.168.4.144:8080/word');
          const data = await response.json();
          setWord(data.word);
          
        } catch (error) {
          console.error('Failed to fetch word:', error);
        } finally {
          setLoading(false);
        }
      };
    return  {word, loading, fetchWord}
}

export default useFetchWord;