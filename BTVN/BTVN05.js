const players = [
    "Messi - Forward - 100 - 90",
    "Ronaldo - Forward - 10 - 0",
    "Neymar - Forward - 38 - 4",
    "Gavi - Midfielder - 15 - 48",
    "Pedri - Midfielder - 6 - 120",
    "Varane - Defender - 3 - 18",
    "De Gea - Goalkeeper - 0 - 1"
];

function reportTopPerformers(minPerformance, players) {

    const filtered = players
        .map(player => {
            const [name, , goals, assists] = player.split(" - ");
            return {
                name,
                performance: Number(goals) + Number(assists)
            };
        })
        .filter(player => player.performance >= minPerformance);

    filtered
        .map(player => `${player.name}: ${player.performance}`)
        .forEach(line => console.log(line));

    const totalPerformance = filtered
        .reduce((sum, player) => sum + player.performance, 0);

    console.log(`Tổng hiệu suất: ${totalPerformance}`);

    return totalPerformance;
}

reportTopPerformers(30, players);
reportTopPerformers(20, players);
reportTopPerformers(50, players);