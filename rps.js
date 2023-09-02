// Get DOM(document object model) elements
const computerChoiceDisplay = document.getElementById('computer_choice')
const userChoiceDisplay = document.getElementById('user_choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('.choices button img')

// Initialize variables
let userChoice
let computerChoice
let result

// Initialize scores
let userScore = 0;
let computerScore = 0;

// Add click event listeners to the possible choices
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    // Get user's choice
    userChoice = e.target.parentNode.id
    userChoiceDisplay.innerHTML = userChoice

    // Generate computer's choice and determine the result
    generateComputerChoice()
    getResult()
}))

// Function to generate computer's choice
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 //or you can use possibleChoices.length
    
    if (randomNumber === 1) {
        computerChoice = 'Rock'
    }

    if (randomNumber === 2) {
        computerChoice = 'Scissors'
    }
    
    if(randomNumber === 3) {
        computerChoice ='Paper'
    }

    // Display computer's choice
    computerChoiceDisplay.innerHTML = computerChoice 
}

// Function to update the score display
function updateScoreDisplay() {
    const userScoreCornerDisplay = document.getElementById('user_score_corner');
    const computerScoreCornerDisplay = document.getElementById('computer_score_corner');
    
    // Update score displays
    userScoreCornerDisplay.textContent = userScore;
    computerScoreCornerDisplay.textContent = computerScore;
}

// Initialize the score display
updateScoreDisplay();

// Function to determine the result
function getResult() {
    let resultColor = '';
    let resultText = '';

    if (computerChoice === userChoice) {
        resultColor = "#e5e5e5";
        resultText = "It's a DRAW";
    } else if (
        (computerChoice === 'Rock' && userChoice === 'Paper') || 
        (computerChoice === 'Paper' && userChoice === 'Scissors') ||
        (computerChoice === 'Scissors' && userChoice === 'Rock')
    ) {
        resultColor = "#cefdce";
        resultText = "YOU WIN";
        userScore++;
    } else {
        resultColor = "#ffdde0";
        resultText = "YOU LOSE";
        computerScore++;
    }

    // Apply result color and text
    resultDisplay.style.backgroundColor = resultColor;
    resultDisplay.style.color = "#ffffff"; // Default text color
    
    // Set specific text color based on result color
    if (resultColor === "#e5e5e5") {
        resultDisplay.style.color = "#595959"; // For gray background
    } else if (resultColor === "#cefdce") {
        resultDisplay.style.color = "#07ab07"; // For green background
    } else if (resultColor === "#ffdde0") {
        resultDisplay.style.color = "#cc0000"; // For red background
    }

    // Display the result text
    resultDisplay.innerHTML = resultText;

    // Update the score display
    updateScoreDisplay();
}









