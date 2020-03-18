import React, { Component } from 'react';
import { render } from 'react-dom';

class DeleteUser extends Component {
    constructor() {
        super();

        this.state = {
            name : '',
        };

        this.clicked = this.clicked.bind(this);
    }

    clicked(event) {
        fetch("/delete_player", {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            delPlayer: this.state.name,
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
                <h5>Delete Player</h5>
                <form>
                    <select id="dropdown" value={this.state.name} 
                            onChange={(e) => this.setState({name: e.target.value})}>
                        <option value="Select Player">Select Player</option>
                        {this.state.names}
                    </select>
                    <button onClick={ this.clicked }>Submit</button>
                </form>
            </div>
        )
    }
}

export default DeleteUser