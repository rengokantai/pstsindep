import {Category} from './enums';

interface Book{
    id:number,name:string,author:string,title:string,category:Category,available:boolean,damaged?:Loader
}

interface Loader{
    (reason:string):void;
}

interface Person{
    name:string,
    email:string
}
interface Author extends Person{
    number:number
}

interface Librarian extends Person{
    ass:(name:string)=>void
}
export {Book,Loader,Person,Author,Librarian}

