import React from 'react'
import { useState, useEffect } from 'react'
import '../stylesheets/Game.css'

const Game = (props) => {
    const { dogs, setDogs, setScore, setGameOver } = props

    const clickDog = (e) => {
        const dogId = e.target.id

        console.log(dogId)
    
        // Insert code to update click count for specific dog in dogs
    
        // Insert code to call function to rerender with random cards
    }

    const chooseThreeNums = () => {
        let { numOne, numTwo, numThree } = ''
        numOne = Math.floor(Math.random() * 15)

        const chooseNumTwo = () => {
            let num = '';
            while (num == numOne || num == '') {
                num = Math.floor(Math.random() * 15)
            }
            return num
        }  
        numTwo = chooseNumTwo() 

        const chooseNumThree = () => {
            let num = '';
            while (num == numOne || num == numTwo || num == '') {
                num = Math.floor(Math.random() * 15)
            }
            return num
        }  
        numThree = chooseNumThree() 

        return [numOne, numTwo, numThree]
    }

    let { idOne, srcOne, idTwo, srcTwo, idThree, srcThree} = ''

    const randomizeBoard = () => {
        const numbers = chooseThreeNums()

        idOne = numbers[0]
        srcOne = dogs[numbers[0]].source
        idTwo = numbers[1]
        srcTwo = dogs[numbers[1]].source
        idThree = numbers[2]
        srcThree = dogs[numbers[2]].source
    }

    randomizeBoard()

    const gameContents = (
        <div id='gameContents'>
            <div className='card'>
                <img id={idOne} className='card-pic' src={srcOne} onClick={clickDog}></img>
            </div>
            <div className='card'>
                <img id={idTwo} className='card-pic' src={srcTwo} onClick={clickDog}></img>
            </div>
            <div className='card'>
                <img id={idThree} className='card-pic' src={srcThree} onClick={clickDog}></img>
            </div>
        </div>
    )

    return (
        <div id='game'>
            {gameContents}
        </div>
    )
}

export default Game