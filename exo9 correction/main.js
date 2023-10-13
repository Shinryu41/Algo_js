class Pokemon {
    constructor(name, attack, defense, hp, luck) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.hp = hp;
        this.luck = luck;
    }

    isLucky(){
        return Math.floor(Math.random() * 100) <= this.luck;
    }

    attackPokemon(pokemon) {
        if (this.isLucky()) {
            let damages = this.attack - pokemon.defense;
            pokemon.hp -= damages;
            console.log(`${this.attack} a attaqué ${pokemon.name}, perdant ${damages} hp !`);
        } else {
            console.log(`${this.name} a raté son attaque! `);
        }
    }
}

let Vipélierre = new Pokemon('Vipélierre', 10, 5, 30, 75);
let rondoudou = new Pokemon('rondoudou', 20, 4, 25, 70)

while (Vipélierre.hp > 0 || rondoudou.hp > 0) {
    console.log(`${Vipélierre.name} attaque rondoudou`)
    Vipélierre.attackPokemon(rondoudou)
    if (rondoudou.hp <= 0) {
        console.log(`${rondoudou.name} est mort`)
        break
    }
    console.log(`${rondoudou.name} attaque Vipélierre`)
    rondoudou.attackPokemon(Vipélierre)
    if (Vipélierre.hp <= 0) {
        console.log(`${Vipélierre.name} est mort`)
        break
    }   
}