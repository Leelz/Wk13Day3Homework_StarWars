import React from 'react';
import ReactDOM from 'react-dom';

import Characters from '../components/Characters.jsx';

class StarWarsContainer extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
      characters: []
      };
    }

  componentDidMount() {
    const url = "http://swapi.co/api/people/";
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function() {
      if (request.status === 200) {
        const data = JSON.parse(request.responseText);
        console.log(data);
        const newData = data.results
        console.log(newData)
        this.setState({characters : newData});
      }
    }.bind(this);
    request.send(null);
  }
  render() {
    return (
        <Characters characters = {this.state.characters} />
    )
  }
}

module.exports = StarWarsContainer;