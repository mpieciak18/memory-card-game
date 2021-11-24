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
  // const dogList = [bichonFrise, borderTerrier, cavSpaniel, chihuahua, daschund, frenchie, jackRussell,
  //   miniSchnauzer, pomeranian, poodle, pug, shihTzu, welshCorgi, westie, yorkie
  // ]

  // let initDogState = [];
  // for (let i = 0; i < dogList.length; i++) {
  //   const newDogObj = {
  //       clicks: 0,
  //       id: i,
  //       source: dogList[i]
  //   }
  //   initDogState = [...initDogState, newDogObj]
  //   console.log('teehee')
  // }

  // const [dogs, setDogs] = useState(initDogState)

  const [dogs, setDogs] = useState([
    {clicks: 0, id: 0, source: bichonFrise},
    {clicks: 0, id: 1, source: borderTerrier},
    {clicks: 0, id: 2, source: cavSpaniel},
    {clicks: 0, id: 3, source: chihuahua},
    {clicks: 0, id: 4, source: daschund},
    {clicks: 0, id: 5, source: frenchie},
    {clicks: 0, id: 6, source: jackRussell},
    {clicks: 0, id: 7, source: miniSchnauzer},
    {clicks: 0, id: 8, source: pomeranian},
    {clicks: 0, id: 9, source: poodle},
    {clicks: 0, id: 10, source: pug},
    {clicks: 0, id: 11, source: shihTzu},
    {clicks: 0, id: 12, source: welshCorgi},
    {clicks: 0, id: 13, source: westie},
    {clicks: 0, id: 14, source: yorkie}
  ])

  return (
    <div id="App">
      {/* <Header score={score} /> */}
      <Game dogs={dogs} setDogs={setDogs} setScore={setScore} setGameOver={setGameOver}/>
    </div>
  )
}

export default App