import React, { Component } from 'react';
class Counter extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const {value} = this.props
        return (
            <div>
                {value}
                <h1>counter</h1>
            </div>
        );
    }
}

export default Counter