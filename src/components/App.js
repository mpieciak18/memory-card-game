import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  const [score, setScore] = useState(0)

  const [dogs, setDogs] = useState({})

  // Use useEffect to check if game is over
  useEffect(() => {
    // if (score == ?) {
      //
    // } else {
      //
    // }
  }, [dogs])

  return (
    <div id="App">
      <Header score={score} />
      <Game dogs={dogs} setDogs={setDogs} setScore={setScore} />
    </div>
  );
}

export default App;