var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var mouse = new GameObject(undefined, undefined);
var isKeyPressed = [];

for (let i = 0; i < 256; isKeyPressed[i++] = 0);

function init() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    Update();
    Draw();
    
    setTimeout(init, 10);
}

window.addEventListener("mousemove", function (e) {
    mouse.x = e.x - canvas.offsetLeft;
    mouse.y = e.y - canvas.offsetTop;
});

window.addEventListener("keydown", function (e) {
    isKeyPressed[e.keyCode] = 1;
});

window.addEventListener("keyup", function (e) {
    isKeyPressed[e.keyCode] = 0;
});