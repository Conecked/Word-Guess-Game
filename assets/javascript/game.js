// Create an array of words
const word = ['breaking', 'crew','mic', 'bars', 'beats','cipher','scratchin','golden'];
// Chose word randomly
let randomNum = Math.floor(Math.random() * word.length);
let choosenWord = word[randomNum];
let rightWord = [];
let wrongWord = [];
let underScore = [];
let guesses = [choosenWord];
let guessesLeft = [choosenWord];
console.log(choosenWord);


// DOM manip
let newUnder = document.getElementsByClassName('underscore');
let newRight = document.getElementsByClassName('rightGuess');
let newWrong = document.getElementsByClassName('wrongGuess');
let guessLeft = document.getElementsByClassName('guessesLeft');

// Create underscores based on length of word
let generateUnderscore = () => {
    for(let i = 0; i < choosenWord.length; i++) {
        underScore.push('_');
    }
    return underScore;
}

generateUnderscore();

// create a reset function to allow the game to restart after a player "wins" - I didn't
var reset = function () {
    choosenWord
    rightWord = [];
    wrongWord = [];
    underScore = [];

    generateUnderscore();
}
// Get users guess
document.addEventListener('keypress', (event) => {
    let keyword = String.fromCharCode(event.keyCode);
// if user guesses right
    if(choosenWord.indexOf(keyword) > -1) {
    // add to right words array
        rightWord.push(keyword);
    // replace underscore with right letter
        underScore[choosenWord.indexOf(keyword)] = keyword;
        newUnder[0].innerHTML = underScore.join(' ');
        newRight[0].innerHTML = rightWord;
    // checks to see if you user word matches guesses
        if(underScore.join('') == choosenWord) {
            alert('You Win!');
            console.log(rightWord);
            reset();
        }
    }
    // checks to see if user word is wrong - failed to create "guesses left"
    else {
        wrongWord.push(keyword);
        newWrong[0].innerHTML = wrongWord;
        guessLeft[0].innerHTML = 'you have ' + guessesLeft + 'guesses left.';
        console.log(wrongWord);
    }

    $("#letsPlay").click(function() {
        // Inside the on-click event...
        $('#game').reset();
    })
});



