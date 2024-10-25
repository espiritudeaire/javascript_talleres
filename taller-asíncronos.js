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