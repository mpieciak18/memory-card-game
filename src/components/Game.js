import React from 'react'
import { useState, useEffect } from 'react'
import '../stylesheets/Game.css'

const Game = (props) => {
    const { dogs, score, setScore, clearClicks, updateDog} = props
    const [gameBoard, setGameBoard] = useState({
        dogOne: {id: 0, src: dogs[0].source},
        dogTwo: {id: 1, src: dogs[1].source},
        dogThree: {id: 2, src: dogs[2].source}
    })

    const increaseScore = () => {
        const newScore = score + 1
        setScore(newScore)
    }

    const resetScore = () => {
        setScore(0)
    }

    const clickDog = (e) => {
        const dogId = Number(e.target.id)
        const dog = dogs[dogId]

        if (dog.clicks >= 1) {
            alert('game over')
            clearClicks()
            resetScore()
        } else {
            dog.clicks = 1
            updateDog(dog)
            increaseScore()
        }    
    }

    useEffect(() => {
        if (score >= 15) {
            alert('You won the game! Want to play again?')
            clearClicks()
            resetScore()
            randomizeBoard()
        } else {
            randomizeBoard()
        }
    }, [score])

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

        if (dogs[numOne].clicks == 0 || dogs[numTwo].clicks == 0 || dogs[numThree].clicks == 0) {
            console.log(dogs[numOne].clicks, dogs[numTwo].clicks, dogs[numThree].clicks)
            return [numOne, numTwo, numThree]
        } else {
            return chooseThreeNums()
        }
    }

    const randomizeBoard = () => {
        let nums = chooseThreeNums()

        setGameBoard({
            dogOne: {id: nums[0], src: dogs[nums[0]].source},
            dogTwo: {id: nums[1], src: dogs[nums[1]].source},
            dogThree: {id: nums[2], src: dogs[nums[2]].source},
        })
    }

    const gameContents = (
        <div id='gameContents'>
            <div className='card'>
                <img id={gameBoard.dogOne.id} className='card-pic' src={gameBoard.dogOne.src} onClick={clickDog}></img>
            </div>
            <div className='card'>
                <img id={gameBoard.dogTwo.id} className='card-pic' src={gameBoard.dogTwo.src} onClick={clickDog}></img>
            </div>
            <div className='card'>
                <img id={gameBoard.dogThree.id} className='card-pic' src={gameBoard.dogThree.src} onClick={clickDog}></img>
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