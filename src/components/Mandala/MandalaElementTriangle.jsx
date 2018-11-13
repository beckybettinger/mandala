import React, { Component } from 'react';

class MandalaElementTriangle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fill: "white",
        };
    }

    static defaultProps = {
        cx: 250,
        cy: 250,
        r: 40,
        stroke: 'black',
        nextFill: 'red',
        rot: 24,
        rotx: 250,
        roty: 250,
    };

    handleClick = (event) => {

        this.setState(state => ({
            fill: this.props.nextColor,
        }));
    };


    render() {

        const x1 = this.props.cx;
        const y1 = this.props.cy-this.props.r;
        const x2 = this.props.cx-(this.props.r);
        const y2 = this.props.cy;
        const x3 = this.props.cx+(this.props.r);
        const y3 = this.props.cy;


        return (
            <polygon
                points={`${x1},${y1} ${x2},${y2} ${x3},${y3}`}
                fill={this.state.fill}
                transform={`rotate(${this.props.rot} ${this.props.rotx} ${this.props.roty})`}
                stroke={this.props.stroke}
                strokeWidth="3"
                onClick={this.handleClick}/>
        );
    }

}


export default MandalaElementTriangle;
