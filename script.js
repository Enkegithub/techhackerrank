//unlock doors
function unlock(rm) {
    let r = document.querySelector(`#${rm}`).parentElement
    document.querySelector(`#${rm}`).remove();
    r.insertAdjacentHTML("beforeend",`<div class="ques${rm.at(-1)}"></div>`);
    return true;
}

function main() {
    //variable
    let mute = false;
    let points = 0;

    //points representation
    function getPoints() {
        console.log("Points:", points);
    }

    //elements
    const hall = document.querySelector(".hall");
    const rooms = [];
    const hallDoors = [];
    const roomDoors = [];
    const roomlockDoors = [];
    const locks = [];

    //audio
    const dooraudio = new Audio("audio/door.mp3");
    const bgaudio = document.querySelector(".bgaudio");
    // bgaudio.play();
    bgaudio.loop = true;
    bgaudio.volume = 0.7;
    document.querySelector(".speaker").addEventListener("click", () => {
        if (!mute) {
            bgaudio.pause();
            document.querySelector(".speaker").innerHTML = `<img src="svg/mute.png"></img>`
            mute = true;
        }
        else {
            bgaudio.play()
            document.querySelector(".speaker").innerHTML = `<img src="svg/speaker.gif" style="height: 135px; width: 145px; right: -20px; bottom: -15px;"></img>`;
            mute = false;
        }
    })


    //variables
    for (let i = 1; i <= 8; i++) {
        rooms[i] = document.querySelector(`.room${i}`);
    }
    for (let i = 1; i <= 4; i++) {
        hallDoors[i] = document.querySelector(`.hd${i}`);
        roomDoors[i] = document.querySelector(`.rd${i}`);
    }
    for (let i = 1; i <= 2; i++) {
        locks[i] = document.querySelector(`#rl${i}`);
    }

    const roomNames = {
        room1: "STUDY ROOM",
        room2: "STORE ROOM",
        room3: "GAMING ROOM",
        room4: "BEDROOM ROOM"
    };

    //hall -> room
    for (let i = 1; i <= 4; i++) {
        hallDoors[i].addEventListener("click", () => {
            rooms[i].style.zIndex = "9";
            rooms[i].style.opacity = "1";
            hall.style.opacity = "0";
            roomDoors[i].textContent = "HALL";
            dooraudio.play()
            dooraudio.volume = 0.25;
        });
    }

    //room -> hall
    for (let i = 1; i <= 4; i++) {
        roomDoors[i].addEventListener("click", () => {
            rooms[i].style.zIndex = i;
            rooms[i].style.opacity = "0";
            hall.style.opacity = "1";
            hallDoors[i].innerHTML = `<b>${roomNames[rooms[i].className]}</b>`;
            dooraudio.play()
            dooraudio.volume = 0.25;
        });
    }

    //lock unlock
    locks.forEach((e1) => {
        e1.addEventListener("click", (e) => {
            e.target.insertAdjacentHTML("beforebegin", `<div class="rdl${e.target.id.at(-1)}"></div>`);
            if (unlock(e.target.id)) {
                points++;
                getPoints();
            }
        });
    })
}


main();