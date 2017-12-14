var expect    = require("chai").expect;
var Book      = require("../src/Book");

describe("Library for the class", function () {
    describe("Book class", function () {
        it("Create a new object of Book class", function () {
            var book = new Book();
            expect(book instanceof Book).to.equal(true)
        });
    });
});