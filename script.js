const firstPlayerGrid = document.querySelector(".firstPlayerGrid");
const secondPlayerGrid = document.querySelector(".secondPlayerGrid");


class DOMmanipulation{
    constructor(){
        this.gameGridSize = 8;

    }

     createPlyerGrids() {
        for (let x = 0; x < this.gameGridSize; x++) {
          for (let y = 0; y < this.gameGridSize; y++) {
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


            firstGridCell.innerText = x + " , " + y
            secondGridCell.innerText = x + " , " + y

          }
        }
      }
}
const DOMmanipulator = new DOMmanipulation;
DOMmanipulator.createPlyerGrids()


class Boat {
    constructor(){
        this.lenght = 4
        this.hits = 0;
        this.sunk = false;
    }

    // function for when shotted hit hits this boat
  hit() {
    // if already hit there > ignore
    if ((this.sunk = true)) return;


    // CREATE LOGIC FOR CHECKING IF HIT AT THE SAME PLACE AND REPORT THE DMG 

    if (this.lenght == this.hits){
        this.boatSunk()
    }
  }

  // function for Sinking the ship
  boatSunk() {
    this.sunk = true;
  }
}

class player{
    constructor(){
        this.boats = {
            carrier : new Boat,
            submarine : new Boat,
            cruiser : new Boat,
        }
    }




}