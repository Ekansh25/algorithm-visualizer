
var arr = [124, 95, 42, 150, 63, 84, 40, 75, 98, 50, 55, 28, 83, 40, 73, 150, 84, 120, 119, 65, 89, 250, 200, 243, 168, 90, 105, 75, 140,];
var N;


function createChessboard() {
    const chessboard = document.getElementById("chessboard");
    // Change the grid-template-columns value
    chessboard.style.gridTemplateColumns = "repeat(" + N + ", 1fr)";
    chessboard.style.gridTemplateRows = "repeat(" + N + ", 1fr)";
    for (let row = 0; row < N; row++) {
        for (let col = 0; col < N; col++) {
            const square = document.createElement("div");
            square.className = "square";
            square.classList.add((row + col) % 2 === 0 ? "white" : "black");
            chessboard.appendChild(square);
        }
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function handleKeyPress(event) {
    // Check if the pressed key is Enter (key code 13)
    if (event.key === 'Enter') {
        // Get the input element and its value
        var inputElement = document.getElementById('styledInput');
        var inputValue = inputElement.value;
        N = parseInt(inputValue, 10);
        // Clear the input for the next entry
        inputElement.value = '';
        createChessboard();
    }
}



