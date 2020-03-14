import React, { Component } from 'react';
import Coin from './Coin';

class Flipper extends Component {
    constructor(props) {
        super(props);
        this.state = { coinSide: '', flipAmount: 0, heads: 0, tails: 0 }
        this.flip = this.flip.bind(this);
    }

    flip() {
        const getRandom = Math.floor(Math.random() * 2);
        const side = (getRandom > 0) ? 'heads': 'tails';
        this.setState( {coinSide: side,
                        flipAmount: this.state.flipAmount + 1,
                        heads: (side === 'heads') ? this.state.heads + 1  : this.state.heads,
                        tails: (side === 'tails') ? this.state.tails + 1  : this.state.tails,
                     });
    }

    render() {
        return (
            <div className="Flipper">
                <h1>Let's flip a coin!</h1>
                <Coin side={this.state.coinSide}/>
                <button onClick={this.flip}>Flip me</button>
                <h3>Out of {this.state.flipAmount} flips, there have been {this.state.heads} heads and {this.state.tails} tails.</h3>
            </div>
        );
    }
}

export default Flipper;