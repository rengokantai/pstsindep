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
        { name: 'start', title: 'k', available: true }
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
var allBooks = getAllBook();
logFirstBook(allBooks);
//# sourceMappingURL=app.js.map