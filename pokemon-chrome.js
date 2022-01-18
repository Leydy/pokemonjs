let playerName = prompt('Cual es tu nombre?', 'Red');

alert(`Bienvenido al mundo Pokemon, ${playerName.toUpperCase()}!`);
alert('Por favor ten la consola de tu navegador a la vista');
//alert('Para este juego necesitas elegir tu Pokemon inicial');

let initialPokemon = ['Ratatta', 'Pidgey', 'Pikachu', 'Meowth', 'Geodude', 'Caterpie', 'Weedle', 'Ekans', 'Psyduck', 'Onix', 'Abra', 'Machop', 'Gastly', 'Magikarp', 'Eevee', 'Ditto', 'Snorlax', ' Dratini'];
// arreglo que contiene los pokemon del entrenador

let pokemonParty = ['Charmander', undefined, undefined, undefined, undefined, undefined]
/*for (let i = 0; i < initialPokemon.length; i++) {
    console.log(`${i + 1}. ${initialPokemon[i]}`);
}*/


let initialSelected = null;
let starter = null;
let i = 0;

let lastPosicInserted = 0; //  charmander

do {
    initialSelected = confirm(`Un ${initialPokemon[i]} ha aparecido! Deseas capturarlo?`);
    if (initialSelected == true) {
        lastPosicInserted = lastPosicInserted + 1
        pokemonParty[lastPosicInserted] = initialPokemon[i]

        // pokemonParty.push(starter);
        alert(`${initialPokemon[i].toUpperCase()} se ha unido a tu equipo!`);
        //console.clear();
        console.log(`PARTY:\n
            1. ${pokemonParty[0]}\n
            2. ${pokemonParty[1]}\n
            3. ${pokemonParty[2]}\n
            4. ${pokemonParty[3]}\n
            5. ${pokemonParty[4]}\n
            6. ${pokemonParty[5]}`);

        if (isFirstPokemon())
            alert(`Felicitaciones! Has obtenido tu primer Pokemon! te quedan ${pokemonParty.length - numOfPokeInParty()} espacios`);
        else {
            alert(`Felicitaciones!, te quedan ${pokemonParty.length - numOfPokeInParty()} espacios`);
        }

    }
    i++;
    /*if (i == 3) {
        i = 0;
    }*/
    console.clear();
} while (teamIsNotComplete())

function teamIsNotComplete() {
    isnComplete = false;
    isnComplete = pokemonParty.length == numOfPokeInParty()
    return !isnComplete
    //return true
}
function numOfPokeInParty() {
    let acum = 0;
    for (let i = 0; i < pokemonParty.length; i++) {
        if (pokemonParty[i] != undefined) {
            acum = acum + 1;
        }

    }
    return acum
}


function isFirstPokemon() {
    let acum = 0;
    for (let i = 0; i < pokemonParty.length; i++) {
        if (pokemonParty[i] != undefined) {
            acum = acum + 1;
        }

    }
    return acum ==2;
}

alert(`Felicitaciones, ${playerName}! Tu equipo esta listo para enfrentar a otros entrenadores. Nos vemos pronto en el siguiente desafío!`);
console.log('THE END?');
