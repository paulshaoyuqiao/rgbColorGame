var numSquares = 6;
var colors = [];
var background = "steelblue";
var picked;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var topTile = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modes = document.querySelectorAll(".Mode");

init();

function init(){

    initModes();
    initSquares();
    resetGame();

}

function initModes(){
    for (var i = 0; i < modes.length; i++){
        modes[i].addEventListener("click", function(){
            modes[0].classList.remove("selected");
            modes[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            resetGame();
    
        });
    }
}

function initSquares(){
    for (var i = 0; i< squares.length; i++){
        //initialize colors
        
        //initialize click listeners
        squares[i].addEventListener("click",function(){
            //retrieve color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color to the picked one
            if (clickedColor === picked){
                messageDisplay.textContent = "Correct!";
                changeColor(clickedColor);
                topTile.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again?";
    
            }else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }

}




function resetGame() {
    //generate new random colors
    colors = generateRandColors(numSquares);
    //pick one
    picked = pickColor();
    //change colorDisplay to matched picked color
    colorDisplay.textContent = picked;

    messageDisplay.textContent = "";
    //change colors of squares
    for (var i = 0; i < squares.length; i++){
        if (colors[i]){
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    topTile.style.backgroundColor = background;
    //reset Button's textContent
    resetButton.textContent = "New Colors";
}

resetButton.addEventListener("click",function(){
    resetGame();
});

function changeColor (color){
    for (var i = 0; i < squares.length; i ++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandColors(num){
    var colorArr = [];
    for (var i = 0; i < num; i ++){
        colorArr.push(randColor());
    }
    return colorArr;
}

function randColor(){
    var rgb = [];
    for (var i = 0; i < 3; i++){
        rgb.push(Math.floor(Math.random() * 256).toString());
    }
    var colorCall = "rgb("+rgb.join(", ")+")";
    return colorCall;
    
}