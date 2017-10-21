import randomColor from 'randomcolor';

const getRandomInt = (min, max) => { return Math.random() * (max - min) + min };

export default class Rain {
  
    constructor()
    {
        const canvas = document.getElementById("renderCanvas");
        const context = canvas.getContext("2d");

        this.state = {
            color: randomColor(),
            speed: getRandomInt(1,10),
            trail: getRandomInt(1,5),
            position: {
                x: getRandomInt(0, canvas.width),
                y: getRandomInt(0, canvas.height)
            },
            width: 4
        }

        context.fillStyle = this.state.color;
        context.fillRect(this.state.position.x, this.state.position.y, this.state.width, this.state.width);

    }


    
}