# Griglia Campo Minato

## Traccia

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

## Bonus

Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:

- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

## Svolgimento

L'utente clicca su un bottone che genererà una griglia di gioco quadrata

- definiamo in HTML un pulsante, a cui assegniamo un ID
- all'evento click associamo un codice che genera la griglia

### GENERAZIONE GRIGLIA QUADRATA

Ogni cella ha un numero progressivo, da 1 a 100
ci saranno quindi 10 caselle per ognuna delle 10 righe.

- definiamo un contenitore con dimensioni fisse
- contiamo da 1 a 100 e per ogni ciclo:
- creiamo una cella con dimensioni fisse
  - la larghezza la valutiamo con il calc(100% / 10)
  - l'altezza con aspect-ratio: 1
- associamo l'indice alla singola cella

quando l'utente clicca su ogni cella, la cella cliccata:

- si colora di azzurro
- emette un messaggio in console con il numero della cella cliccata

Quindi:

- associamo all'evento click sulla cella un codice
  - usiamo una classe per cambiare colore alla cella
  - usiamo il console.log sull'indice associato alla cella
