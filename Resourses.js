class GameObject {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class StaticGameObject extends GameObject {
    constructor(x, y, width, height) {
        super(x, y);

        this.width = width;
        this.height = height;
    }

    Draw() {
        context.fillStyle = "green";
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}

class ActiveGameObject extends GameObject {
    constructor(x, y, width, height) {
        super(x, y);

        this.width = width;
        this.height = height;

        this.clicked = false;

        this.gravity = (this.width + this.height) / 500;
        this.gravitySpeed = 0;
        this.grounded = false;
    }

    Update() {
        let obj = this;

        window.addEventListener("mousedown", function () {
            if (areColliding(mouse, obj))
                obj.clicked = true;
        });

        window.addEventListener("mouseup", function () {
            obj.clicked = false;
            obj.grounded = false;
            obj.gravitySpeed = 0;
        });

        if (areColliding(this, smth)) {
            this.grounded = true;
            this.gravitySpeed = 0;

            this.y = smth.y - this.height;
        }
        else this.grounded = false;

        if (this.clicked || this.grounded) return;

        this.gravitySpeed += this.gravity;
        this.y += this.gravitySpeed;
    }

    Draw() {
        this.Update();

        context.fillStyle = "red";
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}

function areColliding(obj1, obj2) {
    if (!(obj1 instanceof ActiveGameObject || obj1 instanceof StaticGameObject)) {
        return (obj1.x >= obj2.x &&
            obj1.x <= obj2.x + obj2.width &&
            obj1.y >= obj2.y &&
            obj1.y <= obj2.y + obj2.height);
    }
    else if (!(obj2 instanceof ActiveGameObject || obj2 instanceof StaticGameObject)) {
        return (obj2.x >= obj1.x &&
            obj2.x <= obj1.x + obj1.width &&
            obj2.y >= obj1.y &&
            obj2.y <= obj1.y + obj1.height);
    } else {
        return (obj2.x <= obj1.x + obj1.width &&
            obj1.x <= obj2.x + obj2.width &&
            obj2.y <= obj1.y + obj1.height &&
            obj1.y <= obj2.y + obj2.height);
    }
}