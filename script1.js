"use strict";

class Ship {
  constructor(hull, firepower, accuracy) {
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
  }
}

//alien ship count
let count = 6;

// declare elements
const mainWrapper = document.querySelector(".main-wrapper");
const div1 = document.createElement("div");
// const battleAction = document.getElementsByClassName("battle-action");
const div2 = document.createElement("div");
// const ussStatus = document.getElementsByClassName("uss-status");
const div3 = document.createElement("div");
// const alienStatus = document.getElementsByClassName("alien-status");
const fireBtn = document.getElementById("fire");
const restBtn = document.getElementById("reset");

// append elements
// mainWrapper.appendChild(div1);
// mainWrapper.appendChild(div2);
// mainWrapper.appendChild(div3);

// assign class names
// div1.className = "battle-action";
// div2.className = "uss-status";
// div3.className = "alien-status";

// call created elements
// const battleAction = document.getElementsByClassName("battle-action");
// const ussStatus = document.getElementsByClassName("uss-status");
// const alienStatus = document.getElementsByClassName("alien-status");

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
    battleAction.textContent = "You won!";
  }
};

// generate 1st ship
let alienShip = generateShip();
let ussHelloWorld = new Ship(20, 5, 0.7);
console.log(ussHelloWorld);
console.log(alienShip);

// alien fire
const alienFire = () => {
    if (ussHelloWorld.hull >0) {
  if (Math.random() < alienShip.accuracy) {
    console.log("USS Hello World has been hit!");
    battleAction.textContent = "USS Hello World has been hit!";
    ussHelloWorld.hull -= alienShip.firepower;
    // ussStatus.textContent = `USS Hello World
// Hull: ${ussHelloWorld.hull}, Firepower: ${ussHelloWorld.firepower}, Accuracy: ${ussHelloWorld.accuracy}`;
  } else {
    console.log("Missed USS Hello World target");
    battleAction.textContent = "Missed USS Hello World target.";
  }
}
};

// USS fire
const ussFire = () => {
    if (Math.random() < ussHelloWorld.accuracy) {
      console.log("Alien has been hit!");
      battleAction.textContent = "Alien has been hit!";
      alienShip.hull -= ussHelloWorld.firepower;
      if (alienShip.hull <= 0) {
        console.log("Ship has gone down");
        battleAction.textContent = "Ship has gone Down";
        alienShip = generateShip();
        alienStatus.textContent = `Aliens have ${count} ship left.
      Hull: ${alienShip.hull}, Firepower: ${alienShip.firepower}, Accuracy: ${alienShip.accuracy}`;
      }
    } else {
      console.log("Missed alien target");
      battleAction.textContent = "Missed alien target.";
    }
  } else {
    console.log("You Loose");
    battleAction.textContent = "You Loose";
  alienFire();
};

// reset game
const reset = () => {
  battleAction.removeText();
};

// add text
fireBtn.textContent = "FIRE!";
restBtn.textContent = "RESET";

// alienStatus.textContent = `Aliens have ${count} ship left.
// Hull: ${alienShip.hull}, Firepower: ${alienShip.firepower}, Accuracy: ${alienShip.accuracy}`;

fireBtn.addEventListener("click", ussFire);
restBtn.addEventListener("click", reset);
