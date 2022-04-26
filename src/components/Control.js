import React from 'react';

export default class Control extends React.Component {

    render () {
        return (
            <div>
                <button onClick={this.props.onPlus}>+</button>
                <button onClick={this.props.onMinus}>-</button>
                <button onClick={this.props.onChangeBackground}>Change Background</button>
            </div>
        ) 
    }
}