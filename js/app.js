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
function getAllBook() {
    var books = [
        { id: 1, name: 'start', author: 'k', title: 't', category: Category.Novel, available: true },
        { id: 2, name: 'end', author: 'h', title: 'i', category: Category.Textbook, available: true }
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
var Category;
(function (Category) {
    Category[Category["Novel"] = 9] = "Novel";
    Category[Category["Textbook"] = 10] = "Textbook";
})(Category || (Category = {}));
//const allBooks = getAllBook();
//logFirstBook(allBooks);
var textbooks = getByCategory(Category.Novel);
logTitles(textbooks);
textbooks.forEach(function (ele, idx, arr) {
    console.log(ele);
});
//# sourceMappingURL=app.js.map