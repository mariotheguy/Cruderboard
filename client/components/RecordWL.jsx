import React, { Component } from 'react';
import { render } from 'react-dom';

class Record extends Component{
    constructor() {
        super();

        this.state = {
            names : []
        };

        this.clicked = this.clicked.bind(this);
    }

    clicked(event) {
        fetch("/add_user", {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            winner: this.refs.player.winner,
            loser: this.refs.player.loser
          })
        }).then((response) => {
          return response.json();
        })
      }

    componentDidMount() {
        fetch('/player_data')
            .then((response) => {
                return response.json()})
            .then((data) => {
                let namesArr = [];
                for (let i = 0; i < data.length; i++){
                namesArr.push(<option value={data[i].player_name}>{data[i].player_name}</option>)
                }

                this.setState({
                    names: namesArr
                });
            })
    }

    render() {
        return (
            <div>
            <h3>Record Matches</h3>
            <select id="dropdown" ref="winner">
                {this.state.names}
            </select>
            <select id="dropdown" ref="loser">
                {this.state.names}
            </select>
            <button onClick={ this.clicked }>Submit</button>
            </div>
        )
    }
}

export default Record