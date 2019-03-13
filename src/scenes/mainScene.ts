export class MainScene extends Phaser.Scene {
  player: Phaser.GameObjects.Rectangle;
  cursorKeys: Phaser.Input.Keyboard.CursorKeys;
  constructor() {
    super({
      key: "MainScene"
    });
  }

  preload(): void {}

  create(): void {
    const polygon = new Phaser.Geom.Polygon([
      new Phaser.Geom.Point(400, 0),
      new Phaser.Geom.Point(20, 276),
      new Phaser.Geom.Point(165, 724),
      new Phaser.Geom.Point(635, 724),
      new Phaser.Geom.Point(780, 276)
    ]);

    this.cursorKeys = this.input.keyboard.createCursorKeys();

    const graphics = this.add.graphics({ x: 0, y: 0 });
    graphics.lineStyle(2, 0x00aa00);
    graphics.beginPath();
    graphics.moveTo(polygon.points[0].x, polygon.points[0].y);
    polygon.points.forEach((point, index) => {
      if (index === 0) return;

      graphics.lineTo(point.x, point.y);
    });

    graphics.closePath();
    graphics.strokePath();

    this.player = this.add.rectangle(400, 700, 100, 10, 0xff0000);
    this.physics.add.existing(this.player, false);
  }

  update(): void {
    if (this.cursorKeys.right.isDown) {
      (this.player.body as Phaser.Physics.Arcade.Body).setVelocityX(100);
    } else {
      (this.player.body as Phaser.Physics.Arcade.Body).setVelocityX(0);
    }
  }
}
