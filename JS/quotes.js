const quotes = [
    { 
    quote: "The way to get started is to quit talking and begin doing",
    author: "Walt Disney"
},  { 
    quote: "Life is what happens when you're busy making other plans",
    author: "John Lennon"
},  { 
    quote: "The only person you are destined to become is the person you decide to be",
    author: "Ralph Waldo Emerson"
},  { 
    quote: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller"
},  { 
    quote: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins"
},  { 
    quote: "Life is made of ever so many partings welded together.",
    author: "Charles Dickens"
},  { 
    quote: "Success is walking from failure to failure with no loss of enthusiasm.",
    author: "Winston Churchill"
},  { 
    quote: "You miss 100% of the shots you don't take. -",
    author: "Wayne Gretzky"
},  { 
    quote: "Nothing is impossible, the word itself says, ‘I'm possible!'",
    author: "Audrey Hepburn"
},  { 
    quote: "Dreaming, after all, is a form of planning.",
    author: "Gloria Steinem"
},
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText =  todaysQuote.quote;
author.innerText = todaysQuote.author;