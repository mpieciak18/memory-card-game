import React from "react"
import '../stylesheets/Header.css'

const Header = (props) => {
    const { score } = props

    return (
        <header id='header'>
            <div id='directions-box'>
                <p>Welcome to the Memory Card Game!</p>
                <p>Select all 15 breeds {'\n'}(without selecting the same dog twice.)</p>
            </div>
            <div id='score-box'>
                <p>Current Score: </p>
                <p id='score'>{score}</p>
            </div>
        </header>
    )
}

export default Header