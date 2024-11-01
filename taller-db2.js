const mongoose = require('mongoose');

main().catch(err => console.log(err));
console.log('fuera del main');

const personajeModel = require('./PersonajeSchema.js')

// Crear un nuevo personaje
const nuevoPersonaje = new personajeModel({
    nombre: 'Simón Bolívar',
    pais: 'Venezuela',
    epoca: 'Independencia',
    descripcion: 'Líder militar y político de la independencia latinoamericana.'
});

nuevoPersonaje.save()
    .then(personaje => console.log('Personaje creado:', personaje))
    .catch(error => console.error('Error:', error));

let searching = await personajeModel.findByName('Simon');
console.log('Búsqueda', searching);



async function main() {

    try {
        await mongoose.connect('mongodb+srv://espiritudeaire:123@cluster0.lg823yo.mongodb.net/historia?retryWrites=true&w=majority&appName=Cluster0');
        console.log('Conectado');
    } catch (error) {

    }
}