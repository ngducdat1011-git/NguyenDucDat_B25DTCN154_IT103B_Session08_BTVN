const players = [
    "Messi - Forward",
    "Ronaldo - Forward",
    "Neymar - Forward",
    "Gavi - Midfielder",
    "Pedri - Midfielder",
    "Varane - Defender",
    "De Gea - Goalkeeper"
];

function filterPlayersByPosition(position, players) {
    return players.filter(player => 
        player.split(" - ")[1] === position
    );
}

let result1 = filterPlayersByPosition("Midfielder", players);
let result2 = filterPlayersByPosition("Forward", players);

console.log(result1);
console.log(result2);