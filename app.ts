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
        {id:1,name:'start',author:'k',title:'t',category:Category.Novel,available:true},
        {id:2,name:'end',author:'h',title:'i',category:Category.Textbook,available:true}
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

function getByCategory(cat:Category):Array<string>{
    console.log(cat);
    const books = getAllBook();
    const filterTitles : string[] =[];
    for(let b of books){
        
        if(b.category===cat){
            filterTitles.push(b.title);
        }
    }
    return filterTitles;
}

function logTitles(titles:string[]):void{
    for(let t of titles){
        console.log(t);
    }
}


enum Category{Novel=9,Textbook}
//const allBooks = getAllBook();
//logFirstBook(allBooks);
const textbooks = getByCategory(Category.Novel);
logTitles(textbooks);

textbooks.forEach((ele,idx,arr)=>{
    console.log(ele)
})