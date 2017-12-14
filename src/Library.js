// Implement here your Library logic
function Library() {
    this.collection = []
}

Library.prototype.addText = function (text) {
    this.collection.push(text)
};

Library.prototype.showCollection = function () {
    console.log("%c This is the current collection: ", 'color: #42f44b');
    this.collection.forEach(function (text) {
        console.log("$c " + text.technical_sheet, 'color: #f4e241')
    });
};

module.exports = Library;