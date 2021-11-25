import React from 'react'
import Game from '../components/Game.js'
import { useState, useEffect } from 'react'
// import './App.css'
import bichonFrise from '../images/bichon-frise.png'
import borderTerrier from '../images/border-terrier.png'
import cavSpaniel from '../images/cavalier-king-charles-spaniel.png'
import chihuahua from '../images/chihuahua.png'
import daschund from '../images/daschund.png'
import frenchie from '../images/french-bulldog.png'
import jackRussell from '../images/jack-russell-terrier.png'
import miniSchnauzer from '../images/miniature-schnauzer.png'
import pomeranian from '../images/pomeranian.png'
import poodle from '../images/poodle.png'
import pug from '../images/pug.png'
import shihTzu from '../images/shih-tzu.png'
import welshCorgi from '../images/welsh-corgi.png'
import westie from '../images/west-highland-white-terrier.png'
import yorkie from '../images/yorkshire-terrier.png'

const App = () => {
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)

  // Initialize 'dogs' state
  const dogList = [bichonFrise, borderTerrier, cavSpaniel, chihuahua, daschund, frenchie, jackRussell,
    miniSchnauzer, pomeranian, poodle, pug, shihTzu, welshCorgi, westie, yorkie
  ]

  let initDogState = [];
  for (let i = 0; i < dogList.length; i++) {
    const newDogObj = {
        clicks: 0,
        id: i,
        source: dogList[i]
    }
    initDogState = [...initDogState, newDogObj]
    console.log('teehee')
  }

  const [dogs, setDogs] = useState(initDogState)

  return (
    <div id="App">
      {/* <Header score={score} /> */}
      <Game dogs={dogs} setDogs={setDogs} setScore={setScore} setGameOver={setGameOver}/>
    </div>
  )
}

export default App