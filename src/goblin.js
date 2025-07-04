import goblinImg from "./assets/goblin.png";

export class Goblin {
  constructor() {
    this.element = document.createElement("img");
    this.element.classList.add("goblin");
    this.element.src = goblinImg;
  }
}
