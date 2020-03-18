import React, { Component } from 'react';
import { render } from 'react-dom';

class Record extends Component{
    constructor() {
        super();

        this.state = {
            names : [],
            winName: "",
            lossName: ""
        };

        this.clicked = this.clicked.bind(this);
    }

    clicked(event) {
        fetch("/win_loss", {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            winner: this.state.winName,
            loser: this.state.lossName
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
            }
        )
    }

    render() {
        return (
            <div>
                <h3>Record Matches</h3>
                <form>
                    <select id="dropdown" value={this.state.winName} 
                            onChange={(e) => this.setState({winName: e.target.value})}>
                        <option value="Select Winner">Select Winner</option>
                        {this.state.names}
                    </select>
                    <select id="dropdown" value={this.state.lossName} 
                            onChange={(e) => this.setState({lossName: e.target.value})}>
                        <option value="Select Loser">Select Loser</option>
                        {this.state.names}
                    </select>
                    <button onClick={ this.clicked }>Submit</button>
                </form>
            </div>
        )
    }
}

export default Record