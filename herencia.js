class people{
    constructor(name,lastName,age){
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }
    dataPeople(){
        return `name --> ${this.name}\n last name --> ${this.lastName}\n  age --> ${this.age}`
    }
}

class student extends people{
    constructor(name,lastName,age,identityCard){
        super(name,lastName,age);
        this.identityCard = identityCard;
    }
    dataStudent(){
        return `${super.dataPeople()} identity card --> ${this.identityCard}`
    }
}

let peopleOne = new people('carlos','torres',19);
console.log(peopleOne.dataPeople());

let studentOne = new student('farit','gelves',19,1097092366);
console.log(studentOne.dataStudent())