'use strict';

// Implement here your Library logic
function Library() {
    this.collection = []
}

Library.prototype.addText = function (text) {
    this.collection.push(text)
};

Library.prototype.showCollection = function () {
    this.collection.forEach(function (text) {
        console.log('\x1b[33m%s\x1b[0m', text.technical_sheet());
    });
};

module.exports = Library;