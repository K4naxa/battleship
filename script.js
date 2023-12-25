const firstPlayerGrid = document.querySelector(".firstPlayerGrid");
const secondPlayerGrid = document.querySelector(".secondPlayerGrid");
const gameInfo = document.querySelector(".gameInfo");
class cDOMManipulation {
  constructor() {
    this.gameGridSize = 8;
  }

  createPlyerGrids() {
    for (let y = 0; y < this.gameGridSize; y++) {
      for (let x = 0; x < this.gameGridSize; x++) {
        const yCoord = y;
        const xCoord = x;

        // Creating grid for first player
        const firstGridCell = document.createElement("div");
        firstGridCell.classList.add("gameCell");
        firstPlayerGrid.appendChild(firstGridCell);

        // Creating grid for second player
        const secondGridCell = document.createElement("div");
        secondGridCell.classList.add("gameCell");
        secondPlayerGrid.appendChild(secondGridCell);

        // Add click funtion for this cell

        firstGridCell.addEventListener("click", (x, y) => {
          //ONCLICK EVENT HERE
        });
      }
    }
  }
  renderGameInfoSection(playerOne, playerTwo) {
    gameInfo.innerHTML = "";

    // Create main info Container
    const infoContainer = document.createElement("div");
    infoContainer.classList.add("infoContainer");
    gameInfo.appendChild(infoContainer);

    // render each information
    this.renderShotsFiredInfo(playerOne, playerTwo, infoContainer);
    this.renderShotsHitInfo(playerOne, playerTwo, infoContainer);
    this.renderAccuracityInfo(playerOne, playerTwo, infoContainer);

    // make div for buttons
    const gameControlButtons = document.createElement("div");
    gameControlButtons.classList.add("gameControlButtons");
    gameInfo.appendChild(gameControlButtons);

    this.renderEndTurnBtn(gameControlButtons);
    this.renderResetGameBtn(gameControlButtons);
    this.renderEndGameBtn(gameControlButtons);
  }

  renderShotsFiredInfo(playerOne, playerTwo, infoContainer) {
    // Create shotCount into InfoContainer
    const shotCount = document.createElement("div");
    shotCount.classList.add("infoCell");
    infoContainer.appendChild(shotCount);
    //title for shotcount
    const titleShotCount = document.createElement("div");
    titleShotCount.classList.add("title");
    titleShotCount.innerText = "Shots Fired";
    shotCount.appendChild(titleShotCount);
    //info for shotcount
    const infoShotCount = document.createElement("div");
    infoShotCount.classList.add("info");
    infoShotCount.innerText =
      playerOne.shotsFired + " - " + playerTwo.shotsFired;
    shotCount.appendChild(infoShotCount);
  }
  renderShotsHitInfo(playerOne, playerTwo, infoContainer) {
    // Create infoCell
    const infoCell = document.createElement("div");
    infoCell.classList.add("infoCell");
    infoContainer.appendChild(infoCell);
    // Create Title Container
    const title = document.createElement("div");
    title.classList.add("title");
    title.innerText = "Shots Hit";
    infoCell.appendChild(title);
    // Create Info Container
    const info = document.createElement("div");
    info.classList.add("info");
    info.innerText = playerOne.shotsHit + " - " + playerTwo.shotsHit;
    infoCell.appendChild(info);
  }
  renderAccuracityInfo(playerOne, playerTwo, infoContainer) {
    // Create infoCell
    const infoCell = document.createElement("div");
    infoCell.classList.add("infoCell");
    infoContainer.appendChild(infoCell);
    // Create Title Container
    const title = document.createElement("div");
    title.classList.add("title");
    title.innerText = "Accuracity";
    infoCell.appendChild(title);
    // Create Info Container
    const info = document.createElement("div");
    info.classList.add("info");
    info.innerText = playerOne.accuracity + " - " + playerTwo.accuracity;
    infoCell.appendChild(info);
  }
  renderEndTurnBtn(gameControlButtons) {
    const button = document.createElement("div");
    button.innerText = "End Turn";
    button.classList.add("endTurnBtn");
    gameControlButtons.appendChild(button);
  }
  renderResetGameBtn(gameControlButtons) {
    const button = document.createElement("div");
    button.innerText = "Reset";
    button.classList.add("resetGameBtn");
    gameControlButtons.appendChild(button);
  }
  renderEndGameBtn(gameControlButtons) {
    const button = document.createElement("div");
    button.innerText = "End Game";
    button.classList.add("endGameBtn");
    gameControlButtons.appendChild(button);
  }
}
const DOMManipulation = new cDOMManipulation();

class Boat {
  constructor() {
    this.lenght = 4;
    this.hits = 0;
    this.sunk = false;
    this.location = [
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
    ];
  }

  // function for when shotted hit hits this boat
  hit() {
    // if already hit there > ignore
    if ((this.sunk = true)) return;

    // CREATE LOGIC FOR CHECKING IF HIT AT THE SAME PLACE AND REPORT THE DMG

    if (this.lenght == this.hits) {
      this.boatSunk();
    }
  }

  // function for Sinking the ship
  boatSunk() {
    this.sunk = true;
  }
}

class Player {
  constructor(name) {
    this.shotsFired = 0;
    this.shotsHit = 0;
    this.accuracity = this.shotsFired / this.shotsHit;
    this.name = name;
    this.boats = [{ cruiser: new Boat() }, { submarine: new Boat() }];
  }
}

function mainGame() {
  DOMManipulation.createPlyerGrids();
  let playerOne = new Player();
  let playerTwo = new Player();

  DOMManipulation.renderGameInfoSection(playerOne, playerTwo);
}
mainGame();
