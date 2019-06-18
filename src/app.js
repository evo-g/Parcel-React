import React from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import DummyPage from './components/DummyPage/DummyPage'

export default () => (
  <Router>
    <div className='container'>
      <Route exact path='/' component={HomePage} />
      <Route path='/dummy' component={DummyPage} />
    </div>
  </Router>
);
