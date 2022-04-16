const quotes = [
 {
     quote: "Take the diplomacy out of war and the thing would fall flat in a week.",
     author: "Will Rogers",
 },
 {
    quote: "Technological progress is like an axe in the hands of a pathological criminal.",
    author: "Albert Einstein",
 }
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;