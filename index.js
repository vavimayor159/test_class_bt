'use strict';

// Main program to show the results
var Library = require('./src/Library');
var Book    = require("./src/Book");
var Paper   = require("./src/Paper");

var library = new Library;
var book = new Book("Design Patterns: Elements of Reusable Object-Oriented Software", 1994, ["Erich Gamma", "John Vlissides", "Ralph Johnson", "Richard Helm"], "Addison-Wesley");
var paper = new Paper("Automatic code generation from design patterns", 1996, ["John Vlissides", "F. Budinsky", "M. Finnie"], "IBM Systems Journal");

library.addText(book);
library.addText(paper);

// Show the library content
console.log('\x1b[36m%s\x1b[0m', 'This is the current collection: ');
library.showCollection();