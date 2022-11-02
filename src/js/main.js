

class Square {
    constructor (color1, color2, id) {
        this.id = id;
        this.color1 = color1;
        this.color2 = color2;
    }
}

let squares = [];

for (let i = 0; i < 9; i++) {
    let newSquare = new Square ("red", "green", (i + 1));
    squares.push(newSquare);
} 

function handleClick(square) {
    console.log("Du klickade på ruta nummer " + square.id);
    document.getElementById("square" + (square.id)).style.backgroundColor = "red"; 
}


for (let i = 0; i < squares.length; i++) {
    let square = document.createElement("div");
    square.id = "square" + (i + 1);
    square.innerHTML = i + 1;
    document.body.appendChild(square);

    square.addEventListener ("click", () => {
        handleClick(squares[i])
    })
}