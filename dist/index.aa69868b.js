class Square {
    constructor(color1, color2, id){
        this.id = id;
        this.color1 = color1;
        this.color2 = color2;
    }
}
let squares = [];
for(let i = 0; i < 9; i++){
    let newSquare = new Square("red", "green", i + 1);
    squares.push(newSquare);
}
function handleClick(square) {
    console.log("Du klickade p\xe5 ruta nummer " + square.id);
    document.getElementById("square" + square.id).style.backgroundColor = "red";
}
for(let i1 = 0; i1 < squares.length; i1++){
    let square = document.createElement("div");
    square.id = "square" + (i1 + 1);
    square.innerHTML = i1 + 1;
    document.body.appendChild(square);
    square.addEventListener("click", ()=>{
        handleClick(squares[i1]);
    });
}

//# sourceMappingURL=index.aa69868b.js.map
