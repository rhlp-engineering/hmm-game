/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Anina Pop Stand", "./Sprite3/costumes/Anina Pop Stand.png", {
        x: 33,
        y: 103
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite3/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.direction = 90;
    while (true) {
      this.goto(
        this.sprites["Player4Javascript"].x,
        this.sprites["Player4Javascript"].y
      );
      yield;
    }
  }
}
