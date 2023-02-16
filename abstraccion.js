class employee{
    constructor(name,age, baseSalary){
    this.name = name;
    this.age = age;
    this.baseSalary = baseSalary;
    }
    getEmployyes(){
        console.log(`Name --> ${this.name} Age --> ${this.age} Salay --> ${this.baseSalary}`)
    }
}
let emp = new employee('carlos', 19, 10000)
emp.getEmployyes();

/* function employee(name,age, baseSalary){
    this.name = name;
    this.age = age;
    this.baseSalary = baseSalary;
    
    this.getEmployyes = ()=>{
    console.log(`Name --> ${this.name} Age --> ${this.age} Salay --> ${this.baseSalary}`)
    }
}
let emp = new employee('carlos', 19, 10000)
emp.getEmployyes(); */