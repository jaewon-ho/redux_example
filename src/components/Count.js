import React from 'react';
import * as actions from '../actions';

import Value from './Value';
import Control from './Control';

import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    console.log(state);
    return {
        number: state.counter.number,
        color: state.ui.color
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleIncrement: () => {dispatch(actions.increment())},
        handleDecrement: () => {dispatch(actions.decrement())},
        handleSetColor: (color) => {dispatch(actions.setColor(color))}
    }
}

class Count extends React.Component {

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div style={{backgroundColor: `rgb(${this.props.color[0]}, ${this.props.color[1]}, ${this.props.color[2]})`}}>
                <Value number={this.props.number}/>
                <Control
                    onPlus={this.props.handleIncrement}
                    onMinus={this.props.handleDecrement}
                    onChangeBackground={() => {
                        const color = [
                            Math.floor((Math.random()*55) + 200),
                            Math.floor((Math.random()*55) + 200),
                            Math.floor((Math.random()*55) + 200)
                        ]
                        this.props.handleSetColor(color)
                    }}
                />
            </div>
        ) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Count);