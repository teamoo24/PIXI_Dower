import * as PIXI from "pixi.js"

let app;
let player: PIXI.Sprite;

window.onload = () => {
    app = new PIXI.Application(
        {
            width:window.innerWidth,
            height:window.innerHeight,
            backgroundColor: 0xAAAAAA
        }
    );

    document.body.appendChild(app.view)

    // player object
    player = PIXI.Sprite.from("images/player.png");
    player.anchor.set(0.5);
    player.x = app.view.width / 2;
    player.y = app.view.height / 2;

    app.stage.addChild(player)
    app.stage.interactive = true;

    let onPointerDown = (e: { data: { global: any; }; }) => {
        let pos = e.data.global;

        player.x = pos.x;
        player.y = pos.y
    }
    

    // touch interaction
    app.stage.interactive = true;
    app.stage
    .on("pointerdown", onPointerDown)
    .on("pointermove", onPointerDown)
}
