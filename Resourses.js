class GameObject {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.clicked = false;
    }

    update() {
        let gObj = this;

        window.addEventListener("mousedown", function () {
            if (mouseX <= gObj.x + gObj.width &&
                mouseX >= gObj.x &&
                mouseY <= gObj.y + gObj.height &&
                mouseY >= gObj.y)
                gObj.clicked = true;
        });

        window.addEventListener("mouseup", function () {
            gObj.clicked = false;
        });
    }

    draw() {
        this.update();

        context.fillStyle = "green";
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}
