function unlock() {
    document.querySelector(".lock").remove();
    return true;
}
function main() {
    let points = 0;
    let correct = false;
    function getpoints(){
        // alert(points);
    }
    const hall = document.querySelector('.hall');
    const room1 = document.querySelector('.room1');
    const room2 = document.querySelector('.room2');
    const room3 = document.querySelector('.room3');
    const room4 = document.querySelector('.room4');
    const room5 = document.querySelector('.room5');
    const room6 = document.querySelector('.room6');
    const room7 = document.querySelector('.room7');
    const room8 = document.querySelector('.room8');
    const hd1 = document.querySelector('.hd1');
    const hd2 = document.querySelector('.hd2');
    const hd3 = document.querySelector('.hd3');
    const hd4 = document.querySelector('.hd4');
    const r1d1 = document.querySelector('.r1d1');
    const r2d1 = document.querySelector('.r2d1');
    const r3d1 = document.querySelector('.r3d1');
    const r4d1 = document.querySelector('.r4d1');
    const r5d1 = document.querySelector('.r5d1');
    const r6d1 = document.querySelector('.r6d1');
    const r7d1 = document.querySelector('.r7d1');
    const r8d1 = document.querySelector('.r8d1');
    const r1d2 = document.querySelector('.r1d2');
    const r2d2 = document.querySelector('.r2d2');
    const r3d2 = document.querySelector('.r3d2');
    const r4d2 = document.querySelector('.r4d2');
    const r5d2 = document.querySelector('.r5d2');
    const r6d2 = document.querySelector('.r6d2');
    const r7d2 = document.querySelector('.r7d2');
    const r8d2 = document.querySelector('.r8d2');
    const r1d3 = document.querySelector('.r1d3');
    const r2d3 = document.querySelector('.r2d3');
    const r3d3 = document.querySelector('.r3d3');
    const r4d3 = document.querySelector('.r4d3');
    const r5d3 = document.querySelector('.r5d3');
    const r6d3 = document.querySelector('.r6d3');
    const r7d3 = document.querySelector('.r7d3');
    const r8d3 = document.querySelector('.r8d3');
    const rl1 = document.querySelector('#rl1');
    const rl2 = document.querySelector('#rl2');
    hd1.addEventListener('click', () => {
        room1.style.zIndex = '9';
        room1.style.opacity = '100';
        hall.style.opacity = '0';
        r1d1.innerHTML = `HALL`;
    })
    hd2.addEventListener('click', () => {
        room2.style.zIndex = '9';
        room2.style.opacity = '100';
        hall.style.opacity = '0';
        r2d1.innerHTML = `HALL`;
    })
    hd3.addEventListener('click', () => {
        room3.style.zIndex = '9';
        room3.style.opacity = '100';
        hall.style.opacity = '0';
        r3d1.innerHTML = `HALL`;
    })
    hd4.addEventListener('click', () => {
        room4.style.zIndex = '9';
        room4.style.opacity = '100';
        hall.style.opacity = '0';
        r4d1.innerHTML = `HALL`;
    })
    r1d1.addEventListener('click', () => {
        room1.style.zIndex = '1';
        room1.style.opacity = '0';
        hall.style.opacity = '100';
        hd1.innerHTML = `<b>STUDY ROOM</b>`;
    })
    r2d1.addEventListener('click', () => {
        room2.style.zIndex = '2';
        room2.style.opacity = '0';
        hall.style.opacity = '100';
        hd2.innerHTML = `<b>STORE ROOM</b>`;
    })
    r3d1.addEventListener('click', () => {
        room3.style.zIndex = '3';
        room3.style.opacity = '0';
        hall.style.opacity = '100';
        hd3.innerHTML = `<b>GAMING ROOM</b>`;
    })
    r4d1.addEventListener('click', () => {
        room4.style.zIndex = '4';
        room4.style.opacity = '0';
        hall.style.opacity = '100';
        hd4.innerHTML = `<b>BEDROOM ROOM</b>`;
    })
    rl1.addEventListener('click', () => {
        room1.insertAdjacentHTML("beforeend", `<div class="r1d2"></div>`);
        correct = unlock();
        console.log(correct)
        if (correct) {
            points++;
            getpoints()
        }
    })
    rl2.addEventListener('click', () => {
        room1.insertAdjacentHTML("beforeend", `<div class="r1d3"></div>`);
        correct = unlock();
        console.log(correct)
        if (correct) {
            points++;
            getpoints()
        }
    }) 
}

main()