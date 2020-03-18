import React, { Component } from 'react';
import { render } from 'react-dom';
import Record from './components/RecordWL.jsx'
import Board from './components/Leaderboard.jsx'
import DeleteUser from './components/DeleteUser.jsx'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: ""
    };

    this.clicked = this.clicked.bind(this);
  }

  clicked(event) {
    // console.log(this.refs.player.value)
    fetch("/add_user", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        player: this.refs.player.value
      })
    }).then((response) => {
      return response.json();
    })
  }

  render() {
    return (
      <div>
        <h1>CRUD-erboard</h1>
        <div id="add-player">
          <form>
            <input ref="player" type="text"/>
            <button onClick={ this.clicked }>Add Player</button>
          </form>
        </div>
        <br/>
        <Record></Record>
        <br/>
        <Board></Board>
        <br/>
        <DeleteUser></DeleteUser>
      </div>
    );
  }
}

export default App;

