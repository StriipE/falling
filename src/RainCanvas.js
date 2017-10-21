import React, {Component} from 'react'
import Rain from './Rain';

export default class RainCanvas extends Component {
    
    render() {
        return (
            <canvas id="renderCanvas"></canvas>
        );
    }

    componentDidMount() {
        const canvas = document.getElementById("renderCanvas");
        const context = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        context.fillStyle = "#000000";
        context.fillRect(0,0, canvas.width, canvas.height);

        for (var i = 0; i < 50; i++)
        {
          this.displayRain();
        }
    }

    displayRain(){
        new Rain();
    }
}