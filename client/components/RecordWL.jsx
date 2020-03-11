import React, { Component } from 'react';
import { render } from 'react-dom';

class Record extends Component{
    

    render() {
        return (
            <div>
            <h3>Record Matches</h3>
            <select id="dropdown1">
                <option value="Guy">Guy</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
            </select>
            </div>
        )
    }
}

export default Record