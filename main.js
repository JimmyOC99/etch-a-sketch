let colour = 'black';
let click = false;

document.addEventListener("DOMContentLoaded", function(){
    createBoard(16);

    document.querySelector("body").addEventListener("click", function(e){
        if (e.target.tagName != "BUTTON"){
            click = !click;
            let draw = document.querySelector("#draw");
            if (click){
                draw.innerHTML = "Go Ahead and draw!"
            }
            else {
                draw.innerHTML = "You can't draw at this time"
            }
        }
    })

    let btn_popup = document.querySelector("#popup");
    btn_popup.addEventListener("click", function(){
        let size = getSize();
        createBoard(size);
    })
})

function createBoard(size){
    let board = document.querySelector(".inner-content");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for (let i=0; i < numDivs; i++){
        let div = document.createElement("div");
        div.addEventListener("mouseover", colourDiv)
        board.insertAdjacentElement("beforeEnd", div);
    }
}

function getSize(){
    let input = prompt("What will be the size of the grid?");
    let message = document.querySelector("#message");
    if (input == ""){
        message.innerHTML = "Please add number"; 
    }
    else if (input < 0 || input > 100){
        message.innerHTML = "Number out of range. Please add number between 1-100";
    }
    else {
        message.innerHTML = "Let's colour in!"
        return input;
    }
}

function colourDiv(){
    if (click){
        if (colour == 'random'){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        }
        else{
            this.style.backgroundColor = 'black'
        }
    }

}

function setColour(colourChoice){
    colour = colourChoice;
}

function gridReset(){
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "white")
}