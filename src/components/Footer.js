import React from "react"
import '../stylesheets/Footer.css'
import githubLogo from '../images/github-logo.png'

const Footer = () => {
    return (
        <div id='footer'>
            <p>Developed by Mark Pieciak</p>
            <img src={githubLogo} id='github-logo' href='https://github.com/mpieciak18/memory-card-game'></img>
        </div>
    )
}

export default Footer