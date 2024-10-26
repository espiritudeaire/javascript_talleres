function multiplicarAsync(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
                reject('No se permiten número negativos');
            } else if (typeof a === 'number' && typeof b === 'number') {
                resolve(a * b);
            } else {
                reject('Ambos valores deben ser números')
            }
        }, 2000);
    });
}

function sumarAsync(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Ambos valores deben ser números')
            }
        }, 2000);
    });
}

multiplicarAsync(-3, 8)
    .then(r => {
        console.log('Resultado: ', r);
    })
    .catch(e => {
        console.log('Error', e);
    });

async function multiplicacionAsyncAwait(a, b) {
    try {
        const resultado = await multiplicarAsync(a, b);
        console.log('Resultado con async/await:', resultado);

    } catch (error) {
        console.error('Error con async/await:', error)
    }
}
multiplicacionAsyncAwait(3, 4)

sumarAsync(100, 5)
    .then(suma => {
        console.log('Suma:', suma);
        return multiplicarAsync(suma, 67);
    })
    .then(mult => {
        console.log('Multiplicación:', mult);
    })
    .catch(e => {
        console.log('Error:', e);
    });

function cargarUsuario() {
    return new Promise(resolve => setTimeout(() => resolve('Usuarios Cargados'), 1000))
}

function cargarProductos() {
    return new Promise(resolve => setTimeout(() => resolve('Productos Cargados'), 2000))
}

function cargarPedidos() {
    return new Promise((_, reject) => setTimeout(() => reject('Pedidos Cargados'), 3000))
}

async function cargarTodos() {
    try {
        const resultados = await Promise.allSettled([cargarUsuario(), cargarPedidos(), cargarProductos()])
        console.log(resultados);

    } catch (error) {
        console.log('ERROR:', error);

    }
}

cargarTodos()


function tarea(numero) {
    return new Promise(resolve => setTimeout(() => {
        console.log(`Tarea ${numero} completada`);
        resolve(`Tarea ${numero}`);
    }, 1000));
}

async function ejecutarConLimite(tareas, limite) {
    const cola = [...tareas];  // Clonamos el array de tareas
    const resultados = [];     // Aquí se almacenarán los resultados

    while (cola.length) {
        console.log(`Tareas restantes: ${cola.length}`);
        const ejecuciones = cola.splice(0, limite).map(t => t());
        console.log(`Ejecutando lote de ${ejecuciones.length} tareas`);

        const resultadoGrupo = await Promise.all(ejecuciones);
        resultados.push(...resultadoGrupo); // Añade resultados al array principal
        console.log(`Resultados hasta ahora: ${resultados}`);
    }

    console.log('Todas las tareas completadas:', resultados);
}

ejecutarConLimite([() => tarea(1), () => tarea(2), () => tarea(3), () => tarea(4)], 2);
