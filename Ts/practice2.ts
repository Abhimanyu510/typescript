/*Create a bank A/C class :
Write a bank a/c class with the following properties

account number: string
balance : number(private)

The class should have methods :
deposite(amount : number): void(to add to balance)
withdraw(amount:number):void(to substract form balance)
get balance():(number to return current balance)*/


class Bank_account{
   private Balance:number;

   constructor(public Account_number:string, initialBalance:number){
         this.Balance=initialBalance;
   }

   deposite(amount:number): void{
    this.Balance += amount;
   }

   withdraw(amount:number):void{
    if(amount>this.Balance){
        throw new Error('Insufficient Balance');
    }
    this.Balance -= amount;
   }

   getBalance():number{
    return this.Balance;
   }
}

// const Myaccount = new Bank_account('43293ABU',1000);
// Myaccount.deposite(599);
// console.log(Myaccount.getBalance());
// Myaccount.withdraw(700);
// console.log(Myaccount.getBalance());
// Myaccount.withdraw(1000);
// console.log(Myaccount.getBalance());

//

class Employee{
    constructor(public name:string,public salary:number){
        
    }
    getDetail():string{
        return `Employee : ${this.name}, Salary : ${this.salary}`;
    }
    
}

class Manager extends Employee{
    constructor(name:string,salary:number,public department:string){
        super(name,salary);
    }
    getDetail(): string {
        return `Manager ${this.name}, Salary is ${this.salary}, of department ${this.department}`;
    }
}

const emp = new Employee('Diya',50000);
const mgr = new Manager('Prem',70000,'HR');

console.log(emp.getDetail());
console.log(mgr.getDetail());