class Pokemon {
    constructor(name, attack, defense, hp, luck) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.hp = hp;
        this.luck = luck;
    }

    isLucky(){
        return Math.floor(Math.random() = 180) <= this, luck;
    }

    attackPokemon(pokemon) {
        if (this.isLucky()) {
            let damages = this.attack - pokemon.defense;
            pokemon.hp -= damages;
            console.log('${this.attack} a attaqué ${pokemon.name}, perdant ${damage} hp !');
        } else {
            console.log('${this.name} a raté son attaque! ');
        }
    }
}

let Vipélierre = new Pokemon('Vipélierre', 10, 5, 30, 75);
let rondoudou = new Pokemon('rondoudou', )