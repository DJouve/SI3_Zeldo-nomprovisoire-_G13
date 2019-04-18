

class Monster { // La class pour faire les monstres
    constructor(name, life, sprite, taillex, tailley, damages, x, y, range, step, position)
    {
        this.sprite = sprite// A changer par les sprites des monstres, je sais pas comment faire
        this.taillex = taillex
        this.tailley = tailley
        this.name = name
        this.life = life
        this.damages = damages
        this.range = range// La range d'attaque du monstre, s'il en a une. Pour les attaques faut y réflerchir
        this.step = step
        this.position = position// Position c'est pour les sprites, savoir dans quelle direction il est
    }
    draw () // Fonction pour dessiner les monstres sur le plateau
    {// Ca fonctionne pour dessiner
        this.monster = document.createElement('div')
        this.monster.classList.add('.monster')
        plateau.appendChild(this.monster)
        spawn(monster)
    }
    spawn(monster){ // Fonction pour faire spawn les monstres à une des 3 portes. Ca fonctionne pas
        let spawn = Math.floor(math.random()*4)
        if (spawn = 0){
            div.style.top = 2 + "vw"
            div.style.left = 20 + 'vw'
        }
        if (spawn = 1){
            div.style.top = 2 + "vw"
            div.style.left = 20 + 'vw'
        }
        if (spawn = 2){
            div.style.top = 2 + "vw"
            div.style.left = 20 + 'vw'
        }
    }
}

let soldier = new Monster("soldier", 50, 2, 5, 5, 6, 200, 300, 1, 1 )
let archer = new Monster("archer", 25, 10, 5, 5, 5, 550, 400, 20, 5, 1)
let autremonstre = new Monster("autre montre", 50, 2, 2+"vw", 2+"vw", 15, 0, 0, 1, 2+"vw", 1)
let boss = new Monster("boss", 100, 2, 5 + "vw", 5 + "vw", 25, 0, 0, 2, 3 + "vw", 1)
let coffre = new Monster ("coffre", 1, 2, 4 + "vw", 2 + "vw", 0, 0, 0, 0, 0, 1)



function init(){ // les fonctions du début de jeu
    reset ()
    game1 ()
}

let button = document.querySelector("button")// Il faut un button pour lancer le jeu
button.addEventListener(
    'click',
    init ()
)


function reset(){ // Fonction qui va reset l'espace du jeu
    do{
        plateau.removeChild(monster)// En gros on peut dire que les monstres battent en retraitre
    } while (monster > 0)
    playerLeft = 22.4
    playerTop = 32
    player.style.top = playerTop + 'vw'
    player.style.left = playerLeft + 'vw'
}



function game1 (){ // Fonction pour lancer le premier niveau -> pop des monstres
    let compte = 0
    while (compte<15){
        for (i = 0; i<1; i++) {
        window.setInterval(archer.draw,10000)
        if (archer.life <= 0){
            plateau.removeChild(archer)
            compte++
        }
        window.setInterval(soldier.draw, 5000)
        if (soldier.life <= 0){
            plateau.removeChild(soldier)
            compte++
        }
    }

    if (compte == 14){ // L'idée c'est que quand on tue 15 monstres, on passe au niveau suivant
        reset ()
        game2 ()
    }
}

function game2 (){// Fonction du niveau 2

    let compte = 0
    while (compte < 15) {
        for (i=0; i<1; i++){
        window.setInterval(archer.draw, 7500)
        if (archer.life <= 0){
            plateau.removeChild(archer)
            compte++
        }
        window.setInterval(autremonstre.draw, 12500)
        if (autremonstre.life <= 0){
            plateau.removeChild(autremonstre)
            compte++
        }
    }
    if (compte == 14){ // Même principe que le niveau 1
        reset ()
        game3()
    }
}

function game3(){// Fonction du niveau 3
    let compte = 0
    while (boss.life>0) {
        for (i = 0; i<1; i++){// Ca fait apparaitre des mobs au fur et à mesure. Y a plus de retraitre des monstres ils y vont tous
            window.setInterval(archer.draw, 5000)
            window.setInterval(soldier.draw, 3500)
            window.setInterval(autremonstre.draw, 7800)
            if (archer.life <= 0){
                plateau.removeChild(archer)
            }
            if (soldier.life <= 0){
                plateau.removeChild(soldier)
            }
            if (autremonstre.life <= 0){
                plateau.removeChild(autremonstre)
            }
            boss.draw
            if (boss.life <= 0){// La win condition c'est de vaincre le boss, vaincre les autres mobs ne fait rien
                endgame()
            }
        }
    }
}

// function endgame()
// {
//     reset()
//     coffre.draw// Ca fait apparaitre un coffre à 1 pv, si on l'attaque on gagne.
//     // if (coffre <= 0){
//     //     // IL faut créer une div avec le texte de quand on gagne le jeu et la passer de display:none à display:block en CSS pour qu'elle apparaisse au joueur.
//     // }
// }