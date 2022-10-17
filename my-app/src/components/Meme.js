import React from "react"
import memesData from "../memeData"
import Logo from "../images/logo1.png"

export default function Meme() {
    // let url
    // 
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1bij.jpg"
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    const [memeImage, setMemeImage] = React.useState("")
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        // console.log(url)
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
            <img src={meme.randomImage} />
        </main>
    )
}
// ternary: let check = isFavourite ? "Yes" : "No"