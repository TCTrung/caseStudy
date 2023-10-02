class Thief {
    x;
    y;
    radius;
    color;
    ctx;
    direction;

    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.direction = 'top';
    }

    drawThief() {
        this.ctx.beginPath();
        this.ctx.arc(this.x,this.y,this.radius,0,Math.PI * 2);
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
        if (this.y - this.radius > 150) {
            this.move1top();

        } else if (this.x <= 1100 && this.y - this.radius <= 150) {
            this.move1right();
        }else if (this.y - this.radius < 150 && this.x > 1200) {
            this.move1top();
        }
    }







}