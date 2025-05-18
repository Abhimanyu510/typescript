/*var a1: number = 1;
a1 = 10;
function add1(a: number,b: number): number{
    return a + b;
}
const e = add1(1,a1);
console.log(e);*/

/*let obj: object = {
    name:"Abhi",
    age:334423
};

let obj1 = { ...obj };
console.log(obj1);*/

/*let arr: [number,string] = [22,'Abhi'];
console.log(arr);

let userData: [string,number] = ['Abhimanyu',239875];
userData.push(100);
console.log('userData = ',userData);*/

/*const enum size{
    Small=1,
    Medium,
    Large
}
let Size: size= size.Medium;
console.log('Size : ',size.Medium);*/


/*function infinit(): never{
    while(true){
        console.log(1);
    }
}
infinit();*/


/*function throwError(message: string): never{
    throw new Error(message);
}
throwError("FUCK U ");*/

/*let obj: object = {
    name: 'Abhimanyu Goswami',
    age: 22
}
let obj1={...obj};
console.log(obj1);*/

/*function logmessage(message: string): void{
    console.log(message);
    //return undefine
}*/

/*function printid(id: string|number){
    console.log(`id: ${id}`);
}
printid('abhi');
printid(5442);*/

/*function printidFn(id: string|number){
    if(typeof id === 'string'){
        console.log('ID IS STRING : ',id.toUpperCase());
    }else{
        console.log(`Id is a number : ${id}`);
    }
}
printidFn(23);*/


/*interface Person{
    name: string;
    age: number;
    greet():void
}

let people: Person = {
    name:'Abhi',
    age : 20,
    greet() {
        console.log('Hi')
    },
}
console.log(people);*/


/*interface Mathop{
    (a:number,b:number):number;
}
const add: Mathop=(x,y)=>x+y;
const substract: Mathop=(x,y)=>x-y;
console.log(add(2,5));
console.log(substract(4,4));*/

/*type  person = {
    name: string;
    age: number;
    phoneno: number; 
}
let Person: person={
    name:'Abhi',
    age:20,
    phoneno:6002470742
}
//console.log(Person.phoneno);
console.log(Person);*/

interface user{
    name:string,
    phn?:number
}
interface customer extends user{
    address:string,
}
let CustomerId: customer = {
    address:'Polofield wardno 13',
    name:'Abimanyu',
    //phn:60023470742

}
console.log(CustomerId);