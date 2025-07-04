// import goblin from "./assets/goblin.png";

// export function getRandomIndex(num) {
//   let next = 0;
//   do {
//     next = Math.floor(Math.random() * 16);
//   } while (next === num);
//   return next;
// }

// export function createField() {
//   const field = document.createElement("div");
//   field.classList.add("field");

//   const cells = [];
//   for (let i = 0; i < 16; i++) {
//     const cell = document.createElement("div");
//     cell.classList.add("cell");
//     field.appendChild(cell);
//     cells.push(cell);
//   }

//   return { field, cells };
// }

// export function letsGame() {
//   const app = document.getElementById("app");

//   const { field, cells } = createField();
//   app.appendChild(field);

//   const img = document.createElement("img");
//   img.classList = "character";
//   img.src = goblin;

//   let position = 0;
//   cells[position].appendChild(img);

//   setInterval(() => {
//     const next = getRandomIndex(position);
//     cells[next].appendChild(img); // перемещение
//     position = next;
//   }, 1000);
// }

import { Field } from "./field.js";
import { Goblin } from "./goblin.js";
import { Score } from "./score.js";

export class Game {
  constructor(root) {
    this.current = 0;
    this.timer = null;
    this.wasHit = false;
    this.root = root;
    this.field = new Field();
    this.goblin = new Goblin();
    this.score = new Score();

    this.hummer = document.createElement("div");
    this.hummer.classList.add("hummer");
    document.body.appendChild(this.hummer);

    root.append(this.score.element, this.field.element);

    this.field.element.addEventListener("click", (e) => {
      if (e.target === this.goblin.element) {
        this.hit(e);
      }
    });
  }

  start() {
    this.nextTurn();
    this.timer = setInterval(() => this.nextTurn(), 1000);
  }

  nextTurn() {
    if (!this.wasHit) {
      this.score.miss();
      if (this.score.misses >= this.score.maxMisses) {
        clearInterval(this.timer);
        alert("5 промахов!");
        return;
      }
    }

    const next = this.field.getRandomIndex(this.current);
    this.current = next;
    this.field.get(this.current).appendChild(this.goblin.element);
    this.wasHit = false;
  }

  hit(event) {
    this.score.hit();
    this.wasHit = true;

    this.hummer.style.left = `${event.clientX - 50}px`;
    this.hummer.style.top = `${event.clientY - 50}px`;

    this.hummer.classList.add("visible");
    setTimeout(() => this.hummer.classList.remove("visible"), 500);
  }
}
