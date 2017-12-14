var expect         = require("chai").expect;
var Book           = require("../src/Book");
var Text           = require("../src/Text");
var Paper          = require("../src/Paper");

var book_title     = "Design Patterns: Elements of Reusable Object-Oriented Software";
var book_year      = 1994;
var book_authors   = ["Erich Gamma", "John Vlissides", "Ralph Johnson", "Richard Helm"];
var book_publisher = "Addison-Wesley";

var paper_title    = "";
var paper_year     = 1994;
var paper_authors  = [];
var paper_journal  = "";

describe("Library for the class", function () {
    describe("Text class", function () {
        it("Create a new Text object", function () {
            var text = new Text();
            expect(text instanceof Text).to.equal(true)
        });

        it("Create a Text with a title", function () {
            var text = new Text(book_title);
            expect(text.title).to.equal(book_title);
        });

        it("Show authors of a Text", function () {
            var text = new Text(book_title, book_year, book_authors);
            expect(text.f_authors()).to.equal("Erich Gamma, John Vlissides, Ralph Johnson, Richard Helm");
        })
    });

    describe("Book class", function () {
       it("Create a new Book object and show title", function () {
           var book = new Book(book_title, book_year, book_authors, book_publisher);
           expect(book.title).to.equal(book_title);
       });

       it("Create a new Text object who actually is a Book object", function () {
           var book = new Book();
           expect(book instanceof Text).to.equal(true)
       });
    });

    describe("Paper class", function () {
        it("Create a new Paper object and show title", function () {
            var paper = new Paper(paper_title);
            expect(paper.title).to.equal(paper_title, paper_year, paper_authors, paper_journal);
        });

        it("Create a new Text object who actually is a Paper object", function () {
            var paper = new Paper();
            expect(paper instanceof Text).to.equal(true)
        });
    });
});