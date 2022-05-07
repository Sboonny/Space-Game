"use strict";

// declare elements
const fireBtn = document.getElementById("fire");
const resetBtn = document.getElementById("reset");

//apply text to buttons
fireBtn.textContent = "FIRE!";
resetBtn.textContent = "RESET";

class Ship {
  constructor(hull, firepower, accuracy) {
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
  }

  fire() {
    if (this === alienShip) {
      if (ussHelloWorld.hull > 0) {
        if (Math.random() < this.accuracy) {
          console.log("USS Hello World has been hit!");
          ussHelloWorld.hull -= this.firepower;
        } else {
          console.log("Missed USS Hello World target");
        }
      } else {
        console.log("You Loose");
      }
    }
    if (this === ussHelloWorld) {
      if (this.hull > 0) {
        if (Math.random() < this.accuracy) {
          console.log("Alien has been hit!");
          alienShip.hull -= this.firepower;
          if (alienShip.hull <= 0) {
            console.log("Ship has gone down");
            alienShip = generateShip();
          }
        } else {
          console.log("Missed alien target");
        }
      } else {
        console.log("You Loose");
      }
      alienShip.fire();
    }
  }
}

const generateShip = () => {
  if (count > 0) {
    const hull = Math.trunc(Math.random() * 3) + 3;
    const firepower = Math.trunc(Math.random() * 3) + 2;
    const accuracy = parseFloat(Math.random() * (0.8 - 0.6) + 0.6).toFixed(1);
    const alienGenShip = new Ship(hull, firepower, accuracy);
    count--;
    return alienGenShip;
  } else {
    console.log("You won!");
  }
};

// alien ship count
let count = 6;

let alienShip = generateShip();

let ussHelloWorld = new Ship(20, 5, 0.7);

//! checking on functionality of alienShip & USSHelloWorld DELETE IN FINAL
console.log(ussHelloWorld);
console.log(alienShip);

fireBtn.addEventListener("click", ussHelloWorld.fire);
