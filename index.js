class hero{
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }

    checkAttack(){
        let attack;
        
        if (this.type === "Wizard"){
            attack = "magic";
        } else if (this.type === "Warrior"){
            attack = "sword";
        } else if (this.type === "Ninja"){
            attack = "shuriken";
        } else if (this.type === "Monk"){
            attack = "martial arts";
        } else {
            attack = "the fists";
        }

        console.log(`The ${this.type} attack using ${attack}.`);
    }
}

const userOne = new hero("Charles", 40, "Monk");

userOne.checkAttack()