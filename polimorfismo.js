class animal{
    constructor(name){
        this.name = name;
    }
    dataAnimal(){
        return `name --> ${this.name}`;
    }
}

class cat extends animal{
    dataAnimal(){
        return `name cat --> ${this.name}`;
    }
}

let ani = new cat("niña");
console.log(ani.dataAnimal());