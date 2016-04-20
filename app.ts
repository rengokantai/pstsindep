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

function getAllBook(){
    let books=[
        {name:'start',author:'k',available:true}
    ]
    return books;
}

function logFirstBook(books){
    let numberOfBooks:number =books.length;
    let first:string ='';
    for(let b of books){
        
        if(b.available){
            first = b.title;
            break;
        }
    }
    console.log(numberOfBooks);
    console.log(first);
}
const allBooks = getAllBook();
logFirstBook(allBooks);
