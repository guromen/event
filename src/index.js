import { Game } from "./game.js";
import "./styles/style.css";

window.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("app");
  new Game(root).start();
});
