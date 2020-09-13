//declaring the necessary variables
let length = 16;
let gridLines = true;
let modeDefault = true;
//let modeAdditive = false;
const gridContainer = document.querySelector(".grid");
const buttons = document.querySelector(".buttons");


//running the function makeGrid to make the first grid when the page opens (when the script is first run)
makeGrid(length, gridLines);


//function to clear the grid
function clearGrid(gridLines){
    let oldGrid = document.querySelectorAll(".grid-box");
    if(gridLines){
        oldGrid.forEach(sqaure => sqaure.style.cssText = "background-color: white; border: 1px solid lightgray");
    }
    else {
        oldGrid.forEach(sqaure => sqaure.style.cssText = "background-color: white; border: 1px solid transparent");
    }
}

//function for making the grid
function makeGrid(length, gridLines){

    //reseting the gridTemplateColumns for repetive use
    gridContainer.style.gridTemplateColumns = "";
    
    //making div elements to be used as the squares in the grid
    for(let i = 0; i < (length*length); i++){
    let gridBox = document.createElement("div");
    gridBox.classList.add("grid-box");

    //condition on whether to add to remove grid lines
    if(gridLines){
        gridBox.style.cssText = "background-color: white; border: 1px solid lightgray;";
    }
    else{
        gridBox.style.cssText = "background-color: white; border: 1px solid transparent";
    }

    gridContainer.append(gridBox);
    }

    //setting up the grid columns to equal the length entered
    for(let i = 0; i < length; i++){
        gridContainer.style.gridTemplateColumns += " auto";
    }
}

//event listener to colour the grid whenever the mouse moves over it
gridContainer.addEventListener("mouseover", function(e){
    //"if" statement is to make sure the grid container does not get coloured red; only the divs inside it
    if(e.target != gridContainer){

        //checking which mode the user is drawing on 
        if(modeDefault){
            e.target.style.cssText += "background-color: #2d2d2d; border-color: transparent";
        }
        else{
            let property = e.target.style.backgroundColor;
            let opacity = (property.slice(property.indexOf("0.1"), property.indexOf(")")));
            console.log(opacity);
            if(isNaN(opacity)){
                e.target.style.cssText = "background-color: rgba(0, 0, 0, 0.1)";
            }
            else{
                console.log("made it here");
                opacity += 0.1;
                console.log(opacity);
                e.target.style.backgroundColor = "rgba(0, 0, 0, " + opacity.toString() + ")";
            } 
        }
    }
});

//event listener for whenever a button is clicked 
buttons.addEventListener("click", function(e){
    let clickedButton = e.target;
    
    //checking which button is clicked

    if(clickedButton.id == "resize"){
        sideLength = parseInt(prompt("Enter the length of the new grid:", 16));

        //Only draw the new grid if the cancel button is not pressed
        if(!isNaN(sideLength)){
            //checking whether the input was a number
            while((typeof sideLength != "number") || (sideLength <= 0)){
                sideLength = parseInt(prompt("Please enter the length of the new grid:", 16));;
                console.log(sideLength <= 0);
            }

            //removing the previously made div
            let oldGrid = document.querySelectorAll(".grid-box");
            oldGrid.forEach(sqaure => sqaure.parentElement.removeChild(sqaure));

            //making the new grid
            makeGrid(sideLength, gridLines);
        }
    }

    else if(clickedButton.id == "reset"){
        clearGrid(gridLines);
    }

    else if(clickedButton.id == "gridLines"){
        let gridLinesButton = document.querySelector("#gridLines");
        
        //to toggle between on and off
        gridLines = !gridLines;

        //removing/adding the lines
        let oldGrid = document.querySelectorAll(".grid-box");
        
        if(gridLines){
            gridLinesButton.textContent = "Lines On";
        }
        else{
            gridLinesButton.textContent = "Lines Off";
        }

        clearGrid(gridLines);
    }

    else if(clickedButton.id == "default"){
        modeDefault = true;
    }

    else if(clickedButton.id == "additive"){
        modeDefault = false;
    }
});



