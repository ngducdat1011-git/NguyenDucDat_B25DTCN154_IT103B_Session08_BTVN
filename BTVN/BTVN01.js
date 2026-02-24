
const players = [
    "Messi - Forward",
    "Ronaldo - Forward",
    "Neymar - Forward",
    "Gavi - Midfielder",
    "Pedri - Midfielder",
    "Varane - Defender",
    "De Gea - Goalkeeper"
];

function displayPlayers(players) {
    players.forEach(function(player) {
        console.log(player);
    });
}

displayPlayers(players);