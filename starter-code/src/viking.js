// Soldier

class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(Damage) {
        this.health = this.health - Damage;
    }
}




// Viking

class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(Damage) {
        this.health = this.health - Damage;
        if (this.health > 0) {
            return `${this.name} has received ${Damage} points of damage`;
        }
        else {
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry() {
        return "Odin Owns You All!";
    }
}




// Saxon

class Saxon extends Soldier {

    receiveDamage(Damage) {
        this.health = this.health - Damage;
        if (this.health > 0) {
            return `A Saxon has received ${Damage} points of damage`;
        }
        else {
            return `A Saxon has died in combat`;
        }
    }
}




// War (BONUS)

class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking) {
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }
    vikingAttack() {
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let attack = randomSaxon.receiveDamage(randomViking.strength);
        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomSaxon, 1);
        }
        return attack;
    }
    saxonAttack() {
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let attack = randomViking.receiveDamage(randomSaxon.strength);
        if (randomViking.health <= 0) {
            this.vikingArmy.splice(randomViking, 1);
        }
        return attack;
    }
    showStatus() {
        if (this.saxonArmy.length == 0) {
            return "Vikings have won the war of the century!";
        }
        else if (this.vikingArmy.length == 0) {
            return "Saxons have fought for their lives and survive another day...";
        }
        else if (this.vikingArmy.length == 1 && this.saxonArmy.length == 1) {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}
