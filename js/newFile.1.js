// handel clicking on letters
document.addEventListener("click", (e) => {
  if (e.target.className === "letter-box") {
    e.target.classList.add("clicked");

    //  get clicked letter
    let clickedLetter = e.target.innerHTML.toLowerCase();
    // console.log(clickedLetter);
    // the chonen word
    let choneWord = Array.from(randomValueWord.toLowerCase());

    choneWord.forEach((wordLetter, wordIndex) => {
      // if the clicked letter equal to on of the chone word letter
      if (clickedLetter == wordLetter) {
        console.log(`found at index letter ${wordIndex}`);
      }
    });
  }
});
