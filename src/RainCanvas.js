import React, { Component } from 'react'
import Rain from './Rain';

const getRandomInt = (min, max) => { return Math.random() * (max - min) + min };

export default class RainCanvas extends Component {

    constructor(params) {
        super(params);
        this.raindrops = [];
    }

    render() {
        return (
            <canvas id="renderCanvas"></canvas>
        );
    }

    componentDidMount() {

        this.setUpCanvas();
        this.randomRainGeneratorRoutine();
        this.updateRainFallingRoutine();

    }

    setUpCanvas()
    {
        const canvas = document.getElementById("renderCanvas");
        const context = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        context.fillStyle = "#000000";
        context.fillRect(0, 0, canvas.width, canvas.height);
    }
    
    createRain() {
        let raindrop = new Rain();
        this.raindrops.push(raindrop);
    }

    randomRainGeneratorRoutine()
    {
        setInterval(() => {
            if (getRandomInt(0, 100) > 50)
                this.createRain();
        }, 10)
    }

    updateRainFallingRoutine()
    {
        setInterval(() => {
            for (var raindrop of this.raindrops) {
                if (raindrop.isDone)
                    this.raindrops.splice(this.raindrops.indexOf(raindrop), 1);
                else
                    raindrop.drop();                   
            }
        }, 20);
    }
}