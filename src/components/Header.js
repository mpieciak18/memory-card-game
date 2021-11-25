import React from "react"
import { useState, useEffect } from 'react'

const Header = (props) => {
    const { score } = props

    return (
        <header id='header'>
            <div id='directions'>
                <p>Welcome to the Memory Card Game!</p>
                <p>Select all 15 breeds without selecting the same dog twice.</p>
            </div>
            <div id='score'>
                <p>Currect Score: </p>
                <p>{score}</p>
            </div>
        </header>
    )
}

export default Header