console.log("Finding dragons...");

//  This needs to be an array of objects that contains the secret word and its definition(to be given when the player wins)
const wyrmWords = {
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
};

//  Need to define starting variables...
const knightsWord = "";
let knightsChoice = "";