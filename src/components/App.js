import React from 'react'
import Game from '../components/Game.js'
import Header from '../components/Header.js'
import { useState } from 'react'
import '../stylesheets/App.css'
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
  }

  const [dogs, setDogs] = useState(initDogState)

  // Reset dogs click-count
  const clearClicks = () => {
    let newDogArr = []

    for (let i = 0; i < dogs.length; i++) {
      const dog = dogs[i]
      dog.clicks = 0
      newDogArr = [...newDogArr, dog]
    }

    setDogs(newDogArr)
  }

  // Update dog in dogs state
  const updateDog = (dog) => {
    const firstSlice = dogs.slice(0, dog.id)
    const secondSlice = dogs.slice(dog.id + 1)
    setDogs([...firstSlice, dog, ...secondSlice])
  }

  return (
    <div id="App">
      <Header score={score} />
      <Game 
        dogs={dogs}
        score={score}
        setScore={setScore}
        clearClicks={clearClicks}
        updateDog={updateDog}
      />
    </div>
  )
}

export default App