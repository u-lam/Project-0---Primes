// VARIABLES
let count = 0;
const lookupPrimes = [ 2,  3,  5,  7, 11, 13, 17, 19,
    23, 29, 31, 37, 41, 43, 47, 53,
    59, 61, 67, 71, 73, 79, 83, 89, 97 ]


// BUTTONS & EVENTS

let btn = document.getElementById("btnPlay");
btn.addEventListener("click", init);
let playGame = document.getElementById("game");
let squares = document.querySelectorAll("td");


//NOT SURE HOW TO PUT ALL ROUNDS TOGETHER IN ONE GAME CONST ??
const game = {
   
}



const roundOne = {
    isPrimeSet: [],
    isNotPrimeSet: [],
    boardPrimes: [],
    boardNotPrimes: [],
    boardComplete: [],
    checkPrime: function(x) {
        for (i = 2; i < x; i++) {  
            if (x % i === 0) {  
                return false;
            } 
        }
        return true;
    },
    rOneGenerateNum: function() {
        for (let j = 2; j <= 25; j++) {
            if (this.checkPrime(j) === true) {
                this.isPrimeSet.push(j);
            } else {
                this.isNotPrimeSet.push(j);
            }
        }
    },
    assignNum: function() {
        for (let i = 0; i < 5; i++) {
            let x = Math.floor(Math.random() * this.isPrimeSet.length);
            this.boardPrimes.push(this.isPrimeSet[x]);
            this.isPrimeSet.splice(x, 1);
        }
        for (let j = 0; j < 11; j++) {
            let y = Math.floor(Math.random() * this.isNotPrimeSet.length);
            this.boardNotPrimes.push(this.isNotPrimeSet[y])
            this.isNotPrimeSet.splice(y, 1);
        }
        this.boardComplete = this.boardNotPrimes.concat(this.boardPrimes);
        this.boardComplete.sort(this.sortfunc);  
    },
    sortfunc: function(a, b) {
        return 0.5 - Math.random();
    },
    fillBoard: function() {
        for (let i = 0; i < 16; i++) {
            document.getElementById(`sq${i}`).innerText = this.boardComplete[i]; 
            document.getElementById(`sq${i}`).setAttribute('value', this.boardComplete[i]);
        }
    } 
}

const roundTwo = {
    isPrimeSet: [],
    isNotPrimeSet: [],
    boardPrimes: [],
    boardNotPrimes: [],
    boardComplete: [],
    checkPrime: function(x) {
        for (i = 2; i < x; i++) {  
            if (x % i === 0) {  
                return false;
            } 
        }
        return true;
    },
    generateNum: function() {   // different for each round
        for (let j = 2; j <= 50; j++) {
            if (this.checkPrime(j) === true) {
                this.isPrimeSet.push(j);
            } else {
                this.isNotPrimeSet.push(j);
            }
        }
    },
    assignNum: function() {   // different for each round
        for (let i = 0; i < 6; i++) {
            let x = Math.floor(Math.random() * this.isPrimeSet.length);
            this.boardPrimes.push(this.isPrimeSet[x]);
            this.isPrimeSet.splice(x, 1);
        }
        for (let j = 0; j < 10; j++) {
            let y = Math.floor(Math.random() * this.isNotPrimeSet.length);
            this.boardNotPrimes.push(this.isNotPrimeSet[y])
            this.isNotPrimeSet.splice(y, 1);
        }
        this.boardComplete = this.boardNotPrimes.concat(this.boardPrimes);
        this.boardComplete.sort(this.sortfunc);  
    },
    sortfunc: function(a, b) {
        return 0.5 - Math.random();
    },
    fillBoard: function() {
        for (let i = 0; i < 16; i++) {
            document.getElementById(`sq${i}`).innerText = this.boardComplete[i]; 
            document.getElementById(`sq${i}`).setAttribute('value', `${this.boardComplete[i]}`);
        }
    }
}
// roundTwo.generateNum();
// roundTwo.assignNum();
// roundTwo.fillBoard();
// console.log(roundTwo.boardComplete);

const roundThree = {
    isPrimeSet: [],
    isNotPrimeSet: [],
    boardPrimes: [],
    boardNotPrimes: [],
    boardComplete: [],
    checkPrime: function(x) {
        for (i = 2; i < x; i++) {  
            if (x % i === 0) {  
                return false;
            } 
        }
        return true;
    },
    generateNum: function() {  // different for each round
        for (let j = 2; j <= 100; j++) {
            if (this.checkPrime(j) === true) {
                this.isPrimeSet.push(j);
            } else {
                this.isNotPrimeSet.push(j);
            }
        }
    },
    assignNum: function() {  // different for each round
        for (let i = 0; i < 7; i++) {
            let x = Math.floor(Math.random() * this.isPrimeSet.length);
            this.boardPrimes.push(this.isPrimeSet[x]);
            this.isPrimeSet.splice(x, 1);
        }
        for (let j = 0; j < 9; j++) {
            let y = Math.floor(Math.random() * this.isNotPrimeSet.length);
            this.boardNotPrimes.push(this.isNotPrimeSet[y])
            this.isNotPrimeSet.splice(y, 1);
        }
        this.boardComplete = this.boardNotPrimes.concat(this.boardPrimes);
        this.boardComplete.sort(this.sortfunc);  
    },
    sortfunc: function(a, b) {
        return 0.5 - Math.random();
    },
    fillBoard: function() {
        for (let i = 0; i < 16; i++) {
            document.getElementById(`sq${i}`).innerText = this.boardComplete[i]; 
            document.getElementById(`sq${i}`).setAttribute(value, `${this.boardComplete[i]}`);
        }
    }
}
// roundThree.generateNum();
// roundThree.assignNum();
// roundThree.fillBoard();
// console.log(roundThree.boardComplete);


// ---------->   RUN FULL GAME HERE   <-----------

function init() {
    playGame.style.display = (playGame.dataset.toggled ^= 1) ? "block" : "none";;
    document.getElementById("page0").remove();
    roundOne.rOneGenerateNum();
    roundOne.assignNum();
    roundOne.fillBoard();
    checkForPrime();
}

function nxtRound() {
    roundTwo.generateNum();
    roundTwo.assignNum();
    roundTwo.fillBoard();
    
   
}



// FUNCTIONS

//add all items selected to an array and check it against 

//START WORK HERE!!!
function checkForPrime() {
    document.getElementById('game-board').addEventListener('click', function(event){
        console.log(event.target.getAttribute('value'))
            // console.log(event.target.getAttribute('value'))
            if(lookupPrimes.includes(parseInt(event.target.getAttribute('value')))) {
                
                count++ ; 
                console.log(count);
                
                //gray out button and disable it from being clicked
                // event.target.removeAttribute("disabled");

                win();
           } else {
                alert("You selected a number that is not prime. Game over!")
                location.reload();
           }
       
          
    })
    
}

function win() {
    if (count === 5) {
        alert("Nice! Click OK to move on to the next round.");
        count = 0
        nxtRound();
    }
}

