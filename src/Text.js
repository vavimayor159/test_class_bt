// Implement here your Text logic
function Text(title, year, authors_array){
    this.title = title;
    this.year = year;
    this.authors_array = authors_array;
}

Text.prototype.f_authors = function () {
    return this.authors_array.join(', ');
};

module.exports = Text;