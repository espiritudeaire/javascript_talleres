// Configuración del lienzo (canvas)
const canvas = document.querySelector("canvas"); // Selecciona el elemento <canvas> en el DOM
const ctx = canvas.getContext("2d"); // Obtiene el contexto 2D para dibujar en el lienzo

// Ajusta el tamaño del lienzo para que ocupe toda la ventana del navegador
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// Función para generar un número aleatorio entre un mínimo y un máximo
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función para generar un color RGB aleatorio
function randomRGB() {
    return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

// Constructor de la clase Ball (Bola) para crear bolas con sus propiedades
function Ball(x, y, velX, velY, color, size) {
    this.x = x;        // Posición horizontal inicial de la bola
    this.y = y;        // Posición vertical inicial de la bola
    this.velX = velX;  // Velocidad horizontal de la bola
    this.velY = velY;  // Velocidad vertical de la bola
    this.color = color; // Color de la bola
    this.size = size;  // Radio de la bola
}

// Método para dibujar la bola en el lienzo
Ball.prototype.draw = function () {
    ctx.beginPath(); // Inicia un nuevo camino de dibujo
    ctx.fillStyle = this.color; // Establece el color de relleno de la bola
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI); // Dibuja un círculo con el centro en (x, y) y radio `size`
    ctx.fill(); // Rellena el círculo con el color especificado
}

// Método para actualizar la posición de la bola y hacerla rebotar en los bordes
Ball.prototype.update = function () {
    // Si la bola toca el borde derecho o izquierdo del lienzo, invierte su velocidad en x
    if (this.x + this.size >= width) {
        this.velX = -this.velX;
    }
    if (this.x - this.size <= 0) {
        this.velX = -this.velX;
    }
    // Si la bola toca el borde superior o inferior del lienzo, invierte su velocidad en y
    if (this.y + this.size >= height) {
        this.velY = -this.velY;
    }
    if (this.y - this.size <= 0) {
        this.velY = -this.velY;
    }
    // Actualiza la posición de la bola sumando la velocidad a la posición actual
    this.x += this.velX;
    this.y += this.velY;
}

// Crear una bola de prueba y dibujarla en el lienzo
var testBall = new Ball(150, 106, 4, 4, 'blue', 1);
testBall.draw();

// Array para almacenar todas las bolas
var balls = [];

// Función principal para iniciar la animación
function loop() {
    // Dibuja un rectángulo translúcido sobre el lienzo para crear el efecto de movimiento
    ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
    ctx.fillRect(0, 0, width, height);

    // Crea bolas hasta que haya 25 en total en el array
    while (balls.length < 20) {
        var size = random(10, 20); // Genera un tamaño aleatorio para la bola entre 10 y 20
        var ball = new Ball(
            // Posición inicial de la bola, asegurando que esté completamente dentro del lienzo
            random(0 + size, width - size),
            random(0 + size, height - size),
            random(-7, 7), // Velocidad horizontal aleatoria entre -7 y 7
            random(-7, 7), // Velocidad vertical aleatoria entre -7 y 7
            randomRGB(),   // Color aleatorio
            size           // Tamaño de la bola
        );
        balls.push(ball); // Agrega la nueva bola al array `balls`
    }

    // Dibuja y actualiza la posición de cada bola en el array
    for (var i = 0; i < balls.length; i++) {
        balls[i].draw();   // Dibuja la bola
        balls[i].update(); // Actualiza su posición y verifica colisiones con los bordes
    }

    // Llama a la función `loop` nuevamente para el próximo cuadro de la animación
    requestAnimationFrame(loop);
}

loop(); // Inicia el bucle de animación


