let names = ["Albert", "Alex", "Alexis", "Alice", "Arthur", "Charles", "Charlot", "Chris", "Christophe", "Clemence", "Clement", "Clide", "Ellie", "Elza", "Emmy", "Eric", "Eva", "Iris", "Jade", "Jessi", "John", "Jonathan", "Julien", "Julie", "June", "Kevin", "Laura", "Leo", "Leon", "Marcus", "Mark", "Max", "Mickael", "Mike", "Olivia", "Rachel", "Rick", "Robin", "Rose", "Sophie", "Stephane", "Ted", "Tess", "Thomas", "Tom", "Tony", "Victor", "Victoria"]

let stats = [
    Nerd = {
        p_death:  0.5,
        p_atk:  0.2,
        p_deathByAtk:  0.5,
    }, 
    Sportif = {
        p_death:  0.5,
        p_atk:  0.6,
        p_deathByAtk:  0.4,
    },
    Blonde = {
        p_death:  0.6,
        p_atk:  0.3,
        p_deathByAtk:  0.6,
    },
    Professeur = {
        p_death:  0.3,
        p_atk:  0.2,
        p_deathByAtk:  0.3,
    },
    Policier = {
        p_death:  0.2,
        p_atk:  0.5,
        p_deathByAtk:  0.4,
    }
    // stats des "clichés"
]

let Survivant = []
let mort = []

class Personnage {
    constructor(name, hp, stats) {
        this.name = name;
        this.hp = hp;
        this.stats = stats;
    } // caractéristiques des personnages

    atk (target) {              //probabilité d'attaque de Jason
        if(Math.random() < this.stats.p_atk) {          
            console.log('Jason attaque sa cible.')
            if (Math.random() < target.stats.p_deathByAtk){
                console.log(`Jason perd 15 hp et il reste ${Jason.hp - 15} hp mais sa cible est mort.`)
                Jason.hp -=15
                target.hp = 0
            } else {
                console.log(`la cible est mort.`)
            }
        } else {
            if(Math.random() < target.stats.p_atk) { //probabilité des attaques de survivants
                console.log(`la cible attaque et Jason perd 10 hp et il lui reste ${Jason.hp -= 10} hp.`)
                Jason.hp -= 10
            }
        } 
    }
}

Tueur = {
    p_atk:  0.5,
}

let Jason = new Personnage("Jason", 100, Tueur)

for (i = 0; i < 5; i++) { //nombre de Survivant 
    let randomName = names[Math.floor(Math.random() * names.length)]
    let random = Math.floor(Math.random() * stats.length)
    let randomCharac = stats[random] 
    let perso = new Personnage(randomName, 100, randomCharac)

    Survivant.push(perso)
    stats.splice(random, 1)
}

while (Jason.hp > 0 && Survivant.length > 0) { 
    let random = Math.floor(Math.random() * Survivant.length)
    let randomPerso = Survivant[random]
    Jason.atk(randomPerso)

    if (randomPerso.hp == 0){
        mort.push(randomPerso.name)
        Survivant.splice(random, 1)
    }

    if (Jason.hp <= 0) {
        console.log(`Jason est mort`)
        break
    }

    if (Survivant.length == 0) {
        console.log(`Jason a fini la chasse.`)
        break
    }
}