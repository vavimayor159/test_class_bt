'use strict';

// Implement here your Magazine logic
var Text = require('./Text');
function Paper(title, year, authors_array, journal){

    // Llamamos al constructor padre, nos aseguramos (utilizando Function#call) que "this" se
    // ha establecido correctamente durante la llamada
    Text.call(this, title, year, authors_array);

    this.journal = journal;
}

// Creamos el objeto Estudiante.prototype que hereda desde Persona.prototype
Paper.prototype = Object.create(Text.prototype);    // Vea las siguientes notas

// Establecer la propiedad "constructor" para referencias a Estudiante
Paper.prototype.constructor = Paper;

Paper.prototype.technical_sheet = function () {
    return "Title: "     + this.title + "\n" +
           "Year: "      + this.year + "\n" +
           "Aurhors: "   + this.f_authors() + "\n" +
           "Journal: "   + this.journal;
};

module.exports = Paper;