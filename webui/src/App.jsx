import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom';

import Home from './pages/Home/index.jsx'



class App extends Component {
  render() {
    return (
      <div>
        <Link to="/home">Home</Link>
        <Route path="/home" component={Home} />
      </div>
    )
  }
}

export default App;
