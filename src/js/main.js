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

let plays = 0;


let playerOnePlays = [];
let playerTwoPlays = [];

for(let i = 0; i < 9; i++){
    playerOnePlays.push(false);
    playerTwoPlays.push(false);
}

const winConditions = [
    [true, true, true, false, false, false, false, false, false],
    [false, false, false, true, true, true, false, false, false],
    [false, false, false, false, false, false, true, true, true],
    [true, false, false, true, false, false, true, false, false],
    [false, true, false, false, true, false, false, true, false],
    [false, false, true, false, false, true, false, false, true],
    [true, false, false, false, true, false, false, false, true],
    [false, false, true, false, true, false, true, false, false]
];



function handleClick(square) {
        if(plays % 2 === 0){
            playerOnePlays.splice((square.id - 1), 1, true);
            document.getElementById("square" + (square.id)).style.backgroundColor = "red";
            console.log("Röd klickade på ruta " + square.id);
                for(let i = 0; i < winConditions.length; i++){
                    if(JSON.stringify(playerOnePlays)===JSON.stringify(winConditions[i])){
                        alert("Spelare ett (röd) vann!");
                    }
                }

            plays++;
        }
        else {
            playerTwoPlays.splice((square.id - 1), 1, true);
            document.getElementById("square" + (square.id)).style.backgroundColor = "green";
            console.log("Grön klickade på ruta " + square.id);
                for(let i = 0; i < winConditions.length; i++){
                    if(JSON.stringify(playerTwoPlays)===JSON.stringify(winConditions[i])){
                        alert("Spelare två (grön) vann!")
                    }
                }

            plays++;
        }

        if (plays === 9) {
            alert("Det blev oavgjort!")
        }
}


// Disregard:

// Lägg till spelarnas drag som lista (alla false först) - när spelaren klickar en viss ruta byts den till true 
// Lägg till winning conditions/end conditions som görs genom att loopa genom spelarnas gjorda drag i separat funktion

// Winningconditions = på i-nummer
// 0 1 2, 3 4 5, 6 7 8,
// 0 3 6, 1 4 7, 2 5 8,
// 0 4 8, 2 4 6.

// function handleClick(square) {
//     if (plays % 2 === 0) {
//         document.getElementById("square" + (square.id)).style.backgroundColor = "red";
//         console.log("Röd klickade på ruta " + square.id);
//         playerOnePlays.splice((square.id - 1), 1, true);
//         console.log(playerOnePlays);
//     } else if (plays % 2 === 1) {
//         document.getElementById("square" + (square.id)).style.backgroundColor = "green";
//         console.log("Grön klickade på ruta " + square.id);
//         playerTwoPlays.splice((square.id - 1), 1, true);
//         console.log(playerTwoPlays);
//     }
//     plays += 1;
//     gameCheck();
// }

// let announcerBox = document.createElement("span");
// announcerBox.innerHTML = ""
// document.body.appendChild(announcerBox);

// let playerOnePlays = [false, false, false, false, false, false, false, false, false];
// let playerTwoPlays = [false, false, false, false, false, false, false, false, false];