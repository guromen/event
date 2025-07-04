export class Score {
  maxMisses = 5;
  _hits = 0;
  _misses = 0;

  constructor() {
    this.element = document.createElement("div");
    this.element.classList.add("score");
    this.render();
  }

  get hits() {
    return this._hits;
  }
  get misses() {
    return this._misses;
  }

  hit() {
    this._hits += 1;
    this.render();
  }
  miss() {
    this._misses += 1;
    this.render();
  }

  render() {
    this.element.textContent = `Попадания: ${this._hits}  |  Промахи: ${this._misses}/${this.maxMisses}`;
  }
}
