var expect       = require("chai").expect;
var Book         = require("../src/Book");
var design_title = "Design Patterns: Elements of Reusable Object-Oriented Software";
var year         = 1994;
var authors      = ["Erich Gamma", "John Vlissides", "Ralph Johnson", "Richard Helm"];

describe("Library for the class", function () {
    describe("Book class", function () {
        it("Create a new object of Book class", function () {
            var book = new Book();
            expect(book instanceof Book).to.equal(true)
        });

        it("Create a book with a name", function () {
            var book = new Book(design_title);
            expect(book.title).to.equal(design_title);
        });

        it("Show authors", function () {
            var book = new Book(design_title, year, authors);
            expect(book.f_authors()).to.equal("Erich Gamma, John Vlissides, Ralph Johnson, Richard Helm");
        })
    });
});