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

let w = 80;
let h = 80;
let y_control = 250;
let y = 0;

let r = 20;
let x = 2 * r;

var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

function getUbicacionX(x) {
    xG += x;
    return xG;
}

function getUbicacionY(y) {
    yG += y;
    return yG;
}

function draw_figuras() {
    let rectangulo1 = new Rectangulo(0, 0, 50, 55, 'rgb(200, 0, 0)');
    rectangulo1.setX(getUbicacionX(10));
    rectangulo1.setY(10);

    let rectangulo2 = new Rectangulo(0, 0, 50, 55, 'rgb(0, 0, 200, 0.5)');
    rectangulo2.setX(rectangulo2.getWidth() + getUbicacionX(10));
    rectangulo2.setY(10);

    context.fillStyle = rectangulo1.getColor();
    context.fillRect(rectangulo1.getX(), rectangulo1.getY(), rectangulo1.getWidth(), rectangulo1.getHeight());

    context.fillStyle = rectangulo2.getColor();
    context.fillRect(rectangulo2.getX(), rectangulo2.getY(), rectangulo2.getWidth(), rectangulo2.getHeight());

    context.strokeRect(20, 20, 20, 20);
    context.clearRect(40, 40, 20, 20);

    context.beginPath();
    context.moveTo(75, 50);
    context.lineTo(100, 75);
    context.lineTo(100, 25);
    context.fill();
}

function draw_letra() {
    context.beginPath();
    context.moveTo(120, 130);
    context.lineTo(125, 90);
    context.lineTo(135, 100);
    context.lineTo(145, 90);
    context.lineTo(150, 130);
    context.lineWidth = 15;
    context.stroke();
}

function draw_circulo() {
    //context.moveTo(200, 130);
    context.beginPath();
    context.arc(300, 130, 70, 0, Math.PI * 1.5);
    context.lineWidth = 5;
    context.fillStyle = 'orange';
    context.stroke();
    context.fill();
}

function draw_rectangulos_() {
    context.beginPath();

    for (let i = 0; i < 7; i++) {

        for (let j = 0; j < 7; j++) {
            context.fillStyle = `rgb(${255 - 70 * i},${255 - 70 * j},0)`;
            y = (h * j) + y_control;
            context.fillRect(w * i, y, w, h);

        }
    }
    y += h;
}

function draw_circles() {

    y_control = y + 20;
    context.lineWidth = 1;


    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            context.strokeStyle = `rgb(${255 - 40 * i},0,${255 - 40 * i})`
            context.beginPath();
            y = (2 * r * j) * 1.5 + y_control;
            context.arc((2 * r) * i * 1.5 + r, y, r, 0, Math.PI * 2, true);
            context.stroke();
        }

    }
}

function draw_rectangulos_circulos_difuminados() {

    y += 50;
    let y1 = y;
    h = 80;
    w = 80;
    let x_control = 5;
    x = x_control;
    context.fillStyle = 'blue';
    context.fillRect(x, y, w, h);

    y += h;

    context.fillStyle = 'green';
    context.fillRect(x, y, w, h);

    x += w;

    context.fillStyle = 'yellow';
    context.fillRect(x, y1, w, h);

    context.fillStyle = 'purple';
    context.fillRect(x, y, w, h);

    context.globalAlpha = 0.2;
    r = 10;
    context.fillStyle = 'white';

    for (let i = 0; i < 10; i++) {
        context.beginPath();
        context.arc(x, y, r + r * i, 0, Math.PI * 2, true);
        context.fill();

    }

}

function rectangulos_difuminados() {
    context.fillStyle = "rgb(255 221 0)";
    context.fillRect(0, 0, 150, 37.5);
    context.fillStyle = "rgb(102 204 0)";
    context.fillRect(0, 37.5, 150, 37.5);
    context.fillStyle = "rgb(0 153 255)";
    context.fillRect(0, 75, 150, 37.5);
    context.fillStyle = "rgb(255 51 0)";
    context.fillRect(0, 112.5, 150, 37.5);

    // Draw semi transparent rectangles
    for (let i = 0; i < 10; i++) {
        context.fillStyle = `rgb(255 255 255 / ${(i + 1) / 10})`;
        for (let j = 0; j < 4; j++) {
            context.fillRect(5 + i * 14, 5 + j * 37.5, 14, 27.5);
        }
    }
}

function lineas_cambio_lineWidth() {

    for (let i = 0; i < 10; i++) {
        context.beginPath();
        context.lineWidth = 1 + i * 0.5;
        context.moveTo(10 * i, 3);

        context.lineTo(10 * i, 150);
        context.stroke();

    }
}

function example_lineCap() {
    context.strokeStyle = '#09f';
    context.lineWidth = 1;

    context.beginPath();
    context.moveTo(10, 10);
    context.lineTo(200, 10);

    context.moveTo(10, 50);
    context.lineTo(200, 50);

    context.stroke();

    context.strokeStyle = 'black';
    context.lineWidth = 15;
    context.lineCap = 'butt';

    context.beginPath();
    context.moveTo(30, 5);
    context.lineTo(30, 55);
    context.stroke();

    context.lineCap = 'round';

    context.beginPath();
    context.moveTo(60, 5);
    context.lineTo(60, 55);
    context.stroke();

    context.lineCap = 'square';

    context.beginPath();
    context.moveTo(90, 5);
    context.lineTo(90, 55);
    context.stroke();
}

function line_miter() {
    context.lineJoin = 'miter';
    context.miterLimit = 1;
    context.lineWidth = 10;
    context.beginPath();
    context.moveTo(0, 100);
    for (let i = 0; i < 24; i++) {
        const dy = i % 2 === 0 ? 25 : -25;
        context.lineTo(Math.pow(i, 1.5) * 2, 75 + dy);

    }
    context.stroke();
}

let offset = 1;

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.setLineDash([4, 2]);
    context.lineDashOffset = -offset;

    context.strokeRect(10, 10, 100, 100);

}

function march() {
    offset++;
    console.log(offset);

    if (offset > 5) {
        offset = 0;
    }
    draw();
    setTimeout(march, 200);
}

//march();

function example_linedash() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.strokeStyle = 'black';
    context.beginPath();
    context.setLineDash([4, 2]);
    context.moveTo(0, 50);
    context.lineTo(canvas.width, 50);
    context.stroke();

    context.beginPath();
    context.strokeStyle = 'red';
    context.lineDashOffset = -offset;

    context.moveTo(0, 100);
    context.lineTo(canvas.width, 100);
    context.stroke();

    context.beginPath();
    context.arc(50, 100, 10, 0, Math.PI * 2);
    context.stroke();

    context.beginPath();
    context.arc(100, 100, 10, 0, Math.PI * 2);
    context.stroke();


}

function march2() {
    offset++;
    if (offset > 5) {
        offset = 0;
    }
    example_linedash();
    setTimeout(march2, 50);
}

//march2();

function gradientes() {
    const linGrad = context.createLinearGradient(0, 0, 200, 0);
    linGrad.addColorStop(0, 'red');
    linGrad.addColorStop(0.6, 'blue');
    linGrad.addColorStop(0.7, '#fff');
    linGrad.addColorStop(0.8, '#ff6');
    linGrad.addColorStop(1, 'black');

    context.fillStyle = linGrad;
    context.fillRect(10, 10, 200, 100);
}

function patrones() {
    let img = new Image();
    img.src = 'img.png';
    img.onload = () => {
        // create pattern
        const pattern = context.createPattern(img, "repeat");
        context.fillStyle = pattern;
        context.fillRect(0, 0, 100, 250);
    };
}

function draw2() {
    const ctx = document.getElementById("canvas").getContext("2d");

    ctx.fillRect(0, 0, 150, 150); // Draw a Black rectangle with default settings
    ctx.save(); // Save the original default state

    ctx.fillStyle = "#09F"; // Make changes to saved settings
    ctx.fillRect(15, 15, 120, 120); // Draw a Blue rectangle with new settings
    ctx.save(); // Save the current state

    ctx.fillStyle = "#FFF"; // Make changes to saved settings
    ctx.globalAlpha = 0.5;
    ctx.fillRect(30, 30, 90, 90); // Draw a 50%-White rectangle with newest settings

    ctx.restore(); // Restore to previous state
    ctx.fillRect(45, 45, 60, 60); // Draw a rectangle with restored Blue setting

    ctx.restore(); // Restore to original state
    ctx.fillRect(60, 60, 30, 30); // Draw a rectangle with restored Black setting
}

draw2();