import React from "react"
import Logo from "../images/logo1.png"

export default function Meme() {
    function getMemeImage() {
        console.log("Clicked")
    }
    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    classname="form--input"
                />
                <input
                    type="text"
                    placeholder="Buttom-text"
                    classname="form--input"
                />

                <button type="submit" name="value" classname="form--button"
                    onClick="getMemeImage()" >
                    Get a new meme image
                </button>
            </div>
        </main>
    )
}