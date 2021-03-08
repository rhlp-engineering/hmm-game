/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Bacground extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("4", "./Bacground/costumes/4.svg", {
        x: 47.29903876854604,
        y: 43.83100999999999
      }),
      new Costume("3", "./Bacground/costumes/3.svg", {
        x: 47.521919999999994,
        y: 43.83100999999999
      }),
      new Costume("2", "./Bacground/costumes/2.svg", {
        x: 36.22222222222223,
        y: 40.75
      }),
      new Costume("1", "./Bacground/costumes/1.svg", {
        x: 42.046063475746024,
        y: 42.0460085304
      }),
      new Costume(
        "Windows_16colors_palette_color_test_chart2",
        "./Bacground/costumes/Windows_16colors_palette_color_test_chart2.png",
        { x: 36, y: 122 }
      ),
      new Costume(
        "Windows_16colors_palette_color_test_chart",
        "./Bacground/costumes/Windows_16colors_palette_color_test_chart.png",
        { x: 36, y: 122 }
      )
    ];

    this.sounds = [new Sound("pop", "./Bacground/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *makeRow(_3, _6, _7, _8, _9) {
    this.stage.vars.a = 1;
    this.goto(-189, -210);
    this.costume = _3;
    this.createClone();
    this.move(95);
    this.costume = _6;
    this.createClone();
    this.move(95);
    this.costume = _7;
    this.createClone();
    this.move(95);
    this.costume = _8;
    this.createClone();
    this.move(95);
    this.costume = _9;
    this.createClone();
    this.move(95);
    this.stage.vars.a = 0;
  }

  *startAsClone() {
    this.visible = true;
    while (!(this.stage.vars.a == 0)) {
      yield;
    }
    if (this.costumeNumber == 3) {
      this.effects.ghost = 0;
    } else {
      this.effects.ghost = 50;
    }
    while (!(this.y > 200)) {
      this.y += this.stage.vars.speed;
      if (
        this.touching(this.sprites["PlayerHitbox"].andClones()) &&
        this.costumeNumber == 3
      ) {
        this.stage.vars.speed = 5;
        this.stage.vars.died = 1;
        this.deleteThisClone();
      }
      if (this.stage.vars.died == 1) {
        this.stage.vars.speed = 5;
        this.deleteThisClone();
      }
      yield;
    }
    this.deleteThisClone();
  }

  *whenGreenFlagClicked() {
    this.stage.vars.speed = 5;
    while (true) {
      if (this.stage.vars.died == 1) {
        this.stage.vars.speed = 5;
        yield* this.wait(0.1);
        this.stage.vars.died = 0;
        yield* this.wait(1);
      } else {
        for (
          let i = 0;
          i <
          20 * Math.round(this.stage.vars.speed / (this.stage.vars.speed - 1));
          i++
        ) {
          yield* this.wait(
            0.5 *
              Math.round(this.stage.vars.speed / (this.stage.vars.speed - 1))
          );
          yield* this.makeRow(
            this.stage.vars.myVariable,
            this.stage.vars._1,
            this.stage.vars._2,
            this.stage.vars._4,
            this.stage.vars._5
          );
          this.stage.vars.myVariable = this.random(1, this.random(1, 4));
          this.stage.vars._1 = this.random(1, this.random(1, 4));
          this.stage.vars._2 = this.random(1, this.random(1, 4));
          this.stage.vars._4 = this.random(1, this.random(1, 4));
          this.stage.vars._5 = this.random(1, this.random(1, 4));
          yield;
        }
      }
      if (!(this.stage.vars.died == 1)) {
        this.stage.vars.speed += 1;
      }
      yield;
    }
  }
}
