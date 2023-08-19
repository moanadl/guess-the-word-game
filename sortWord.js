// ----- Arrays of secret words available -----
let fruits = [
    'TANGERINE', 'RASPBERRY', 'APRICOT', 'BLUEBERRY', 'FIG', 'PEACH', 'STARFRUIT', 'PASSION-FRUIT', 'PEAR',
    'COCONUT', 'PUMPKIN', 'OLIVE', 'TAMARIND', 'PLUM', 'LYCHEE', 'PERSIMMON', 'JACKFRUIT', 'DATES', 'PHYSALIS',
    'ACEROLA', 'MANGABA', 'CAJU', 'CAJA', 'SERIGUELA', 'SOURSOP', 'CUSTARD-APPLE', 'MANGABA',
    'UMBU', 'JENIPAPO', 'JABUTICABA', 'CACAO', 'PEQUI', 'GUAVA'
];

let animals = [
    'LION', 'MEERKAT', 'POSSUM', 'ELEPHANT', 'GIRAFFE', 'WHALE', 'SHARK', 'DOLPHIN', 'EAGLE', 'SNAKE', 'ALLIGATOR',
    'LIZZARD', 'RABBIT', 'FROG', 'MOUSE', 'MONKEY', 'BEAR', 'DEER', 'ZEBRA', 'DONKEY', 'SQUIRREL', 'GOAT',
    'RHINOCEROS', 'HIPPOPOTAMUS', 'HEDGEHOG', 'CAMEL', 'HORSE', 'SHEEP', 'CHICKEN', 'DUCK', 'PANDA', 'ARMADILLO',
    'FLAMINGO', 'ANTELOPE', 'SLOTH', 'TIGER', 'SWAN', 'BEAVER', 'BUTTERFLY', 'SEAL', 'TERMITE', 'WOLF', 'SHRIMP',
    'SNAIL', 'SCORPION', 'TURTLE', 'KANGAROO', 'RACCOON', 'OTTER', 'WOMBAT'
];

let bands = [
    'ARCTIC-MONKEYS', 'THE-BEATLES', 'THE-BEACH-BOYS', 'SKANK', 'JOTA-QUEST', 'TAYLOR-SWIFT', 'BEYONCE', 'RIHANNA',
    'BILLIE-EILISH', 'MICHAEL-JACKSON', 'STEVIE-WONDER', 'MICHAEL-BUBLE', 'BRUNO-MARS', 'JASON-MARS', 'ED-SHEERAN',
    'RED-HOT-CHILLI-PEPPERS', 'DIRE-STRAITS', 'ROLLING-STONES', 'AEROSMITH', 'NOVOS-BAIANOS', 'ROUPA-NOVA', 'NX-ZERO',
    'FRESNO', 'HARRY-STYLES', 'GILSONS', 'IVETE SANGALO', 'THE-KILLERS', 'ONE-DIRECTION', 'FALL-OUT-BOY', 'BON-JOVI', 
    'THE-OFFSPRING', 'GREEN-DAY', 'OLIVIA-RODRIGO', 'PARAMORE', 'MCFLY', 'JONAS-BROTHERS', 'RISE-AGAINST', 
    'SHAWN-MENDES', 'FREJAT', 'NANDO-REIS', 'BELCHIOR', 'CHICO-BUARQUE', 'ALCIONE', 'BAYANASYSTEM', 'GILBERTO-GIL',
    'PITTY', 'SIMPLE-PLAN', 'TURMA-DO-PAGODE', 'EXALTASAMBA', 'MILEY-CYRUS'
];

let random = fruits.concat(animals).concat(bands);

// ----- Uses the length of the array to generate a random number (index) and define a secret word -----
// ----- Calls the funciton 'startGame' sending the secret word as parameter -----
function sortSecretWord () {
    
    let numberOfWords;
    let indexOfArray;
    let secretWord;

    if (chosenTheme === 'Fruits') {
        numberOfWords = fruits.length;
        indexOfArray = parseInt(((Math.random() * (numberOfWords))));
        secretWord = fruits[indexOfArray];
        console.log(secretWord)
    } else if (chosenTheme === 'Animals') {
        numberOfWords = animals.length;
        indexOfArray = parseInt(((Math.random() * (numberOfWords))));
        secretWord = animals[indexOfArray];
        console.log(secretWord)
    } else if (chosenTheme === 'Bands/Singers') {
        numberOfWords = bands.length;
        indexOfArray = parseInt(((Math.random() * (numberOfWords))));
        secretWord = bands[indexOfArray];
        console.log(secretWord)
    } else if (chosenTheme === 'Random') {
        numberOfWords = random.length;
        indexOfArray = parseInt(((Math.random() * (numberOfWords))));
        secretWord = random[indexOfArray];
        console.log(secretWord)
    }

    startGame(secretWord)
}

