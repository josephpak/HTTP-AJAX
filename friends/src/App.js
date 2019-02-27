import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import './App.css';
import FriendList from './components/FriendList';
import NewFriendForm from './components/NewFriendForm';

const AppWrapper = styled.div`
  display: flex;
  margin: 0 50px;
  justify-content: space-around;
`

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
      <AppWrapper>
        <FriendList 
        friends={this.state.friendsData}
        />
        <NewFriendForm 
        friends={this.state.friendsData}
        />
      </AppWrapper>
    );
  }
}

export default App;
