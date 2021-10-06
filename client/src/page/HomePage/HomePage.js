import React, { useState, useEffect } from 'react';
import './HomePage.scss';

function HomePage() {

    const [author, setAuthor] = useState("")
    const [quote, setQuote] = useState("")

    useEffect(() => {
        getQuote()
    }, []); 

    const getQuote = () => {
        const url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
        fetch(url)
        .then(res => res.json())
        .then(data => {
            let dataQuotes = data.quotes;
            let randomNum = Math.floor(Math.random() * dataQuotes.length);
            let randomQuote = dataQuotes[randomNum];

            setQuote(randomQuote.quote)
            setAuthor(randomQuote.author)
        })  
    }

    const fetchNewQuote = () => {
        getQuote();
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
