import React from "react"
import Logo from "../images/logo1.png"

export default function Header() {
    return (
        <header className="header">
            <img className="logo" src={Logo} alt="LOGO" />
            <h2 className="header--title"> Meme Generator </h2>
            <h4 className="header--project"> React Course - Project 3</h4>

        </header>
    )
}