import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import React9Slice from './src/react9Slice.jsx';

class Main extends Component{
    constructor(){
        super();

        this.state = {
            width: 512,
            height: 256
        };
    }

    render(){
        return <div>
            <React9Slice width={ this.state.width } height={ this.state.height } border={ 52 } image="./src/sprite.png" imageSize={ 525 } style={{
                color: 'white'
            }}>
                HELLO WORLD
            </React9Slice>
            <div>Width: <input value={ this.state.width } onChange={(e) => this.setState({ width: parseInt(e.target.value) }) } /></div>
            <div>Height: <input value={ this.state.height } onChange={(e) => this.setState({ height: parseInt(e.target.value) }) } /></div>
        </div>;
    }
}

ReactDOM.render(<Main />, document.querySelector('#app'));