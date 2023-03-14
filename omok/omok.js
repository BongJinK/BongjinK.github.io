const size = 14;
let turn = 1;
let win = 0;
let click = 0;

const container = document.querySelector(".container");
let contents = '';
contents += '<div class="play-container">';
for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        let id = `y${i}x${j}`;
        contents += '<div class="box" id="' + id + '"></div>';
    }
}
contents += '</div>';
for (let i = 0; i < size + 1; i++) {
    for (let j = 0; j < size + 1; j++) {
        contents += '<div class="item"></div>';
    }
}
contents += '</div>';
container.innerHTML = contents;

play();

function play() {
    const box = document.getElementsByClassName("box");
    for (let i = 0; i < box.length; i++) {
        box[i].addEventListener("click", e => {
            if (e.target.className === "box") {
                click++;
                e.target.setAttribute("class", `player${turn}`);
                winCondition();
                turn = turn === 1 ? 2 : 1;
            }
        })
    }
}

function winCondition() {
    checkrow();
    checkcolumn();
    checkdiagonal();
    checkreverse();

    if (win !== 0) {
        alert(`Player${win} WIN!!`);
    }
    if (win === 0 && click === size * size) {
        alert("DRAW !");
    }
}

function checkrow() {
    for (let i = 0; i < size; i++) {
        let count = 0;
        for (let j = 0; j < size; j++) {
            const target = `y${i}x${j}`;
            const box = document.querySelector(`#${target}`);
            if (box.className === `player${turn}`)
                count++;
            else
                count = 0;

            if (count == 5)
                win = turn;
        }
    }
}

function checkcolumn() {
    for (let i = 0; i < size; i++) {
        let count = 0;
        for (let j = 0; j < size; j++) {
            const target = `y${j}x${i}`;
            const box = document.querySelector(`#${target}`);
            if (box.className === `player${turn}`)
                count++;
            else
                count = 0;

            if (count == 5)
                win = turn;
        }
    }
}

function checkdiagonal() {
    for (let i = 0; i < size - 4; i++) {
        for (let j = 0; j < size - 4; j++) {
            let count = 0;
            for (let k = 0; k < 5; k++) {
                const target = `y${i + k}x${j + k}`;
                const box = document.querySelector(`#${target}`);
                if (box.className === `player${turn}`)
                    count++;
                else
                    count = 0;

                if (count == 5)
                    win = turn;
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
                const box = document.querySelector(`#${target}`);
                if (box.className === `player${turn}`)
                    count++;
                else
                    count = 0;

                if (count == 5)
                    win = turn;
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


// 29 : document.getElementByClassName("box") 메소드는 HTML문서의 "box"클래스를 가진
// 모든 element를 반환 [ HTMLCollention 으로 반환 : 배열 ] 