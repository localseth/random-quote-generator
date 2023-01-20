/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community

/*** 
 * Collection of quotes organized as objects inside an array
***/
const quotes = [
  {
   quote: 'Not all those who wander are lost',
   source: 'J.R.R. Tolkien',
   citation: 'The Fellowship of the Ring',
   year: 'Pub. 1954',
   tag: 'literature'
  },
  {
    quote: "When two people meet, each one is changed by the other so you've got two new people.",
    source: 'John Steinbeck',
    tag: 'literature'
   },
   {
    quote: "Let's jump this jump",
    source: 'Rod Kimble (Stuntman Extraordinaire)',
    citation: 'Hot Rod',
    year: 2007,
    tag: 'Instant Classics'
   },
   {
    quote: 'He who is not contented with what he has, would not be contented with what he would like to have.',
    source: 'Socrates',
    tag: 'philosophy'
   },
   {
    quote: 'Only those who will risk going too far can possibly find out how far one can go.',
    source: 'T.S. Eliot',
    citation: 'Preface to <i>Transit of Venus</i> by Harry Crosby',
    year:  'Pub. 1931',
    tag: 'literature'
   }
]

/***
 * `getRandomQuote` function chooses a random object from the 'quotes' array and returns it
***/

function getRandomQuote (arr){
  randomNumber = Math.floor(Math.random() * arr.length);
  console.log(randomNumber, arr[randomNumber]);
  return arr[randomNumber];
}

getRandomQuote(quotes);

/***
 * `printQuote` function targets the properties inside the 'quotes' array and interpolates them inside HTML tags
 * It then searches for additional properties (citation and year) and adds those to the quoteHTML string
 * Finally it closes the HTML code with a closing </p> tag, logs the quote to the console, then returns the entire quoteHTML string
***/

function printQuote () {
  let randomQuote = getRandomQuote(quotes);
  let quoteHTML = `
  <p class="quote">${randomQuote.quote}</p>
  <p class="source">${randomQuote.source}`;
  if (randomQuote.citation) {
    quoteHTML += `<span class="citation">${randomQuote.citation}</span>`
  }
  if (randomQuote.year){
    quoteHTML += `<span class="year">${randomQuote.year}</span>`
  }
  if (randomQuote.tag){
    quoteHTML += `<span class="tag">${randomQuote.tag}</span>`
  }
  quoteHTML += "</p>";
  console.log(quoteHTML);
  return document.getElementById('quote-box').innerHTML = quoteHTML;
}

/***
 * Assign the "Show another quote" button to a variable in order to simplify the code for the
 * automatic background color changer and interval timer
***/
const newQuote = document.getElementById('load-quote');

/***
 * function to change background color
***/
const randomValue = () => Math.floor(Math.random() * 256);

function randomColor() {
  let color= `rgb( ${randomValue()}, ${randomValue()}, ${randomValue()})`
  return color;
}

newQuote.addEventListener("click", () => {
  const body = document.body;
  body.style.background = randomColor();
});

/***
 * function to automatically refresh the quote
***/
function clickNew () {
  newQuote.click();
}

const freshQuote = setInterval(clickNew, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);