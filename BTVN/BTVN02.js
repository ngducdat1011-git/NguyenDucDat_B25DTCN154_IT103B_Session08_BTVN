
const players = [
    "Messi",
    "Ronaldo",
    "Neymar",
    "Gavi",
    "Pedri",
    "Varane",
    "De Gea"
];

function getUpperNames(playerNames) {
    let upperNames = playerNames.map(function(name) {
        return name.toUpperCase();
    });

    return upperNames;
}

getUpperNames(players);