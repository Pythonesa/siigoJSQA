function Player(name) {
    this.name = name;
    this.hp = 100;
    this.mp = 100;

    this.heal = function(targetPlayer) {
        if (this.mp >= 40) {
            this.mp -= 40;
            if (targetPlayer.hp > 0) {
                targetPlayer.hp += 20;
                if (targetPlayer.hp > 100) {
                    targetPlayer.hp = 100;
                }
                console.info(this.name + " ha curado a " + targetPlayer.name + " que ahora tiene " + targetPlayer.hp + " puntos de vida.");
            }
            else {
                console.info(targetPlayer.name + " ya ha muerto, no puedes curarlo.");
            }
        }
        else {
            console.info(this.name + " no tiene suficiente mana para curar.");
        }
    }

    this.attack = function(targetPlayer) {
        if (targetPlayer.hp > 0) {
            targetPlayer.hp -= 25;
            if (targetPlayer.hp <= 0) {
                targetPlayer.hp = 0;
                console.info(targetPlayer.name + " ha muerto.");
            }
            else {
                console.info(targetPlayer.name + " ha sido atacado y ahora tiene " + targetPlayer.hp + " puntos de vida.");
            }
        }
        else {
            console.info(targetPlayer.name + " ya ha muerto, no puedes atacarlo.");
        }
    }

    this.strongAttack = function(targetPlayer) {
        if (targetPlayer.hp > 0 && this.mp >= 50) {
            this.mp -= 50;
            targetPlayer.hp -= 50;
            if (targetPlayer.hp <= 0) {
                targetPlayer.hp = 0;
                console.info(targetPlayer.name + " ha muerto.");
            }
            else {
                console.info(targetPlayer.name + " ha sido golpeado fuertemente y ahora tiene " + targetPlayer.hp + " puntos de vida.");
            }
        }
        else if (targetPlayer.hp <= 0) {
            console.info(targetPlayer.name + " ya ha muerto, no puedes atacarlo.");
        }
        else {
            console.info(this.name + " no tiene suficiente mana para un ataque fuerte.");
        }
    }

}

const gandalf = new Player("Gandalf");
const legolas = new Player("Legolas");


function startGame() {
    gandalf.hp = 100;
    legolas.hp = 100;

    while (gandalf.hp > 0 && legolas.hp > 0) {
        let userAction = prompt("¿Qué acción deseas realizar? (ataque, ataque fuerte, curar)").toLowerCase();

        switch (userAction) {
            case "ataque":
                gandalf.attack(legolas);
                break;
            case "ataque fuerte":
                gandalf.strongAttack(legolas);
                break;
            case "curar":
                gandalf.heal(gandalf);
                break;
            default:
                console.info("No se ha reconocido la acción, pierdes tu turno.");
        }

        if (legolas.hp > 0) {
            let pcAction = Math.floor(Math.random() * 3) + 1;

            switch (pcAction) {
                case 1:
                    legolas.attack(gandalf);
                    break;
                case 2:
                    legolas.strongAttack(gandalf);
                    break;
                case 3:
                    legolas.heal(legolas);
                    break;
            }
        }
        if (gandalf.mp <= 90) gandalf.mp += 10;
        if (legolas.mp <= 90) legolas.mp += 10;
        console.info("Fin del turno. Puntos de vida/mana: Gandalf: " + gandalf.hp + "/" + gandalf.mp + ", Legolas: " + legolas.hp + "/" + legolas.mp);
    }

    if (gandalf.hp > 0) {
        console.info("Has ganado el juego!");
    }
    else {
        console.info("Has perdido el juego, lo siento.");
    }
}
