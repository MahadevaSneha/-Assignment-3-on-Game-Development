// Function to update the score
function updateScore(score) {
    const scoreElement = document.getElementById('score-board');
    scoreElement.textContent = score;
}
let score = 1;
updateScore(score);
const operatorButtons = document.querySelectorAll('#buttons img');
operatorButtons.forEach(button => {
    button.addEventListener('click', function() {
        score += 1;
        updateScore(score);
    });
});
document.getElementById('play-again-button').addEventListener('click', function() {
    window.location.href = 'index.html';
});
