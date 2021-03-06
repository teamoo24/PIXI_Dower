"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const PIXI = __importStar(require("pixi.js"));
let app;
let player;
let keys = {};
let keysDiv;
window.onload = () => {
    app = new PIXI.Application({
        width: window.innerWidth,
        height: window.innerHeight * 0.9,
        backgroundColor: 0xAAAAAA
    });
    document.body.appendChild(app.view);
    // player object
    player = PIXI.Sprite.from("images/player.png");
    player.anchor.set(0.5);
    player.x = app.view.width / 2;
    player.y = app.view.height / 2;
    app.stage.addChild(player);
    app.stage.interactive = true;
    keysDiv = document.querySelector("#keys");
    let onPointerMove = (e) => {
        let pos = e.data.global;
        player.x = pos.x;
        player.y = pos.y;
    };
    let keysDown = (e) => {
        keys[e.keyCode] = true;
    };
    let keysUp = (e) => {
        keys[e.keyCode] = false;
    };
    let gameLoop = () => {
        keysDiv.innerHTML = JSON.stringify(keys);
        // W
        if (keys["87"]) {
            player.y -= 5;
        }
        // A
        if (keys["65"]) {
            player.x -= 5;
        }
        // S
        if (keys["83"]) {
            player.y += 5;
        }
        // D
        if (keys["68"]) {
            player.x += 5;
        }
    };
    app.ticker.add(gameLoop);
    window.addEventListener("keydown", keysDown);
    window.addEventListener("keyup", keysUp);
    // touch interaction
    app.stage.interactive = true;
    app.stage
        .on("pointermove", onPointerMove);
};
