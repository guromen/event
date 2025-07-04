export class Field {
  cells = [];

  constructor() {
    this.element = document.createElement("div");
    this.element.classList.add("field");
    this.createField();
  }

  createField() {
    for (let i = 0; i < 16; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      this.element.appendChild(cell);
      this.cells.push(cell);
    }
  }

  get(index) {
    return this.cells[index];
  }

  getRandomIndex(position) {
    let next;
    do {
      next = Math.floor(Math.random() * 16);
    } while (next === position);
    return next;
  }
}
