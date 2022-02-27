var previousTic = "X";

var gameState = ["", "", "", "", "", "", "", "", ""];

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function ticTacToe(ev) {
    if (ev.innerHTML == "") {
        if (previousTic == "X") {
            ev.innerHTML = "0";
            previousTic = "0";
            gameState[ev.getAttribute("data-index")] = "0";
        } else {
            ev.innerHTML = "X";
            previousTic = "X";
            gameState[ev.getAttribute("data-index")] = "X";
        }
        checkWinner()
    }
}


function checkWinner() {
    var isWinner = false;
    for (i = 0; i <= winningConditions.length; i++) {
        var winningCondition = winningConditions[i];
        var a = gameState[winningCondition[0]];
        var b = gameState[winningCondition[1]];
        var c = gameState[winningCondition[2]];

        if (a === '' || b === '' || c === '') {
            continue;
        }

        if (a == b && b == c) {
            isWinner = true;
            break;
        }
    }

    if (isWinner) {
        document.getElementById("winnerMSG").innerHTML = "Winner"
    }
}