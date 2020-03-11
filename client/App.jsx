import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
    render() {
      return (
        <div>
          <h1>CRUD-erboar</h1>
            <div id="add-player">
                  <form action="/add_user">
                    <button>Add Player</button>
                    <input type="text"/>
                  </form>
            </div>
        </div>
      );
    }
}

export default App;

