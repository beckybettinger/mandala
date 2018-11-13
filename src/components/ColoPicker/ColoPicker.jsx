import React, { Component } from 'react';


class ColorPicker extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedColor: "#213456"
        }
    }

    handleChange = (event) => {

        const color = event.target.value;

        this.setState(state => ({
            selectedColor: color
        }));

        this.props.onColorChange(color);

    };

    render() {
        return (
            <input type="color" value={this.props.value} onChange={this.handleChange}/>
        );
    }
}



export default ColorPicker;
