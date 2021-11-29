import React from "react"
import '../stylesheets/Footer.css'
import githubLogo from '../images/github-logo.png'

const Footer = () => {
    return (
        <div id='footer'>
            <p id='footer-text'>Developed by Mark Pieciak</p>
            <a href='https://github.com/mpieciak18/memory-card-game'>
                <img src={githubLogo} id='github-logo' />
            </a>
        </div>
    )
}

export default Footer