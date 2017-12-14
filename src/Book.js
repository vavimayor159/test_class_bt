'use strict';

// Implement here your Book logic
var Text = require('./Text');
function Book(title, year, authors_array, publisher){

    // Llamamos al constructor padre, nos aseguramos (utilizando Function#call) que "this" se
    // ha establecido correctamente durante la llamada
    Text.call(this, title, year, authors_array);

    this.publisher = publisher;
}

// Creamos el objeto Estudiante.prototype que hereda desde Persona.prototype
Book.prototype = Object.create(Text.prototype);    // Vea las siguientes notas

// Establecer la propiedad "constructor" para referencias a Estudiante
Book.prototype.constructor = Book;

Book.prototype.technical_sheet = function () {
    return 'Title: '     + this.title + '\n' +
        'Year: '      + this.year + '\n' +
        'Aurhors: '   + this.f_authors() + '\n' +
        'Publisher: ' + this.publisher + '\n';
};

module.exports = Book;