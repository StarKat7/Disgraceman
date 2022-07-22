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
const flameEl = document.getElementById("flame-box");

//  Event listeners
alphaButtonEl.addEventListener("click", knightsLetter);

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
    // for (button of alphaButtonEl) {
    //     if (button.className !== "active") {
    //         button.className = "active";
    //     }
    // }
    //  Deactivate and darken replay button
    //  Reset victory status
    victory = null;
    //  Reset gameEnd to false
    gameEnd = false;
    render();
}

function render() {
    //  Changes the page to match the state changes
    //  Changes to knightsWord
    knightsWordEl.innerHTML = knightsWord;
    //  Changes to Knight in the Fire
    if (failCount === 0) {
        
    }
}

function knightsLetter(e) {
    //  Compares the knight's letter with the Wyrm's word and sees if it's in there, then updates the value of knightsWord if so. If not, failCount increases by 1.
    if (e.target.tagName !== "BUTTON") {
        return;
    }
    let letter = e.target.innerText;
    let stringArray = knightsWord.split();
    console.log(letter, stringArray);
    if (wyrmsWord.includes(letter)) {
        for (let i = 0; i < wyrmsWord.length; i++) {
            if (wyrmsWord[i] === letter) {
                knightsWord[i] = letter;
            }
        }
    } else {
        failCount++;
    }
    render();
}

function knightsHiddenWord() {
    //  Underscores are used to replace the characters in the wyrmsWord
    let hiddenWord = "";
    console.log(wyrmsWord);
    for (let i = 0; i < wyrmsWord.length; i++) {
        hiddenWord += "_";
        console.log(hiddenWord);
    }
    return hiddenWord;
}

function wyrmChooses() {
    //  The Words Wyrm chooses his secret word
    return wyrmWords[Math.floor(Math.random() * wyrmWords.length)].word;
}