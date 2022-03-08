var square = new GameObject(250, 250, 100, 100);

function Update() {
    if (square.clicked) {
        square.x = mouseX - square.width / 2;
        square.y = mouseY - square.height / 2;
    }
}

function Draw() {
    square.draw();
}