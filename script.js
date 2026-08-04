function unlock() {
    document.querySelector(".lock")?.remove();
    return true;
}

function main() {
    let points = 0;

    function getPoints() {
        console.log("Points:", points);
    }

    const hall = document.querySelector(".hall");

    const rooms = [];
    const hallDoors = [];
    const roomDoors = [];
    const roomlockDoors = [];
    const locks = [];

    for (let i = 1; i <= 8; i++) {
        rooms[i] = document.querySelector(`.room${i}`);
    }
    
    for (let i = 1; i <= 4; i++) {
        hallDoors[i] = document.querySelector(`.hd${i}`);
        roomDoors[i] = document.querySelector(`.r${i}d1`);
    }

    for (let i = 1; i <= 2; i++){
        locks[i] = document.querySelector(`#rl${i}`);
    }

    const roomNames = {
        room1:"STUDY ROOM",
        room2:"STORE ROOM",
        room3:"GAMING ROOM",
        room4:"BEDROOM ROOM"
    };

    for (let i = 1; i <= 4; i++) {
        hallDoors[i].addEventListener("click", () => {
            rooms[i].style.zIndex = "9";
            rooms[i].style.opacity = "1";
            hall.style.opacity = "0";
            roomDoors[i].textContent = "HALL";
        });
    }

    for (let i = 1; i <= 4; i++) {
        roomDoors[i].addEventListener("click", () => {
            rooms[i].style.zIndex = i;
            rooms[i].style.opacity = "0";
            hall.style.opacity = "1";
            hallDoors[i].innerHTML = `<b>${roomNames[rooms[i].className]}</b>`;
        });
    }

    for (let i = 1; i <= 2; i++) {
        locks[i].addEventListener("click", (e) => {
            e.target.parentElement.insertAdjacentHTML("beforeend",`<div class="rdl${i}"></div>`);
            if(unlock()){
                points++;
                getPoints();
            }
        });
    }
}

main();