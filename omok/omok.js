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

                    // checkWin();

                    turn = turn === 1 ? 2 : 1;

                }
            })
            map.append(item);
        }
        root.append(map);
    }
}

function checkWin() {
    checkrow();
    checkcolumn();
    checkdiag();
    checkreverse();

    if (win !== 0) {
        alert(`Player${win} WIN!!`);
        reset();
    }

    console.log("click : ", click);
    console.log("win : ", win);

    if (win === 0 && click === size*size) {
        alert("DRAW !");
        reset();
    }
}

function checkrow() {
    

}

function checkcolumn() {

    
}

function checkdiag() {


}

function checkreverse() {


}


function reset() {
    turn = 1;
    win = 0;
    click = 0;
    location.reload();
}
