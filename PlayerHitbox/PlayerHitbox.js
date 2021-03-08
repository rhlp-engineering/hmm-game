/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class PlayerHitbox extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./PlayerHitbox/costumes/costume1.svg", {
        x: 16.743749999999977,
        y: 23.5
      })
    ];

    this.sounds = [new Sound("pop", "./PlayerHitbox/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.effects.ghost = 99;
    this.x = 0;
    while (true) {
      this.y = 97;
      if (this.keyPressed("right arrow")) {
        this.x += 10;
      }
      if (this.keyPressed("left arrow")) {
        this.x += -10;
      }
      yield;
    }
  }
}
