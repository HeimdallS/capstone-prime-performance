import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {QUOTE_URL} from '../utils'

function HomePage() {
    // const [author, setAuthor] = useState("")
    // const [quote, setQuote] = useState("")

    // // const randomNumberGenerator = max => {
    // //     return Math.floor(Math.random() * max);
    // // }

    // // const setRandomQuote = list => {
    // //     let randomIndex = randomNumberGenerator(list.length);
    // //     while (list[randomIndex].quote === quote.quote) {
    // //         randomIndex = randomNumberGenerator(list.length);
    // //     }
    // //     setQuote(quotesList[randomIndex])
    // // }

    // useEffect(() => {

    //     // setError({status:false, message:""}); 
    //     // if (quotesList.length === 0) {
    //         fetch("http://api.quotable.io/random")
    //         .then(res => res.json())
    //         .then(
    //             (quote) => {
    //             setQuote(quote.content)
    //             setAuthor(quote.author)
    //             console.log(quote)
    //         })
    //     },[]); 

    // const fetchNewQuote = () => {
    //     fetch("http://api.quotable.io/random")
    //     .then(res => res.json())
    //     .then(
    //         (quote) => {
    //         setQuote(quote.content)
    //         setAuthor(quote.author)
    //         console.log(quote)
    //     },[]);

    return (
        <div>
            <h1>Let's Get to Work</h1>
            {/* <div className="home__quote-container">
                <h2>{quote}</h2>
                <h3>{author}</h3>
            </div>
            <button className="home__button" onClick={() => fetchNewQuote}>Motivate Me</button> */}
        </div>
    )
}

export default HomePage
