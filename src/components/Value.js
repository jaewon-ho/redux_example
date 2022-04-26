import React from 'react';

export default class Value extends React.Component {

    render () {
        return (
            <div>
                <h1>{this.props.number}</h1>
            </div>
        ) 
    }
}