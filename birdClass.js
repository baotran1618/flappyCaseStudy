class Bird{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext('2d');
    }
    draw() {
        let bird = new Image();
        bird.src = "bird ok.png";
        this.ctx.drawImage(bird, this.x, this.y, this.width, this.height)
    }

    delete() {
        this.ctx.clearRect(0, 0, 600, 400);
    }
    point(){
        this.ctx.font = "30px Arial";
        this.ctx.fillText(point,290,50);
    }

}