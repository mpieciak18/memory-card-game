import React from 'react'
import { useState, useEffect } from 'react'

const Game = (props) => {
    const { dogs, setDogs, setScore, setGameOver } = props

    const clickDog = (e) => {
        const dogId = e.target.id
    
        // Insert code to update click count for specific dog in dogs
    
        // Insert code to call function to rerender with random cards
    }

    let { idOne, srcOne, idTwo, srcTwo, idThree, srcThree} = ''

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
    const randomizeBoard = () => {
        const numbers = chooseThreeNums()
        console.log(numbers)

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
            <div id={idOne} className='card'>
                <img className='card-pic' src={srcOne}></img>
            </div>
            <div id={idTwo} className='card'>
                <img className='card-pic' src={srcTwo}></img>
            </div>
            <div id={idThree} className='card'>
                <img className='card-pic' src={srcThree}></img>
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