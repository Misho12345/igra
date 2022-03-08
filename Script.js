var square = new ActiveGameObject(250, 250, 100, 100);
var smth = new StaticGameObject(150, 550, 300, 20);

var offsetX, offsetY;

function Update() {
    if (square.clicked) {
        if (offsetX == undefined) offsetX = square.x - mouse.x;
        if (offsetY == undefined) offsetY = square.y - mouse.y;

        square.x = mouse.x + offsetX;
        square.y = mouse.y + offsetY;
    }
    else offsetX = offsetY = undefined;

    smth.x++;
    if (smth.x > canvas.width) smth.x = -smth.width;

    if (square.y > 700) delete square.y;
}

function Draw() {
    smth.Draw();
    square.Draw();
}