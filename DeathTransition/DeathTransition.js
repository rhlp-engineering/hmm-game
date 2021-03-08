/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class DeathTransition extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./DeathTransition/costumes/costume1.png", {
        x: 480,
        y: 360
      })
    ];

    this.sounds = [new Sound("pop", "./DeathTransition/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.effects.ghost = 100;
    this.moveAhead();
    while (true) {
      if (this.stage.vars.died == 1) {
        for (let i = 0; i < 4; i++) {
          this.effects.ghost += -25;
          yield* this.wait(0.01);
          yield;
        }
        yield* this.wait(0.5);
        for (let i = 0; i < 12; i++) {
          this.effects.ghost += 12.5;
          yield* this.wait(0.01);
          this.stage.vars.died = 0;
          yield;
        }
      } else {
        this.effects.ghost = 100;
      }
      yield;
    }
  }
}
