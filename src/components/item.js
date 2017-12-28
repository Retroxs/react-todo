import React, { Component } from 'react';
import { connect } from 'react-redux'

class Item extends Component {
    
    render() {
        const {dispatch}  = this.props
        return (
            <div>
                Item
            </div>
        );
    }
}

export default Item;