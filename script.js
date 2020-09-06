let gridContainer = document.querySelector(".grid");
for(let i = 0; i < 16; i++){
  gridContainer.style.gridTemplateColumns += " auto";
}
for(let i = 0; i < (16*16); i++){
  let gridBox = document.createElement("div");
  gridBox.classList.add("grid-box");
  gridBox.style.cssText = "background-color: aqua; border: 1px solid black";
  gridContainer.append(gridBox);
}


gridContainer.addEventListener("mouseover", function(e){
  e.target.style.cssText = "background-color: red";
});