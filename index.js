import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Slider from 'antd/lib/slider';
import 'antd/lib/slider/style';

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
        return <div style={{ margin: '16px 64px' }}>
            <React9Slice width={ this.state.width } height={ this.state.height } border={ 85 } image="./src/9slice.png" imageSize={{ x: 516, y: 423 }} style={{
                color: 'white'
            }}>HELLO WORLD</React9Slice>
            <div>
                <pre style={{ margin: 16, background: 'rgba(0, 0, 0, 0.59)', color: 'white', borderRadius: 4, display: 'inline-flex', padding: '8px 16px', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                        { "<React9Slice width=" }
                        <Slider style={{ width: 150, margin: '0 8px' }}
                                onChange={ v => this.setState({ width: v }) }
                                value={ this.state.width }
                                min={ 250 }
                                max={ 600 } />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginLeft: 84 }}>
                        height=
                        <Slider style={{ width: 150, margin: '0 8px' }}
                                onChange={ v => this.setState({ height: v }) }
                                value={ this.state.height }
                                min={ 100 }
                                max={ 400 } />
                        
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginLeft: 84 }}>
                        image="/images/some-image.png"{ ">" }
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginLeft: 42 }}>
                        HELLO WORLD
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        { "</React9Slice>" }
                    </div>
                </pre>
            </div>
        </div>;
    }
}

ReactDOM.render(<Main />, document.querySelector('#app'));