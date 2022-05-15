grid = document.createElement("div")
grid.setAttribute("id", "grid")
document.body.appendChild(grid);

grid = document.getElementById("grid")

button = document.createElement("button")
button.setAttribute("class","reset")
button.textContent = "Reset grid"
document.body.prepend(button);

function renderGrid(numSquares){
    root = document.querySelector(":root");
    root.style.setProperty("--numberofsquares", numSquares)

    for (let i=1; i < (numSquares**2 + 1); i++){
        cell = document.createElement("div")
        cell.classList.add("cell", i)
        grid.appendChild(cell)
    }

    cells = document.querySelectorAll(".cell")
    cells.forEach((item)=>{
        item.addEventListener("mouseover", (e)=>{
            console.log(e)
            e.target.style.background="black";
        })
    })
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

button.addEventListener("click",() => {
    let numSquares
    removeAllChildNodes(grid)
    do {  
        numSquares = prompt("How large would you like your grid to be? Enter a number from 1-100:");
    } while (numSquares < 1 | numSquares > 100)
    renderGrid(numSquares);
})


