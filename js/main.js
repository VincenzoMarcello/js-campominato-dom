//* PRENDIAMO IL BOTTONE TRAMITE ID
const playButton = document.getElementById("play-button");

//* PRENDIAMO LA SELECT TRAMITE ID
const selectDifficulty = document.getElementById("difficulty");

//* PRENDIAMO IL DIV CHE CONTERRA' LA GRIGLIA TRAMITE ID
let grid = document.getElementById("grid");

//* DICHIARO ARRAY VUOTO
const bombs = [];
while (bombs.length < 16) {
  const randomBombs = generateRandomNumber(1, 100);
  if (!bombs.includes(randomBombs)) {
    bombs.push(randomBombs);
  }
}
console.log(bombs);

//* PUNTEGGIO
let score = 0;

//* AL CLICK GENERA LA GRIGLIA
playButton.addEventListener("click", function () {
  //* RESET PUNTEGGIO
  score = 0;

  //* NUMERO DI CELLE IN BASE ALLA DIFFICOLTA'
  let cellsTotal = 100;

  if (selectDifficulty.value == 2) {
    cellsTotal = 81;
  } else if (selectDifficulty.value == 3) {
    cellsTotal = 49;
  }

  grid.innerHTML = "";
  generateGrid(cellsTotal);
});

//! FUNZIONI

//* FACCIAMO UNA FUNZIONE CHE GENERA UNA GRIGLIA COMPOSTA DA CELLE
function generateGrid(cellsTotal) {
  for (let i = 1; i <= cellsTotal; i++) {
    generateCell(i, cellsTotal);
  }
}

//* FACCIAMO UNA FUNZIONE CHE GENERA UNA CELLA
function generateCell(index, cellsTotal) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.classList.add("cell-" + cellsTotal);

  cell.innerHTML = index;

  grid.append(cell);

  //* CAMBIA SFONDO AL CLICK E STAMPA L'INDICE
  cell.addEventListener("click", function () {
    if (bombs.includes(index)) {
      cell.classList.add("red");
      alert("BOOOM!!! Il tuo punteggio è " + score);
    } else {
      cell.classList.add("azure");
      score++;
    }
  });
}

//* FUNZIONE CHE GENERA NUMERI RANDOM
function generateRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNumber;
}
