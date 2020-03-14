import React, { Component } from 'react';
import headsImg from './coin_heads.jpg';
import tailsImg from './coin_tails.jpg';

class Coin extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
            <div className="Coin">
                <img src={this.props.side === 'heads' ? headsImg : tailsImg} width="50px"></img>
            </div>
        );
    }
}

export default Coin;

