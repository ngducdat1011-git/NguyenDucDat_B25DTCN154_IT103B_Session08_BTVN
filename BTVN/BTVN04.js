const players = [
    "Messi - Forward - 100",
    "Ronaldo - Forward - 10",
    "Neymar - Forward - 38",
    "Gavi - Midfielder - 15",
    "Pedri - Midfielder - 6",
    "Varane - Defender - 3",
    "De Gea - Goalkeeper - 0"
];

function getReversedNames(players) {
    return players
        .map(player => player.split(" - ")[0]) 
        .reverse(); 
}

let result = getReversedNames(players);
console.log(result);