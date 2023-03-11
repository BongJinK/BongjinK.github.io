const size = 10;
let turn = 1; // player 번호 1,2 변화
let win = 0; // !== 0 일시 승리자 player번호
let click = 0; // === 100 && won === 0 draw

const root = document.getElementById("root");
const map = document.createElement("div");
map.setAttribute("class", "map");

setMap();

function setMap() {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let id = `y${i}x${j}`;
            const item = document.createElement("div");
            item.setAttribute("class", "box");
            item.setAttribute("id", id);

            item.addEventListener("click", e => {
                if (item.innerText === "") {
                    click++;
                    item.innerText = (turn === 1 ? "O" : "X");

                    winCondition();

                    turn = turn === 1 ? 2 : 1;

                }
            })
            map.append(item);
        }
        root.append(map);
    }
}

function winCondition() {
    checkrow();
    checkcolumn();
    checkdiagonal();
    checkreverse();

    if (win !== 0) {
        alert(`Player${win} WIN!!`);
        reset();
    }

    console.log("click : ", click);
    console.log("win : ", win);

    if (win === 0 && click === size * size) {
        alert("DRAW !");
        reset();
    }
}

function checkrow() {
    for (let i = 0; i < size; i++) {
        let count = 0;
        for (let j = 0; j < size; j++) {
            const target = `y${i}x${j}`;
            const box = map.querySelector(`#${target}`);
            const text = box.innerText;
            if (text === (turn === 1 ? "O" : "X")) {
                count++;
                console.log("count : ", count);
            } else {
                count = 0;
            }

            if (count == 5) {
                win = turn;
                console.log("win : ", win);
            }
        }
    }
}

function checkcolumn() {
    for (let i = 0; i < size; i++) {
        let count = 0;
        for (let j = 0; j < size; j++) {
            const target = `y${j}x${i}`;
            const box = map.querySelector(`#${target}`);
            const text = box.innerText;

            if (text === (turn === 1 ? "O" : "X")) {
                count++;
                console.log("count : ", count);
            } else {
                count = 0;
            }

            if (count == 5) {
                win = turn;
                console.log("win : ", win);
            }
        }
    }
}

function checkdiagonal() {
    for (let i = 0; i < size - 4; i++) {
        for (let j = 0; j < size - 4; j++) {
            let count = 0;
            for (let k = 0; k < 5; k++) {
                const target = `y${i + k}x${j + k}`;
                const box = map.querySelector(`#${target}`);
                const text = box.innerText;

                if (text === (turn === 1 ? "O" : "X")) {
                    count++;
                    console.log("count : ", count);
                } else {
                    count = 0;
                }

                if (count == 5) {
                    win = turn;
                    console.log("win : ", win);
                }
            }
        }
    }
}

function checkreverse() {
    for (let i = 4; i < size; i++) {
        for (let j = 0; j < size - 4; j++) {
            let count = 0;
            for (let k = 0; k < 5; k++) {
                const target = `y${j + k}x${i - k}`;
                console.log(target);
                const box = map.querySelector(`#${target}`);
                const text = box.innerText;

                if (text === (turn === 1 ? "O" : "X")) {
                    count++;
                    console.log("count : ", count);
                } else {
                    count = 0;
                }

                if (count == 5) {
                    win = turn;
                    console.log("win : ", win);
                }
            }
        }
    }
}

function reset() {
    turn = 1;
    win = 0;
    click = 0;
    location.reload();
}