import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Mandala from './components/Mandala/Mandala';
import MandalaElementTriangle from './components/Mandala/MandalaElementTriangle';
import ColorPicker from './components/ColoPicker/ColoPicker';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fill: "#123456"
        }
    }

    onColorChange = (color) => {

        this.setState(state => ({
            fill: color,
        }));

    };

    render() {
    return (
      <div className="App">
          <svg width="800" height="800">
            <Mandala mandalaSize="800" hexColor={this.state.fill} type="circle"/>
            <Mandala mandalaSize="800" hexColor={this.state.fill} type="triangle"/>
            <Mandala mandalaSize="800" hexColor={this.state.fill} type="triangle"/>
            <Mandala mandalaSize="800" hexColor={this.state.fill} type="circle"/>
            <Mandala mandalaSize="800" hexColor={this.state.fill} type="triangle"/>
            <Mandala mandalaSize="800" hexColor={this.state.fill} type="triangle"/>
            <Mandala mandalaSize="800" hexColor={this.state.fill} type="triangle"/>
            <Mandala mandalaSize="800" hexColor={this.state.fill} type="circle"/>
            <Mandala mandalaSize="800" hexColor={this.state.fill} type="circle"/>
          </svg>
        <ColorPicker value={this.state.fill} onColorChange={this.onColorChange}/>
      </div>
    );
  }
}

export default App;
