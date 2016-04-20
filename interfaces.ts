import {Category} from './enums';

interface Book{
    id:number,name:string,author:string,title:string,category:Category,available:boolean,damaged?:Loader
}

interface Loader{
    (reason:string):void;
}
export {Book,Loader}

