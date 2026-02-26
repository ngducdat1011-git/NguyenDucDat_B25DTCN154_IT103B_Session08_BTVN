let players = [
    "Messi - Forward - 30 - 15 - 40",
    "Ronaldo - Forward - 28 - 10 - 38",
    "Neymar - Forward - 15 - 20 - 26",
    "Gavi - Midfielder - 8 - 25 - 35",
    "Varane - Defender - 5 - 3 - 33"
];

function reportByPosition(position) {
//Lọc ra các cầu thủ có số bàn thắng >= mingoals;
    let minGoals = +prompt("Nhập số bàn thắng tối thiểu:");
    let result = position.filter((value)=>{
        // console.log(111,str1.split("-")[2]);
         return value.split("-")[2] >= minGoals;
    });
    console.log("result",result);
    //lọc theo vị trí
    //vị trí forward
    let resultForward = position.filter((value)=>{
        return value.split("-")[1].trim() == "Forward";
    });
    console.log("resultForward",resultForward);

    console.log("Số lượng cầu thủ",position.length);
    let goals=resultForward.reduce((acc,currentValue)=>{
        return acc + +currentValue.split("-")[2];
    },0);
    console.log("Tổng số bàn thắng của các cầu thủ vị trí forward:",goals);
    let matches = resultForward.reduce((acc,currentValue)=>{
        return acc + +currentValue.split("-")[4];
    },0);
    console.log("Tổng số trận đấu của các cầu thủ vị trí forward:",matches);
    //Trung bình hiệu suất mỗi trận = Tổng (bàn thắng + kiến tạo) của nhóm / Tổng số trận của nhóm (làm tròn 2 chữ số thập phân)
    let assists = resultForward.reduce((acc,currentValue)=>{
        return acc + +currentValue.split("-")[3];
    }   ,0);
    let efficiency = ((goals + assists) / matches).toFixed(2);
    console.log("Trung bình hiệu suất mỗi trận của các cầu thủ vị trí forward:",efficiency);    
}
reportByPosition(players);
let str1 = "ronaldo - forward - 28 - 10 - 38";
// console.log(1111,str1.split("-"));`