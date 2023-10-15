let song = ['Anissa-Wejdene', 'Invincible-Skillet', 'Runaway Baby-BrunoMars', 'Holding out for a Hero', 'Rise-Madkid']
let SantéMentale = 10;

for(i=30; i > 0; i--) {
    let random = Math.floor(Math.random() * song.length) // choisis un nombre aléatoire entre 0 et 5 -1
    let RandomSong = song[random] 
    if (RandomSong == 'Anissa-Wejdene') {
        SantéMentale -= 1 // même utilisation que SantéMentale = SantéMentale -1 (soustraire une valeur)
        console.log(`La radio joue la musique Anissa de Wejdene, la santé mentale de John tombe à ${SantéMentale} et il lui reste ${i} feux rouges avant d'arriver chez lui !`)
    } else {
        console.log(`La radio joue la musique ${RandomSong}, il lui reste ${i} feux rouges avant d'arriver chez lui !`)
    }
    if (SantéMentale == 0 ) {
        console.log('John a fini en morceau, rip')
        break
    }
} 

if (SantéMentale > 0 ) {
console.log(`John a réussi à rentrer chez lui. Il lui reste ${SantéMentale} de santé mentale et a changé de taxi ${10 - SantéMentale} fois.`)
}