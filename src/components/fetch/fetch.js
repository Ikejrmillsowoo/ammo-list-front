import React, { useEffect, useState} from 'react'

function fetchWord(){
    const [word,  setWord] = useState('')

    useEffect(() => {
      fetch('http://localhost:8080/word')
      .then(response => response.text())
      .then(data => setWord(data))
    }, [])
    

    return (
        <div>
            <h1>{word}</h1>
        </div>
    )
}

export default fetchWord;