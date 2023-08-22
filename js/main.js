//* PRENDIAMO IL BOTTONE TRAMITE ID
const playButton = document.getElementById("play-button");

//* PRENDIAMO IL DIV CHE CONTERRA' LA GRIGLIA TRAMITE ID
let grid = document.getElementById("grid");

//* AL CLICK GENERA LA GRIGLIA
playButton.addEventListener("click", function () {
  grid.innerHTML = "";
  generateGrid();
});

//* FACCIAMO UNA FUNZIONE CHE GENERA UNA GRIGLIA COMPOSTA DA 100 CELLE
function generateGrid() {
  for (let i = 1; i <= 100; i++) {
    generateCell(i);
  }
}

//* FACCIAMO UNA FUNZIONE CHE GENERA UNA CELLA
function generateCell(index) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.innerHTML = index;

  grid.append(cell);

  //* CAMBIA SFONDO AL CLICK E STAMPA L'INDICE
  cell.addEventListener("click", function () {
    cell.classList.add("azure");
    console.log(index);
  });
}
