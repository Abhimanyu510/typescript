//FUNCTION TO CALCULATE FACTORIAL OF A NUMBER WITH PROPER ANNOTATION.

// function factorial(num:number):number{
//     if(num==0||num==1)return 1;
//     return num*factorial(num-1);
// }
// console.log(factorial(17));

// interface user{
//     name:string;
//     age:number;
//     email:string;
// }

//A FUNCTION THAT ACCEPTS THE USER OBJECT AND RENTURNS A FORMATED STRING

// function formateuser(user:user):string{
//     return `User ${user.name} {${user.age}} years can be contact via ${user.email}`;
// }

// const user:user={
//     name:'Abhi',
//     age:20,
//     email:'amg92848@gmail.com'
// }

// console.log(formateuser(user));

//TOTAL PRICE OF AN ARRAY OF PRODUCT OBJECT AND EACH PRODUCT HAS AN UNIQUE PRICE AND QUANTITY

interface Product{
    Price:number,
    Quantity:number
}
function calculatetotal(product:Product[]):number{
    return product.reduce(
        (total,product) => total + product.Price * product.Quantity,0
    )
}

let cart: Product[] = [
    {Price:100,Quantity:2},
    {Price:500, Quantity:3}

];
console.log(calculatetotal(cart));