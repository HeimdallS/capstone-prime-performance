import React, { useState, useEffect } from 'react';
import './HomePage.scss';

function HomePage() {

    const [author, setAuthor] = useState("")
    const [quote, setQuote] = useState("")

    useEffect(() => {
        fetch("http://api.quotable.io/random")
        .then(res => res.json())
        .then(
            (quote) => {
            setQuote(quote.content)
            setAuthor(quote.author)
            }
        )
    },[]); 

    let fetchNewQuote = () => {
        fetch("http://api.quotable.io/random")
        .then(res => res.json())
        .then(
            (quote) => {
            setQuote(quote.content)
            setAuthor(quote.author)
            }
        )
    }

    return (
        <div className="home">
            <h1 className="home__title">Let's Get to Work</h1>
            <div className="home__quote-container">
                <div className="home__quote-text-box">
                    <h2 className="home__quote">{quote}</h2>
                </div>
                <h3 className="home__author">-{author}</h3>
                <button className="home__button" onClick={fetchNewQuote}>Motivate Me</button>
            </div>
        </div>
    )
}

export default HomePage
