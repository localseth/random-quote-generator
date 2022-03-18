/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community

/*** 
 * `quotes` array 
***/
const quotes = [
  {
   quote: 'Not all those who wander are lost',
   source: 'J.R.R. Tolkien',
   citation: 'The Fellowship of the Ring',
   year: 'Pub. 1954' 
  },
  {
    quote: "When two people meet, each one is changed by the other so you've got two new people.",
    source: 'John Steinbeck'
   },
   {
    quote: 'In the councils of government, we must guard against the acquisition of unwarranted influence, whether sought or unsought, by the military-industrial complex.',
    source: 'Dwight D. Eisenhower',
    citation: 'Farewell Address',
    year: 1961
   },
   {
    quote: 'He who is not contented with what he has, would not be contented with what he would like to have.',
    source: 'Socrates'
   },
   {
    quote: 'Only those who will risk going too far can possibly find out how far one can go.',
    source: 'T.S. Eliot',
    citation: 'Preface to <i>Transit of Venus</i> by Harry Crosby',
    year:  'Pub. 1931'
   }
]

/***
 * `getRandomQuote` function
***/

function getRandomQuote (arr){
  randomNumber = Math.floor(Math.random() * arr.length);
  console.log(randomNumber + ' ' + arr[randomNumber]);
  return arr[randomNumber];
}

getRandomQuote(quotes);

/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);