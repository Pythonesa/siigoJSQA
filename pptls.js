function play(user) {
    const opciones = ["piedra", "papel", "tijera", "lagarto", "spock"];
    
    user = user.toLowerCase();
    if (!opciones.includes(user)) {
        return "Debes ingresar una de las siguientes opciones: piedra, papel, tijera, lagarto, spock";
    }

    const pc = opciones[Math.floor(Math.random() * opciones.length)];

    const result = function() {
        switch (user) {
            case "piedra":
                if (pc === "tijera" || pc === "lagarto") {
                    return "Ganaste!";
                } else if (pc === user) {
                    return "Empate!";
                } else {
                    return "Perdiste!";
                }
            case "papel":
                if (pc === "piedra" || pc === "spock") {
                    return "Ganaste!";
                } else if (pc === user) {
                    return "Empate!";
                } else {
                    return "Perdiste!";
                }
            case "tijera":
                if (pc === "papel" || pc === "lagarto") {
                    return "Ganaste!";
                } else if (pc === user) {
                    return "Empate!";
                } else {
                    return "Perdiste!";
                }
            case "lagarto":
                if (pc === "papel" || pc === "spock") {
                    return "Ganaste!";
                } else if (pc === user) {
                    return "Empate!";
                } else {
                    return "Perdiste!";
                }
            case "spock":
                if (pc === "tijera" || pc === "piedra") {
                    return "Ganaste!";
                } else if (pc === user) {
                    return "Empate!";
                } else {
                    return "Perdiste!";
                }
        }
    };

    return "Tu: " + user + " - PC: " + pc + " - Resultado: " + result();
}

