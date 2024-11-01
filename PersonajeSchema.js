const mongoose = require('mongoose');
const { Schema } = mongoose;

const personajeSchema = new Schema(
    {
        nombre: String,
        pais: String,
        epoca: String,
        descripcion: String
    },
    {
        statics: {
            findByName(name) {
                return this.find({ nombre: new RegExp(name, 'i') })
            }
        }
    });

const personajeModel = mongoose.model('Personaje', personajeSchema);

module.exports = personajeModel;