var programming_languages = [
    "javascript",
    "java",
    "html",
    "css",
    "python",
    "mongodb",
    "json",
    "css",
    "c",
    "c#",
    "golang",
    "kotlin",
    "php",
    "sql",
    "ruby"
]

let answer = '';
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

function randomWord() {
    answer = programming_languages[Math.floor(Math.random() * programming_languages.length)];
    
}

function generateButton() {
     let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
        ` <button class="btn btn-lg btn-primary m-2" 
        id= '` + letter + `'
        onClick="handleGuess('` + letter + `')"
      >
        ` + letter + `
      </button>
   
        `).join('');
        document.getElementById('keyboard').innerHTML = buttonsHTML;
}

function handleGuess(choosenLetter) {
    guessed.indexOf(choosenLetter) === -1 ? guessed.push(choosenLetter) : null;
    document.getElementById(choosenLetter).setAttribute('disables', true);
    
    if(answer.indexOf(choosenLetter)>=0) {
        guessWord();
        checkIfGameWon();
    }

    else if (answer.indexOf(choosenLetter) === -1) {
            mistakes++;
            updateMistakes();
            checkIfGameLost();
            updateHangmanPicture();
    }
}

function updateHangmanPicture() {
    document.getElementById('hangmanPic').src = './images/' + mistakes + '.jpg';
}

function checkIfGameWon() {
    if (wordStatus === answer) {
        document.getElementById('keyboard').innerHTML = 'You Won!!!';
    }
}

function checkIfGameLost() {
    if (mistakes === maxWrong) {
        document.getElementById('wordSpotlight').innerHTML = 'The answer was: ' + answer;
        document.getElementById('keyboard').innerHTML = 'You Lost!!!';
        
    }
}

function guessWord() {
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter)>=0 ? letter : "_")).join(``);
    document.getElementById('wordSpotlight').innerHTML = wordStatus;
}

function updateMistakes() {
    document.getElementById('mistakes').innerHTML = mistakes;
}

function reset() {
    mistakes = 0;
    guessed = [];
    document.getElementById('hangmanPic').src = './images/0.jpg';
    randomWord();
    guessWord();
    updateMistakes();
    generateButton();
    
    

}

document.getElementById('maxWrong').innerHTML = maxWrong;
randomWord();
generateButton();
guessWord();