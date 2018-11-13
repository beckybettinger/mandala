import React, { Component } from 'react';
import MandalaElement from './MandalaElement';
import MandalaElementTriangle from './MandalaElementTriangle';

class Mandala extends Component {

    constructor(props) {
        super(props);

        const cx = this.props.mandalaSize/2;
        const cy = this.props.mandalaSize/2;
        const radius = Math.random() * (this.props.mandalaSize/3);
        const circumference = 2*Math.PI*radius;
        const numOfElements = Math.floor(Math.random()*(24-8)+8);
        const rotation = 360/numOfElements;

        this.elements = [];

        var i;

        console.log(numOfElements);

        for(i=0;i<numOfElements;i++) {
            this.elements[i] = {
                cx:cx,
                cy:cy-radius,
                r:circumference/(numOfElements*2),
                rot: rotation*i,
                rotx: cx,
                roty: cy,
            }
        }

    }

    static defaultProps = {
        mandalaSize: "500",
        hexColor: "blue",
        type:"circle"
    };


    render() {

        console.log ("render Mandala" + this.props.hexColor);

        var mandalaElements = {};

        if (this.props.type === "circle") {
            mandalaElements = this.elements.map((element) =>
                <MandalaElement
                    cx={element.cx}
                    cy={element.cy}
                    r={element.r}
                    rot={element.rot}
                    rotx={element.rotx}
                    roty={element.roty}
                    nextColor={this.props.hexColor}
                />
            );
        }

        if (this.props.type === "triangle") {
            mandalaElements = this.elements.map((element) =>
                <MandalaElementTriangle
                    cx={element.cx}
                    cy={element.cy}
                    r={element.r}
                    rot={element.rot}
                    rotx={element.rotx}
                    roty={element.roty}
                    nextColor={this.props.hexColor}
                />
            );
        }



        return (

                <g height={this.props.mandalaSize} width={this.props.mandalaSize}>
                    {mandalaElements}
                </g>

        );
    }
}



export default Mandala;
