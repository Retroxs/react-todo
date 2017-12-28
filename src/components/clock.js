import React, { Component } from 'react';

class Clock extends Component {
    constructor(props){
        super(props)
        this.state = {
            date:new Date()
        }
    }
    componentDidMount(){
            this.timerId = setInterval(
                () => this.tick(),1000
            )
    }

    componentWillUnmount(){
        clearInterval(this.timerId)
    }

    tick(){
        this.setState({
            date:new Date()
        })
    }

    a(){
        return <h1>example</h1>
    }
    render() {
        return (
            <div>
                <h1>Now Time</h1>
                <h1>{this.state.date.toLocaleTimeString()}</h1>
                {this.a()}
            </div>
        );
    }
}


export default Clock;