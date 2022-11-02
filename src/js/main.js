class Square {
    constructor (id) {
        this.id = id;
    }
}

let squares = [];

for (let i = 0; i < 9; i++) {
    let newSquare = new Square (i + 1);
    squares.push(newSquare);
} 

for (let i = 0; i < squares.length; i++) {
    let square = document.createElement("div");
    square.id = "square" + (i + 1);
    square.classList = "square";
    square.innerHTML = i + 1;
    document.body.appendChild(square);

    square.addEventListener ("click", () => {
        handleClick(squares[i])
    })
}

// let announcerBox = document.createElement("span");
// announcerBox.innerHTML = ""
// document.body.appendChild(announcerBox);

let playerOnePlays = [];
let playerTwoPlays = [];
let plays = 0;

function handleClick(square) {
    if (plays % 2 === 0) {
        document.getElementById("square" + (square.id)).style.backgroundColor = "red";
        console.log("Spelare 1 klickade på ruta " + square.id);
        playerOnePlays.push(square.id);
        console.log(playerOnePlays);
    } else if (plays % 2 === 1) {
        document.getElementById("square" + (square.id)).style.backgroundColor = "green";
        console.log("Spelare 2 klickade på ruta " + square.id);
        playerTwoPlays.push(square.id);
        console.log(playerTwoPlays);
    }
    plays += 1;
    winCondition();
}

function winCondition() {
    if (playerOnePlays.includes()) {
        alert("Spelare 1 vann");
    }


}


// Lägg till spelarnas drag som lista (alla false först) - när spelaren klickar en viss ruta byts den till true 
// Lägg till winning conditions/end conditions som görs genom att loopa genom spelarnas gjorda drag i separat funktion

// Winningconditions = på i-nummer
// 0 1 2, 3 4 5, 6 7 8,
// 0 3 6, 1 4 7, 2 5 8,
// 0 4 8, 2 4 6.
