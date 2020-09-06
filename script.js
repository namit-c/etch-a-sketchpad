let gridContainer = document.querySelector(".grid");

for(let i = 0; i < (16*16); i++){
  let gridBox = document.createElement("div");
  gridBox.classList.add("grid-box");
  gridBox.style.cssText = "background-color: aqua; border: 1px solid white";
  gridContainer.append(gridBox);
}

for(let i = 0; i < 16; i++){
    gridContainer.style.gridTemplateColumns += " auto";
}

gridContainer.addEventListener("mouseover", function(e){
    //if statement to make sure the grid container does not get coloured red; only the divs inside it
    if(e.target != gridContainer){
        e.target.style.cssText += "background-color: red";
    }
});