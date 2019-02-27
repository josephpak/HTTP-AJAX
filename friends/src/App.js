import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import FriendList from './components/FriendList';

class App extends Component {
  constructor() {
    super()
    this.state = {
      friendsData: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(res => {
        this.setState({
          friendsData: res.data
        })
      })
  }
  
  render() {
    return (
      <div className="App">
        <FriendList 
        friends={this.state.friendsData}
        />
      </div>
    );
  }
}

export default App;
