var square = new ActiveGameObject(250, 250, 100, 100);
var smth = new StaticGameObject(150, 550, 300, 20);

function Update() {
    if (square.clicked) {
        square.x = mouse.x - square.width / 2;
        square.y = mouse.y - square.height / 2;
    }

    smth.x++;
    if (smth.x > 600) smth.x = -smth.width;
}

function Draw() {
    smth.Draw();
    square.Draw();
}