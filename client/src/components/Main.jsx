import React from 'react'

import Home from './Home.jsx'
import StarWarsContainer from '../containers/StarWarsContainer.jsx'

import {Link} from 'react-router'

class Main extends React.Component {
  render() {
    return (
    <div>
      <h4>Main App</h4>
      <ul>
        <li><Link to="/characters">StarWarsContainer</Link></li>
      </ul>
    </div>
    )
  }
}

export default Main;