class Thief {
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

    draw1() {
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, this.width, this.height);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    }

    move1left() {
        this.x -= 1;
    }

    move1right() {
        this.x += 1;
    }

    move1top() {
        this.y -= 1;
    }

    move1bottom() {
        this.y += 1;
    }

    move1() {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        if (this.y> 150 && this.x < 120) {
            this.move1top();

        } else if (this.x< 1050 ) {
            this.move1right();
        }else if (this.x >= 1050 && this.y < 590 ) {
            this.move1bottom();
        }
    }







}