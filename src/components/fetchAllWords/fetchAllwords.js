import { useEffect, useState} from 'react'

const useFetchAllWords = ()=> {
    const [words,  setWords] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=> {
        const FetchAllWords = async () => {
            // setLoading(true);
            try {
              const response = await fetch('http://localhost:8080');
              const data = await response.json();
            //   console.log(data)
               setWords(data);
              
            } catch (error) {
              console.error('Failed to fetch word:', error);
            } finally {
               setLoading(false);
            }
          };
          FetchAllWords()
    }, [])
    return {words, loading}

    
 }

export default useFetchAllWords;