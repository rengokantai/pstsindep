import {Book,Loader,Person,Author,Librarian} from './interfaces';

class UuniL implements Librarian{
    name:string;
    email:string;
    number:number;
    ass(a:string){
        console.log(a+this.name);
    }
}

export {UuniL}