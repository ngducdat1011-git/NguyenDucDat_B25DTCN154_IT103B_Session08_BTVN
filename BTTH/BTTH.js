const squad = [

    ["Nguyen Van A", 10, "FW"],

    ["Tran Van B", 5, "MF"],

    ["Le Van C", 2, "DF"],

    ["Pham Van D", 12, "FW"],

    ["Hoang Van E", 0, "GK"],

    ["Dang Van F", 7, "MF"]

];

let choose;
do {
    choose = +prompt(`--- QUẢN LÝ ĐỘI BÓNG ---
1. Xem danh sách
2. Tìm kiếm (Find)
3. Lọc vị trí (Filter)
4. Tổng bàn thắng (Reduce)
5. Kiểm tra hiệu suất (Some/Every)
0. Thoát
Nhập lựa chọn:  `);

    switch (choose) {
        case 0:
            console.log("=> Hẹn gặp lại!");
            break;
        case 1:
            displayPlayers();
            break;
        case 2:
            searchForPlayer();
            break;
        case 3:
            filterByPosition();
            break;
        case 4:
            totalGoals();
            break;
        case 5:
            checkPerformance();
            break;
        default:
            console.log("Lựa chọn không hợp lệ");
    }

} while (choose != 0);

function displayPlayers() {
    squad.forEach((value) => {
        console.log(`${value[0]} (${value[2]}): ${value[1]} bàn thắng`);
    });
}

function searchForPlayer() {
    let name = prompt("Nhập tên cầu thủ cần tìm:");
    let result = squad.find((value) => {
        return value[0].toLowerCase() == name.toLowerCase();
    });

    if (result) {
        console.log(`Tìm thấy: ${result[0]} - ${result[2]} - ${result[1]} bàn thắng`);
    } else {
        console.log("Không tìm thấy cầu thủ");
    }
}

function filterByPosition() {
    let position = prompt("Nhập vị trí muốn lọc (FW/MF/DF/GK):");
    let result = squad.filter((value) => {
        return value[2].toLowerCase() == position.toLowerCase();
    });

    if (result.length > 0) {
        console.log("=> KẾT QUẢ LỌC:");
        result.forEach((value) => {
            console.log(`- ${value[0]} (${value[1]} bàn)`);
        });
    } else {
        console.log("Không có cầu thủ ở vị trí này");
    }
}

function totalGoals() {
    let total = squad.reduce((sum, value) => {
        return sum + value[1];
    }, 0);

    console.log(`=> Tổng số bàn thắng toàn đội: ${total} bàn`);
}

function checkPerformance() {
    let hasZero = squad.some((value) => {
        return value[1] == 0;
    });

    if (hasZero) {
        console.log("Có cầu thủ chưa ghi bàn");
    }

    let allScored = squad.every((value) => {
        return value[1] > 0;
    });

    if (allScored) {
        console.log("Tất cả cầu thủ đều đã ghi bàn");
    }
}