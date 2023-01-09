//declare variables
let submitButton = document.getElementById("sButton");
let gridHeight = document.getElementById("inputHeight");
let gridWidth = document.getElementById("inputWidth");
const mainTable = document.getElementById("pixelCanvas");
const c = document.getElementById("colorPicker");

//to reset the grid
function breakGrid() {
  var selectRows = document.querySelectorAll("tr");
  selectRows.forEach(function (tr) {
    tr.remove();
  });
}
//making the grid
function makeGrid() {
  breakGrid();
  for (let r = 1; r <= gridHeight.value; r++) {
    let rowNew = document.createElement("tr");
    rowNew.id = r + "row";

    mainTable.appendChild(rowNew);
    let rowEach = document.getElementById(r + "row");
    for (let c = 1; c <= gridWidth.value; c++) {
      let cellNew = document.createElement("td");
      cellNew.className = "column";
      rowEach.append(cellNew);
    }
  }
}

//function for color on click
function colorMaker() {
  for (const row of mainTable.rows) {
    for (const cell of row.cells) {
      if (cell.style.backgroundColor !== "white") {
        cell.onclick = function () {
          cell.style.backgroundColor = "white";
        };
      } else {
        cell.onclick = function () {
          cell.style.backgroundColor = c.value;
        };
      }
    }
  }
}
// adding event listener
submitButton.addEventListener("click", makeGrid);
mainTable.addEventListener("click", colorMaker);
