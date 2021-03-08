import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Bacground from "./Bacground/Bacground.js";
import Sprite2 from "./Sprite2/Sprite2.js";
import PlayerHitbox from "./PlayerHitbox/PlayerHitbox.js";
import DeathTransition from "./DeathTransition/DeathTransition.js";
import Player4Javascript from "./Player4Javascript/Player4Javascript.js";
import Sprite3 from "./Sprite3/Sprite3.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Bacground: new Bacground({
    x: 272,
    y: -205,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1
  }),
  Sprite2: new Sprite2({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 2
  }),
  PlayerHitbox: new PlayerHitbox({
    x: -10,
    y: 97,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 3
  }),
  DeathTransition: new DeathTransition({
    x: -1,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 6
  }),
  Player4Javascript: new Player4Javascript({
    x: -9.999999999999996,
    y: 96.99999999999999,
    direction: -14.036243467926496,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 5
  }),
  Sprite3: new Sprite3({
    x: -9.999999999999996,
    y: 96.99999999999999,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 4
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
