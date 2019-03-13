import "phaser";
import { MainScene } from "./scenes/mainScene";

const config: GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 800,
  scene: MainScene,
  physics: {
    default: "arcade"
  }
};

export class Game extends Phaser.Game {
  constructor(config: GameConfig) {
    super(config);
  }
}

window.addEventListener("load", () => {
  var game = new Game(config);
});
