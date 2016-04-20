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
import {Category} from './enums';
import {Book,Loader} from './interfaces';

function getAllBook():Book[]{
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


//const allBooks = getAllBook();
//logFirstBook(allBooks);
const textbooks = getByCategory(Category.Novel);
logTitles(textbooks);

textbooks.forEach((ele,idx,arr)=>{
    console.log(ele)
})
let IdGen : (name:string,id:number)=>string;
IdGen = (name:string,id:number)=>{return name+id}

//optional params
function opt(name:string,age?:number):void{
    
}


//***********Demo interface
function printBook(book:Book):void
{
    console.log(book.title)
}
let newbook = {id:1,name:'start',author:'k',title:'t',category:Category.Novel,available:true,damaged:(r:string)=>console.log(r)} 
//duck typing. newbook does not declare Book type, but it implements all var in Book interface.So it is a book
printBook(newbook);
newbook.damaged("bad");

//reuse
let useLoader:Loader
useLoader = (r:string) =>console.log(r);
useLoader("bad");

