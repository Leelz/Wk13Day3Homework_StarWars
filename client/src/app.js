import React from 'react';
import ReactDOM from 'react-dom';

import Main from './components/Main.jsx'
import Home from './components/Home.jsx';
import Characters from './components/Characters.jsx';
import StarWarsContainer from './containers/StarWarsContainer.jsx';

import {Router, Route, IndexRoute, hashHistory} from 'react-router';

window.onload = () => {
  ReactDOM.render(
    <Router history = {hashHistory}>
      <Route path="/" component = {Main}>
        <IndexRoute component = {StarWarsContainer} />
        <Route path = "/characters" component={StarWarsContainer} />
      </Route>
    </Router>,
    document.getElementById('app')
    );
}