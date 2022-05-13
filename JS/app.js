var submitButton = document.getElementById("submit-button");

var ratingState = document.getElementById("rating-state");

var thankYouState = document.getElementById("thank-you-state");

submitButton.addEventListener("click", displayFunction);

function displayFunction(){
    ratingState.classList.toggle("hidden");
    thankYouState.classList.toggle("hidden");
}


var scoreOne = document.getElementById("one");
var scoreTwo = document.getElementById("two");
var scoreThree = document.getElementById("three");
var scoreFour = document.getElementById("four");
var scoreFive = document.getElementById("five");
var ratingScore = document.getElementById("score");

scoreOne.addEventListener("click", rateOne);

function rateOne(){
    ratingScore.textContent = "You selected 1 out of 5";
}

scoreTwo.addEventListener("click", rateTwo);

function rateTwo(){
    ratingScore.textContent = "You selected 2 out of 5";
}

scoreThree.addEventListener("click", rateThree);

function rateThree(){
    ratingScore.textContent = "You selected 3 out of 5";
}

scoreFour.addEventListener("click", rateFour);

function rateFour(){
    ratingScore.textContent = "You selected 4 out of 5";
}

scoreFive.addEventListener("click", rateFive);

function rateFive(){
    ratingScore.textContent = "You selected 5 out of 5";
}