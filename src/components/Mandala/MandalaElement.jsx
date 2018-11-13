import React, { Component } from 'react';

class MandalaElement extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fill: "white",
        };
    }

    static defaultProps = {
        cx: 50,
        cy: 50,
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
        return (
            <circle
                cx={this.props.cx}
                cy={this.props.cy}
                r={this.props.r}
                fill={this.state.fill}
                transform={`rotate(${this.props.rot} ${this.props.rotx} ${this.props.roty})`}
                stroke={this.props.stroke}
                strokeWidth="3"
                onClick={this.handleClick}/>
        );
    }

}


export default MandalaElement;
