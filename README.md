####
#####pstsindep
######using vscode
```shift ctrl p``` open terminal  
set a new task ```shift ctrl b```
run build task  
configure launch.json  
press F5 to debug  
args in tasks.json:
```
"args": ["--target","ES5","--outDir","js","--sourceMap","--module","commonjs","--watch","app.ts"]
```
#####basics
######basic type
Boolean, Number, String, Array, Enum, Any, Void

######enum array tuple
```
enum E{A,B,C}  //0,1,2
enum E{A=1,B,C}  //1,2,3
enum E{A=5,B=4,C=1}  //5,4,1
```
tuple: first few elem: ```let x:[number,string]=[1,'x'];  ```
then we can add more elem (string,number only)
x[2]=1
x[3]='b'
#####function
######this
"this" is cautured at function creation, not invocation
######function type
let declare:(name:string)=>void;        //COLON,ARROW

######Optional param
```
function opt(name?:string,age:number):void{}  //illegal, required param cannot follow optioanl param
function opt(name:string,age?:number):void{}  //legal
```

######Rest param
```
function fun(name:string ...others:number[]){}
```

######Duck typing
```
interface pro{
    walk:()=>void
}
let ins = {
    walk:()=>{console.log('walk');
}

function i(p:pro){}
i(ins);
```
######demo
if function binding a interface, it must implement all var/methods of the interface.
######interfaces for function types
```
interface S{
    (a:string,b:number):string      //note the syntax difference  let declare:(name:string)=>void;  
}

#####classes
######access modi
public: must use constructor param as a class property  
private: only in class, no subclass, no instance  
protected: only class and subclass, no instance
```
class A{
    p
    constructor(p:number){this.p=p;}
}
```
same as
```
class A{
    constructor( public p:number){}
}
```
this is legal:
```
class A{
    constructor( private p:number){}
}
let a =new A(10);
```
(we can call constructor even it's parameter is private, however we cannot get it

######cliass expressions
inline class:
```
class B extends class {r:string}{   //this inline class only has one property
    s:string
}
```
#####modules and namespaces
######change in ts 1.5
internal:namespace  
external:modules

######namespace
util.ts
```
namespace A{
    export function B(){}
    export namespace C{
        export function D(){}
    }
}
call:
A.B()
A.C.D()
```
using /// reference:
```
/// <reference path="util.ts" />
```
to import specific function:
```
import a = A.C
```

to compile use tsc:
```
tsc --target es5 app.ts
```
not working. to make this working, use
```
tsc --target es5 app.ts --outFile out.js
```

######detault export
```
export default class{}
```
```
import R from './x.js'    //random name
```
#####generic
######generic function
```
function F<T>(thing:T):T{
    return thing;
}
let ins:string = F<string>('k');
```
######generic interface
```
interface N<T>{
    getItem:()=>T;
}
```

######generic constraint
```
interface B{}
class S<T extends B>{}
```

#####compiler options
create tsconfig.json
```
{
    "compilerOptions": {
        "target": "es5",
        "outDir": "js",
        "module": "commonjs",
        "sourceMap": false
    },
    "files": [
        "app.ts"
    ]
}
```
then
```
tsc
```
this will overwrite tasks.json