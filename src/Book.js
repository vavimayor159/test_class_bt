// Implement here your book logic
function Book(title, year, authors_array){
    this.title = title;
    this.year = year;
    this.authors_array = authors_array;
}

Book.prototype.f_authors = function () {
  return this.authors_array.join(', ');
};

module.exports = Book;