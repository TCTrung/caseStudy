let police = new Police(70,520,60,60,'blue');
police.draw();

let thief = new Thief(80,430,50,50,'green');
thief.draw1();

let obstacle = new Police(200,300,800,300,'black');
let obstacle1 = new Police(0,0,1200,100,'black');
let obstacle2 = new Police(0,100,5,500,'black');
let obstacle3 = new Police(1000,590,200,20,'red')


function play() {
    thief.move1();
    thief.draw1();
    police.draw();
    obstacle.draw();
    obstacle1.draw();
    obstacle2.draw();
    obstacle3.draw();
    collisionW(police,thief);
    collisionL(police,obstacle1);
    collisionL(police,obstacle2);
    collisionL(police,obstacle);
    collisionL(thief,obstacle3)

    requestAnimationFrame(play);

}
play();
window.addEventListener('keyup', (evt) => {
    let key = evt.keyCode;
    switch (key) {
        case 37:
            police.moveLeft();

            break;
        case 39:
            police.moveRight();


            break;
        case 38:
            police.moveTop();


            break;
        case 40:
            police.moveBottom();


            break;
        }
});


function collisionW (police,thief) {
    if (police.x + police.width >= thief.x &&
        police.x <= thief.x + thief.width &&
        police.y + police.height >= thief.y &&
        police.y <= thief.y + thief.height
    ) {
        alert('Ban thang');

    }

}
function collisionL (police,thief) {
    if (police.x + police.width >= thief.x &&
        police.x <= thief.x + thief.width &&
        police.y + police.height >= thief.y &&
        police.y <= thief.y + thief.height
    ) {
        alert('Ban thua');

    }

}
