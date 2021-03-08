/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.png", {
        x: 480,
        y: 360
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.myVariable = 2;
    this.vars._1 = 2;
    this.vars._2 = 3;
    this.vars._4 = 1;
    this.vars._5 = 1;
    this.vars.a = 0;
    this.vars.died = 0;
    this.vars.playerx = -10;
    this.vars.speed = 5;
  }
}
