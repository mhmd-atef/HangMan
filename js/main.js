// letters
const letters = "abcdefghijklmnopqrstuvwxyzأبتثجحخدذرزسشصضطظعغفقكلمنهوي";
// get array from letters
let lettersArray = Array.from(letters);
// console.log(lettersArray);

// select letters container
let lettersContainer = document.querySelector(".letters");

// generate letters
lettersArray.forEach((letter) => {
  let span = document.createElement("span");
  // create letter text node
  let theLetter = document.createTextNode(letter);
  // append the letter to span
  span.appendChild(theLetter);

  // add class to span
  span.className = "letter-box";

  //append span to the letters container
  lettersContainer.appendChild(span);
});

//object of words + categories
const words = {
  programming_Language: [
    "php",
    "python",
    "javascript",
    "flutter",
    "mysql",
    "html",
    "css",
  ],
  Spain_Club: [
    " Real Madrid",
    "Barcelona",
    "Atletico Madrid ",
    "Valencia",
    "Athletic Bilbao",
    "Real Betis",
    "Villarreal",
  ],
  English_Club: [
    "Newcastle United",
    "Arsenal",
    "Manchester United",
    "Chelsea",
    "Liverpool",
    "Aston Villa",
    "Everton",
    "Man City",
  ],
  movies: [
    "Coco",
    "Scream",
    "Batman",
    "Up",
    "Moana",
    "Us",
    "Annbelle",
    "Interstellar",
  ],
  player_manCity: [
    "Kyle Walker",
    "Rodri",
    "Haaland",
    "Kevin De Bruyne",
    "John Stones",
    "Bernardo Silva",
    "Jack Grealish",
    "Rúben Dias",
    "Doku",
    "Foden",
    "Ederson",
  ],
  player_Liverpool: [
    "Van Dijk",
    "Mohamed Salah",
    "Gomez",
    "Mac Allister",
    "Jota ",
    "Elliott",
    "Nunez",
    "Luiz Diaz",
    " Alexander Arnold",
  ],
  countries: ["Egypt", "Palestine", "Yemen", "Qatar", "Spain", "Italy"],
};
// get random property
let allkeys = Object.keys(words);
// console.log(allkeys);

// random number depend on keys length
let randomPropNumber = Math.floor(Math.random() * allkeys.length);
// console.log(randomPropNumber);

// category

let randomPropName = allkeys[randomPropNumber];
let randomPropValue = words[randomPropName];
// console.log(randomPropValue);

// random number depend on keys length

let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);
// console.log(randomValueNumber);

// the chosen word
let randomValueWord = randomPropValue[randomValueNumber];
// console.log(randomValueWord);

// set category info
document.querySelector(".game-info .category  span").innerHTML = randomPropName;

// select letters guess element
let LettersGuessContainer = document.querySelector(".letters-guess");

// convert chosen word to array
let LettersAndSpace = Array.from(randomValueWord);
// console.log(LettersAndSpace);

// create spans depand on word
LettersAndSpace.forEach((letter) => {
  // create empty span
  let emptySpan = document.createElement("span");

  // if letter is span
  if (letter === " ") {
    // add clase to the span
    emptySpan.className = "has-space";
  }
  // append span to the letters guess container
  LettersGuessContainer.appendChild(emptySpan);
});

//select guess spans
let guessSpan = document.querySelectorAll(".letters-guess span");

// set wrong attempts
let wrongAttempts = 0;

// select the draw element

let theDraw = document.querySelector(".hangman-draw");

// handel clicking on letters
document.addEventListener("click", (e) => {
  // set the chose status
  let theStatus = false;

  if (e.target.className === "letter-box") {
    e.target.classList.add("clicked");

    //  get clicked letter
    let clickedLetter = e.target.innerHTML.toLowerCase();
    // console.log(clickedLetter);

    let arrclickedLetter = Array.from(clickedLetter);
    // console.log(arrclickedLetter);

    // the chosen word
    let chosneWord = Array.from(randomValueWord.toLowerCase());
    console.log(chosneWord);

    chosneWord.forEach((wordLetter, wordIndex) => {
      // if the clicked letter equal to on of the chone word letter
      if (clickedLetter == wordLetter) {
        // set status to correct true
        theStatus = true;

        // loop on all spans
        guessSpan.forEach((span, spanIndex) => {
          if (wordIndex === spanIndex) {
            span.innerHTML = clickedLetter;
          }
        });
      }
    });

    // outside loop
    // if letter is wrong
    if (!theStatus) {
      // increase the wrong attempts
      wrongAttempts++;

      // add class wrong on thr draw element
      theDraw.classList.add(`wrong-${wrongAttempts}`);

      // play fail sound
      document.getElementById("fail").play();

      // check if there are no more att
      if (wrongAttempts === 8) {
        endGame();
        lettersContainer.classList.add("finished");
        //play gameOver sound
        document.getElementById("over").play();
      } else {
        // play success sound
        document.getElementById("success").play();
      }
    }
  }
});

// end game function
function endGame() {
  // creat popup div
  let div = document.createElement("div");
  // create text
  let divText = document.createTextNode(
    `Game Over, The Word Is "${randomValueWord}" `
  );
  // append text to div
  div.appendChild(divText);
  // add class to div
  div.className = "popup";
  // append to the body
  document.body.appendChild(div);
}
