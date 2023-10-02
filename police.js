// function myCanvas() {
//     let canvas = document.getElementById('canvas');
//     let ctx = canvas.getContext('2d');
//     let img1 = document.getElementById('img1');
//     let img2 = document.getElementById('img2');
//     ctx.drawImage(img1,10,370,100,100);
//     ctx.drawImage(img2,10,480,120,120);
// }
// myCanvas();

class Police {
    x;
    y;
    width;
    height;
    color;
    ctx;

    constructor(x, y, width, height,color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext('2d');
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.rect(this.x,this.y,this.width,this.height);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    }

    // move() {
    //     this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // }

    moveTop() {
        this.y -= 25;
    }

    moveBottom() {
        this.y += 25;
    }

    moveLeft(){
        this.x -= 25;
    }

    moveRight(){
        this.x += 25;
    }

}