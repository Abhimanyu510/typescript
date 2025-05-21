//classes
class person{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
        greet():string{
            return`Hello, My name is ${this.name} and I am ${this.age} yrs old`;
        }
}
const new_person = new person('Diya',19);
let new_person1 = new person('Abhimanyu',20);
//console.log(new_person.greet());
//console.log(new_person1.greet());

//access modiefier
class Car{
    private make:string;
    private model:string;
    private year:number;

    constructor(make:string,model:string,year:number){
        this.make=make;
        this.model=model;
        this.year=year;
    }

        getdetail():string{
            return `Model : ${this.model}; Make : ${this.make}; Year : ${this.year}`;
        }
}
let newCar = new Car('Mruti suzuki','as2011',2011);
//console.log(newCar.getdetail());

abstract class shape{
    abstract getArea():number;
    printArea():void{
        console.log(`Area is : ${this.getArea()}`);
    }
}

class Rectangle extends shape{
    constructor(public width:number,public height:number){
        super();
    }
    getArea(): number {
        return this.width * this.height;
    }
}

const rect = new Rectangle(4,6);
rect.printArea();

//setter and getter
class Circle{
    constructor(Radius:number){
        this.radius=Radius;
    }
    get radius():number{
        return this.radius
    }
    set radius(value:number){
     if(value<=0){
        throw new Error('Radius must be positive')
     }
     this.radius=value;
    }
}

// const circle = new Circle(10);
// console.log(circle.radius);
// circle.radius=12;
// console.log(circle.radius);
let circle = new Circle(-1);
console.log(circle.radius);
