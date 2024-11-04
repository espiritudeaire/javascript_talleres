class Figura {
    #x;
    #y;
    #w;
    #h;
    #color;
    constructor(x, y, w, h, color) {
        this.#x = x;
        this.#y = y;
        this.#w = w;
        this.#h = h;
        this.#color = color;
    }

    setX(x) { this.#x = x; }
    setY(y) { this.#y = y; }
    getX() { return this.#x; }
    getY() { return this.#y; }

    setWidth(w) { this.#w = w; }
    setHeight(h) { this.#h = h; }
    getWidth() { return this.#w; }
    getHeight() { return this.#h; }

    setColor(color) { this.#color = color; }
    getColor() { return this.#color; }
}

class Rectangulo extends Figura {
    constructor(x, y, w, h, color) {
        super(x, y, w, h, color); // Llama al constructor de la clase padre
    }
}

let xG = 0;
let yG = 0;
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

/* let rectangulo1 = new Rectangulo(0, 0, 50, 55, 'rgb(200, 0, 0)');
rectangulo1.setX(getUbicacionX(10));
rectangulo1.setY(10);

let rectangulo2 = new Rectangulo(0, 0, 50, 55, 'rgb(0, 0, 200, 0.5)');
rectangulo2.setX(rectangulo2.getWidth() + getUbicacionX(10));
rectangulo2.setY(10);

ctx.fillStyle = rectangulo1.getColor();
ctx.fillRect(rectangulo1.getX(), rectangulo1.getY(), rectangulo1.getWidth(), rectangulo1.getHeight());

ctx.fillStyle = rectangulo2.getColor();
ctx.fillRect(rectangulo2.getX(), rectangulo2.getY(), rectangulo2.getWidth(), rectangulo2.getHeight());

ctx.strokeRect(20, 20, 20, 20);
ctx.clearRect(40, 40, 20, 20);

ctx.beginPath();
ctx.moveTo(75, 50);
ctx.lineTo(100, 75);
ctx.lineTo(100, 25);
ctx.fill(); */

ctx.beginPath();
ctx.moveTo(120, 130);
ctx.lineTo(125, 90);
ctx.lineTo(135, 100);
ctx.lineTo(145, 90);
ctx.lineTo(150, 130);
ctx.lineWidth = 15;
ctx.stroke();

//ctx.moveTo(200, 130);
ctx.beginPath();
ctx.arc(300, 130, 70, 0, Math.PI * 1.5);
ctx.lineWidth = 5;
ctx.fillStyle = 'orange';
ctx.stroke();
ctx.fill();

ctx.beginPath();
let w = 80;
let h = 80;
for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
        ctx.fillStyle = `rgb(${255 - 70 * i},${255 - 70 * j},0)`;
        ctx.fillRect(w * j, (h * i) + 250, w, h);
    }
}


function getUbicacionX(x) {
    xG += x;
    return xG;
}

function getUbicacionY(y) {
    yG += y;
    return yG;
}