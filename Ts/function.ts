// function add(a:number,b:number):number{
//     return a+b;
// }
// console.log(add(2,2));

// function greet(username: string, greeting?:string): string{
//     return `${username} ${greeting? greeting:''}`;   //Ternary Operator
// }
// console.log(greet('Nikhil'));

function greet12(greeting:string,...name:string[]): void {
    name.forEach((name)=>{
        console.log(`${greeting},${name}`);
    })
}
greet12('hello','Nikhil','code with me','Rahul');