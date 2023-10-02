let police = new Police(30,520,60,60,'blue');
police.draw();

let thief = new Thief(50,400,15,'black');
thief.drawThief();

let police1 = new Police(200,300,1000,300,'black');
let police2 = new Police(0,0,1000,100,'black');
let police3 = new Police(0,100,5,500,'black')


function play() {
    thief.move1();
    thief.drawThief();
    police.draw();
    police1.draw();
    police2.draw();
    police3.draw();

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


