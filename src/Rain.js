import randomColor from 'randomcolor';

const getRandomInt = (min, max) => { return Math.random() * (max - min) + min };

export default class Rain {
  
    constructor()
    {
        this.canvas = document.getElementById("renderCanvas");
        this.context = this.canvas.getContext("2d");

        this.state = {
            color: randomColor(),
            speed: getRandomInt(1,20),
            trail: getRandomInt(1,5),
            position: {
                x: getRandomInt(0, this.canvas.width),
                y: getRandomInt(-250, 0)
            },
            width: 4
        }
        this.draw();
    }

    get isDone()
    {
        return this.state.position.y > this.canvas.height;
    }

    drop()
    {
        this.erase();
        this.state.position.y += this.state.speed;
        this.draw();
    }

    draw()
    {
        this.context.fillStyle = this.state.color;
        this.context.fillRect(this.state.position.x, this.state.position.y, this.state.width, this.state.width);
    }
    
    erase()
    {
        this.context.fillStyle = "#000000";
        // Offsetting the fillRect to also erase the square borders
        this.context.fillRect(this.state.position.x - 1, this.state.position.y - 1, this.state.width + 2, this.state.width + 2);        
    }
}