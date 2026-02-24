const players = [
    "Messi - Forward - 30 - 15 - 40",
    "Ronaldo - Forward - 28 - 10 - 38",
    "Neymar - Forward - 15 - 20 - 26",
    "Gavi - Midfielder - 8 - 25 - 35",
    "Varane - Defender - 5 - 3 - 33"
];

function reportByPosition(players) {

    console.log("BÁO CÁO HIỆU SUẤT THEO VỊ TRÍ\n");
    const grouped = players
        .map(player => {
            const [name, position, goals, assists, matches] = player.split(" - ");
            return {
                name,
                position,
                goals: Number(goals),
                assists: Number(assists),
                matches: Number(matches)
            };
        })
        .reduce((acc, player) => {
            if (!acc[player.position]) {
                acc[player.position] = {
                    count: 0,
                    totalGoals: 0,
                    totalAssists: 0,
                    totalMatches: 0
                };
            }

            acc[player.position].count++;
            acc[player.position].totalGoals += player.goals;
            acc[player.position].totalAssists += player.assists;
            acc[player.position].totalMatches += player.matches;

            return acc;
        }, {});

    Object.entries(grouped).forEach(([position, data]) => {

        const totalPerformance = data.totalGoals + data.totalAssists;
        const avgPerformance = (totalPerformance / data.totalMatches).toFixed(2);

        console.log(`${position}:`);
        console.log(`- Số cầu thủ: ${data.count}`);
        console.log(`- Tổng bàn thắng: ${data.totalGoals}`);
        console.log(`- Tổng kiến tạo: ${data.totalAssists}`);
        console.log(`- Tổng số trận: ${data.totalMatches}`);
        console.log(`- Trung bình hiệu suất/trận: ${avgPerformance}\n`);
    });

    console.log("------------------------");

    const totalTeamGoals = Object.values(grouped)
        .reduce((sum, pos) => sum + pos.totalGoals, 0);

    console.log(`Tổng bàn thắng toàn đội : ${totalTeamGoals}`);
}

reportByPosition(players);