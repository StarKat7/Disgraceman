console.log("Finding dragons...");

//  This needs to be an array of objects that contains the secret word and its definition(to be given when the player wins)
const wyrmWords = [
    {word: "BUMFUZZLE", definition: "to confuse, to perplex, to fluster"},
    {word: "CATTYWAMPUS", definition: "when something is askew or awry" },
    {word: "TARADIDDLE", definition: "lies or pretentious nonsense"},
    {word: "SNICKERSNEE", definition: "a large knife"},
    {word: "WIDDERSHINS", definition: "to move in a left-handed or contrary direction"},
    {word: "COLLYWOBBLES", definition: "a bellyache"},
    {word: "GUBBINS", definition: "bits and pieces"},
    {word: "BROUHAHA", definition: "a hubbub or uproar"},
    {word: "BUMBERSHOOT", definition: "an umbrella"},
    {word: "LOLLYGAG", definition: "to dawdle, or to fool around and waste time"},
    {word: "FLIBBERTIGIBBET", definition: "a silly flighty person"},
    {word: "MALARKEY", definition: "insincere or foolish talk"},
    {word: "COMEUPPANCE", definition: "a deserved rebuke or penalty"},
    {word: "DONNYBROOK", definition: "a free-for-all or brawl"},
    {word: "SNOLLYGOSTER", definition: "a shrewd, unprincipled person"},
    {word: "ERINACEOUS", definition: "like or relating to the hedgehog"},
    {word: "BIBBLE", definition: "to drink liquor, especially continuously in small amounts"},
    {word: "NINCOMPOOP", definition: "a foolish or silly person"}
];

//  Need to define state variables...
//  The word the Wyrm picks
let wyrmsWord = "";
//  The word that will be filled in
let knightsWord = "";
//  For displaying the word on the page
let knightsSpacedWord = "";
//  The letter the knight picked
let knightsChoice = "";
//  How many times the knight has failed so far
let failCount;
//  win/lose
let victory;
//  Has the game ended?
let gameEnd;

//  Cached element selectors
//  The letter buttons
const alphaButtonEl = document.querySelector("#alphabuttons");
//  The replay button
const replayButtonEl = document.getElementById("replay");
//  The Knight's Word panel
const knightsWordEl = document.getElementById("knights-word");
//  The dragon's flame(where the knight goes)
const knightEl = document.getElementById("knight");

//  Event listeners
//  For picking letters
alphaButtonEl.addEventListener("click", knightsLetter);
//  For replay button
replayButtonEl.addEventListener("click", initialize);

initialize();
//  Functions
function initialize() {
    //  Initializes the board
    //  The Words Wyrm chooses a new word
    wyrmsWord = wyrmChooses();
    //  Hide the word for the knight
    knightsWord = knightsHiddenWord();
    //  Reset failCount to 0
    failCount = 0;
    //  Reset alphaButtons to active
    let buttons = alphaButtonEl.getElementsByTagName("button");
    for (button of buttons) {
        if (button.disabled === true) {
            button.disabled = false;
        }
    }
    //  Deactivate and darken replay button
    replayButtonEl.disabled = true;
    //  Reset victory status
    victory = null;
    //  Reset gameEnd to false
    gameEnd = false;
    render();
}

function render() {
    //  Changes the page to match the state changes
    //  Changes to knightsWord
    knightsWordEl.innerText = knightsSpacedWord;
    //  Changes to Knight in the Fire
    //  Grabbing the individual bits of the knight element
    let knightsBody = knightEl.getElementsByTagName("p");
    console.log(knightsBody);
    if (failCount === 0) {
        for (part of knightsBody) {
            part.style.display = "none";
        }
    } else if (failCount === 1) {
        knightsBody[0].style.display = "block";
    } else if (failCount === 2) {
        knightsBody[1].style.display = "block";
    } else if (failCount === 3) {
        knightsBody[2].style.display = "block"
    } else if (failCount === 4) {
        knightsBody[3].style.display = "block";
    } else if (failCount === 5) {
        knightsBody[4].style.display = "block";
    } else if (failCount === 6) {
        knightsBody[5].style.display = "block";
    }
}

function knightsLetter(e) {
    //  Compares the knight's letter with the Wyrm's word and sees if it's in there, then updates the value of knightsWord if so. If not, failCount increases by 1.
    if (e.target.tagName !== "BUTTON") {
        return;
    }   //  <-- Make it so the area around the buttons cannot be clicked.
    let letter = e.target.innerText;
    let stringArray = knightsWord.split("");
    //console.log(stringArray);
    if (wyrmsWord.includes(letter)) {
        for (let i = 0; i < wyrmsWord.length; i++) {
            if (wyrmsWord[i] === letter) {
                stringArray[i] = letter;
                //console.log(stringArray);
            } else {
                stringArray[i] = stringArray[i];
            }
        }
    } else {
        failCount++;
    }
    knightsWord = stringArray.join("");
    knightsSpacedWord = stringArray.join(" ");
    //  Now I need to make it so the button deactivates.
    e.target.disabled = true;
    //  Also if the failCount hits 6, that's game-over.
    if (failCount === 6) {
        victory = false;
        gameEnd = true;
    }
    //  And if there are no underscores remaining, the Knight wins!
    if (knightsWord === wyrmsWord) {
        victory = true;
        gameEnd = true;
    }
    //  If the game is over, activate the replay button and also deactivate all the remaining letter buttons
    if (gameEnd === true) {
        replayButtonEl.disabled = false;
        let buttons = alphaButtonEl.getElementsByTagName("button");
        for (button of buttons) {
            if (button.disabled === false) {
                button.disabled = true;
            }
        }
    }
    render();
}

function knightsHiddenWord() {
    //  Underscores are used to replace the characters in the wyrmsWord
    let hiddenWord = "";
    let wordArray = [];
    console.log(wyrmsWord);
    for (let i = 0; i < wyrmsWord.length; i++) {
        hiddenWord += "_";
        wordArray.push("_");
        //console.log(hiddenWord);
    }
    knightsSpacedWord = wordArray.join(" ");
    return hiddenWord;
}

function wyrmChooses() {
    //  The Words Wyrm chooses his secret word
    return wyrmWords[Math.floor(Math.random() * wyrmWords.length)].word;
}