// class K{
//     a
//     constructor(a:number){
//         this.a=a;
//     }
//     get(){
//         return this.a;
//     }
// }
// var k = new K(2);
// console.log(k.get());
var enums_1 = require('./enums');
function getAllBook() {
    var books = [
        { id: 1, name: 'start', author: 'k', title: 't', category: enums_1.Category.Novel, available: true },
        { id: 2, name: 'end', author: 'h', title: 'i', category: enums_1.Category.Textbook, available: true }
    ];
    return books;
}
function logFirstBook(books) {
    var numberOfBooks = books.length;
    var first = '';
    for (var _i = 0; _i < books.length; _i++) {
        var b = books[_i];
        if (b.available) {
            first = b.title;
            break;
        }
    }
    console.log(numberOfBooks);
    console.log(first);
}
function getByCategory(cat) {
    console.log(cat);
    var books = getAllBook();
    var filterTitles = [];
    for (var _i = 0; _i < books.length; _i++) {
        var b = books[_i];
        if (b.category === cat) {
            filterTitles.push(b.title);
        }
    }
    return filterTitles;
}
function logTitles(titles) {
    for (var _i = 0; _i < titles.length; _i++) {
        var t = titles[_i];
        console.log(t);
    }
}
//const allBooks = getAllBook();
//logFirstBook(allBooks);
var textbooks = getByCategory(enums_1.Category.Novel);
logTitles(textbooks);
textbooks.forEach(function (ele, idx, arr) {
    console.log(ele);
});
var IdGen;
IdGen = function (name, id) { return name + id; };
//optional params
function opt(name, age) {
}
//***********Demo interface
function printBook(book) {
    console.log(book.title);
}
var newbook = { id: 1, name: 'start', author: 'k', title: 't', category: enums_1.Category.Novel, available: true, damaged: function (r) { return console.log(r); } };
//duck typing. newbook does not declare Book type, but it implements all var in Book interface.So it is a book
printBook(newbook);
newbook.damaged("bad");
//reuse
var useLoader;
useLoader = function (r) { return console.log(r); };
useLoader("bad");
//# sourceMappingURL=app.js.map