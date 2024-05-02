'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClienteSchama = Schema({
    primer_nombre: {type: String, required: true},
    segundo_nombre: {type: String, required: false},
    primer_apellido: {type: String, required: true},
    segundo_apellido: {type: String, required: false},
    email: {type: String, required: true},
    password: {type: String, required: true},
    perfil: {type: String, default: 'perfil.png', required: false},
    telefono: {type: String, required: true},
    genero: {type: String, required: false},
    dni: {type: String, required: false},
});

module.exports = mongoose.model('cliente',ClienteSchama);