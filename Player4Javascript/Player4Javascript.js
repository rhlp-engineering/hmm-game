/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Player4Javascript extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "Anina Pop Stand",
        "./Player4Javascript/costumes/Anina Pop Stand.png",
        { x: 33, y: 103 }
      )
    ];

    this.sounds = [new Sound("pop", "./Player4Javascript/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.direction = this.radToScratch(
        Math.atan2(
          this.sprites["PlayerHitbox"].y - this.y,
          this.sprites["PlayerHitbox"].x - this.x
        )
      );
      this.move(
        Math.hypot(
          this.sprites["PlayerHitbox"].x - this.x,
          this.sprites["PlayerHitbox"].y - this.y
        ) / 5
      );
      this.stage.vars.playerx = this.x;
      yield;
    }
  }
}
