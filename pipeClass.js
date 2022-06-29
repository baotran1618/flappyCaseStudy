class Pipe {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext('2d');
    }

    drawUp() {
        let pipeUp = new Image();
        pipeUp.src = "pipeUp.png";
        this.ctx.drawImage(pipeUp, this.x, this.y+350, 50, 200)
    }
    drawDown() {
        let pipeDown = new Image();
        pipeDown.src = "pipeDown.png";
        this.ctx.drawImage(pipeDown, this.x, this.y, 50, 200)
    }
    delete() {
        this.ctx.clearRect(0, 0, 600, 400);
    }

}

// class PipeDown {
//     constructor(x, y, width, height) {
//         this.x = x;
//         this.y = y;
//         this.width = width;
//         this.height = height;
//         this.canvas = document.getElementById("myCanvas");
//         this.ctx = this.canvas.getContext('2d');
//     }

//     draw() {
//         let pipeDown = new Image();
//         pipeDown.src = "pipeDown.png";
//         this.ctx.drawImage(pipeDown, this.x, this.y, this.width, this.height)
//     }

//     delete() {
//         this.ctx.clearRect(0, 0, 600, 400);
//     }

// }