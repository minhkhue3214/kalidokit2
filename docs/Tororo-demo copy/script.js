console.log("PIXI Application",PIXI.Application);
console.log("PIXI live2DModel",PIXI.live2d.Live2DModel);
const {
    Application,
    live2d: { Live2DModel },
} = PIXI;

// import '../models/tororo_hijiki/tororo/runtime/tororo.model3.json'
const {
    Face,
    Vector: { lerp },
    Utils: { clamp },
} = Kalidokit;

// Url to Live2D
const modelUrl = "../models/tororo_hijiki/tororo/runtime/tororo.model3.json";

let currentModel, facemesh;

const videoElement = document.querySelector(".input_video"),
    guideCanvas = document.querySelector("canvas.guides");

(async function main() {
    // create pixi application
    const app = new PIXI.Application({
        view: document.getElementById("live2d"),
        autoStart: true,
        backgroundAlpha: 0,
        backgroundColor: "black",
        resizeTo: window,
    });

    // load live2d model
    currentModel = await Live2DModel.from(modelUrl, { autoInteract: false });
    console.log("currentModel",currentModel);
    currentModel.scale.set(0.4);
    console.log("currentModel",currentModel);
    currentModel.interactive = true;
    currentModel.anchor.set(0.5, 0.5);
    console.log(window.innerWidth,window.innerHeight);
    currentModel.position.set(window.innerWidth * 0.5, window.innerHeight * 0.8);

    // add live2d model to stage
    app.stage.addChild(currentModel);

})();

