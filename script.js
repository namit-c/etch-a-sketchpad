//declaring the necessary variables
let length = 16;
const gridContainer = document.querySelector(".grid");
const buttons = document.querySelector(".buttons");


//running the function makeGrid to make the first grid when the page opens (when the script is first run)
makeGrid(length);

//function for making the grid
function makeGrid(length){

    //reseting the gridTemplateColumns for repetive use
    gridContainer.style.gridTemplateColumns = "";
    
    //making div elements to be used as the squares in the grid
    for(let i = 0; i < (length*length); i++){
    let gridBox = document.createElement("div");
    gridBox.classList.add("grid-box");
    gridBox.style.cssText = "background-color: white; border: 1px solid lightgray";
    gridContainer.append(gridBox);
    }

    //setting up the grid columns to equal the length entered
    for(let i = 0; i < length; i++){
        gridContainer.style.gridTemplateColumns += " auto";
    }
}

//event listener to colour the grid whenever the mouse moves over it
gridContainer.addEventListener("mouseover", function(e){
    //if statement to make sure the grid container does not get coloured red; only the divs inside it
    if(e.target != gridContainer){
        e.target.style.cssText += "background-color: aqua; border-color: transparent";
    }
});

//event listener for whenever a button is clicked 
buttons.addEventListener("click", function(e){
    let clickedButton = e.target;
    
    //checking which button is clicked
    if(clickedButton.id == "reset"){
        sideLength = parseInt(prompt("Enter the length of the new grid:", 16));

        //checking whether the input was a number
        while((typeof sideLength != "number") || (sideLength <= 0)){
            sideLength = parseInt(prompt("Please enter the length of the new grid:", 16));;
            console.log(sideLength <= 0);
        }
    }

    //removing the previously made div
    let oldGrid = document.querySelectorAll(".grid-box");
    oldGrid.forEach(sqaure => sqaure.parentElement.removeChild(sqaure));

    //making the new grid
    makeGrid(sideLength);
});



