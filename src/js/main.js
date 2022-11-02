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

let plays = 0;

function handleClick(square) {
    if (plays % 2 === 0) {
        document.getElementById("square" + (square.id)).style.backgroundColor = "red";
        console.log("Spelare 1 klickade på ruta " + square.id);
    } else if (plays % 2 === 1) {
        document.getElementById("square" + (square.id)).style.backgroundColor = "green";
        console.log("Spelare 2 klickade på ruta " + square.id);
    }
    plays += 1;

    if (plays >= 9) {
        alert("Spelet är slut");
    }
}

// Lägg till spelarnas drag som lista
// Lägg till winning conditions/end conditions som görs genom att loopa genom spelarnas gjorda drag i separat funktion