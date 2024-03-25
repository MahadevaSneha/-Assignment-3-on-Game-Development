// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
const randomnum1 = Math.floor(Math.random() * 101);
const randomnum2 = Math.floor(Math.random() * 101);
document.getElementById('number1').textContent = randomnum1;
document.getElementById('number2').textContent = randomnum2;

// Iteration 3: Creating variables required to make the game functional
let number1, number2, number3 = 20;  
let operator;
let timer;

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
const number3Elem = document.getElementById('number3');

// Create a new div element for the timer
const timerDiv = document.createElement('div');
timerDiv.id = 'timer';
timerDiv.classList.add('flex-centered');
document.body.appendChild(timerDiv); 

// Iteration 5: Creating a randomise function to make the game functional
function randomiseNumber3() {
    number3 = Math.floor(Math.random() * 101);
    number3Elem.textContent = number3;
}

// Iteration 6: Making the Operators (button) functional
const operatorButtons = document.querySelectorAll('#buttons img');
operatorButtons.forEach(button => {
    button.addEventListener('click', function() {
        const operator = this.id;
        setOperator(operator);
        resetTimer(); 
    });
});

function setOperator(op) {
    operator = op;
    randomiseNumber3();
}

// Iteration 7: Making Timer functional
function startTimer() {
    updateTimer(); 
    timer = setInterval(() => {
        number3--;
        updateTimer(); 
        if (number3 === 0) {
            clearInterval(timer);
            window.location.href = 'gameover.html';
        }
    }, 1000);
}
function resetTimer() {
    number3 = 20;
    updateTimer(); 
}

// Function to update the timer display
function updateTimer() {
    timerDiv.textContent = number3; 
}
startTimer();
