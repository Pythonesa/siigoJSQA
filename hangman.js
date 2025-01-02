(function() {
    const words = ["javascript", "regex", "programación", "automatización", "playwright", "karate", "algoritmo", "funcional", "estructura", "depuración", "integración", "escalabilidad", "sintaxis", "compilador", "interfaz", "virtualización"];
    let chosenWord;
    let regexWord;
    let remainingAttempts;
    let guessedWord;
    let usedLetters;

    function normalize(string) {
        return string.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();
    }

    function startGame() {
        chosenWord = words[Math.floor(Math.random() * words.length)];
        regexWord = new RegExp(`^[${normalize(chosenWord)}]{${chosenWord.length}}$`);
        remainingAttempts = 6;
        guessedWord = "_".repeat(chosenWord.length);
        usedLetters = [];

        console.clear();
        console.log("¡Nuevo juego del Ahorcado!");
        console.log("La palabra tiene " + chosenWord.length + " letras: " + guessedWord);
        console.log("Tienes " + remainingAttempts + " intentos. ¡Suerte!");
        console.log("Usa guess('letra') para intentar una letra.");
    }

    function guessLetter(letter) {
        if (!/^[a-záéíóúüñ]$/i.test(letter)) {
            console.error("Debes ingresar una sola letra válida (a-z, incluyendo tildes).");
            return;
        }

        letter = normalize(letter);

        if (usedLetters.includes(letter)) {
            console.warn("Ya usaste esa letra. Intenta con otra.");
            return;
        }

        usedLetters.push(letter);

        if (new RegExp(letter, "i").test(normalize(chosenWord))) {
            console.log("¡Acertaste una letra!");
            const regex = new RegExp(`[^${usedLetters.join("")}]{1}`, "gi");
            guessedWord = normalize(chosenWord).replace(regex, "_");
        } else {
            console.warn("Fallaste. Esa letra no está en la palabra.");
            remainingAttempts--;
        }

        console.log("Estado actual: " + guessedWord);
        console.log("Letras usadas: " + usedLetters.join(", "));
        console.log("Intentos restantes: " + remainingAttempts);

        if (!/_/.test(guessedWord)) {
            console.log("🎉 ¡Felicidades, ganaste! La palabra era: " + chosenWord);
            console.log("Usa play() para jugar otra vez.");
        } else if (remainingAttempts <= 0) {
            console.log("💀 ¡Perdiste! La palabra era: " + chosenWord);
            console.log("Usa play() para intentarlo de nuevo.");
        } else {
            console.log("Sigue intentando...");
        }
    }

    window.play = startGame;
    window.guess = guessLetter;

    console.log("Usa play() para comenzar el juego.");
})();
