'use strict';

// Implement here your Text logic
function Text(title, year, authors_array){
    this.title = title;
    this.year = year;
    this.authors_array = authors_array;
}

Text.prototype.f_authors = function () {
    return this.authors_array.join(', ');
};

Text.prototype.technical_sheet = function () {
    return "Title: "   + this.title + "\n" +
    "Year: "    + this.year + "\n" +
    "Aurhors: " + this.f_authors() + "\n";
};

module.exports = Text;