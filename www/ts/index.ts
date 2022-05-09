import * as PIXI from "pixi.js"

let app;
let player: PIXI.Sprite;
let keys:{
    [keycode:number]:boolean
} = {};
let keysDiv: HTMLElement;

window.onload = () => {
    app = new PIXI.Application(
        {
            width:window.innerWidth,
            height:window.innerHeight*0.9,
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

    keysDiv = <HTMLElement>document.querySelector("#keys");


    let onPointerMove = (e: { data: { global: any; }; }) => {
        let pos = e.data.global;

        player.x = pos.x;
        player.y = pos.y
    }
    
    let keysDown = (e: { keyCode: any; }) => {
        keys[e.keyCode] = true;
    }

    let keysUp = (e: { keyCode: any; }) => {
        keys[e.keyCode] = false;
    }

    let gameLoop = () =>{
        keysDiv.innerHTML = JSON.stringify(keys);

        // W
        if(keys["87"]) {
            player.y -= 5;
        } 
    
        // A
        if(keys["65"]) {
            player.x -= 5;
        } 

        // S
        if(keys["83"]) {
            player.y += 5;
        } 

        // D
        if(keys["68"]) {
            player.x += 5;
        } 
    }

    app.ticker.add(gameLoop);


    window.addEventListener("keydown", keysDown);
    window.addEventListener("keyup", keysUp);

    // touch interaction
    app.stage.interactive = true;
    app.stage
    .on("pointermove", onPointerMove)
}
