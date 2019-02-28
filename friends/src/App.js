import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { NavLink, Route } from 'react-router-dom';

import './App.css';
import FriendList from './components/FriendList';
import NewFriendForm from './components/NewFriendForm';

const AppWrapper = styled.div`
  display: flex;
  margin: 0 50px;
  justify-content: space-around;
`

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;

  .nav-links {
    a {
      margin: 0 10px;
      text-decoration: none;
      color: #538ADC;
    }

  }
`

class App extends Component {
  constructor() {
    super()
    this.state = {
      activeFriend: null,
      friends: [],
      refreshed: false
    }
  }

  componentDidMount() {
    console.log("CDM")
    axios.get('http://localhost:5000/friends')
      .then(res => {
        this.setState({
          friends: res.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  addFriend = (e, friend) => {
    e.preventDefault();
    axios.post('http://localhost:5000/friends', friend)
      .then(res => {
          alert("Success! You just added a new friend!")
          console.log(res)
          this.setState({
            friends: res.data
          });
      })
      .catch(err => {
          console.log(err);
      })
  }

  deleteFriend = (e, id) => {
    e.preventDefault()
    if (window.confirm("Are you sure you want to delete this friend?")) {
      axios.delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
          console.log(res);
          this.setState({
            friends: res.data
          });
      })
      .catch(err => {
        console.log(err);
      })
    }  
  }

  populateForm = (e, friend) => {
    e.preventDefault();
    this.setState({
      activeFriend: friend
    })
    this.props.history.push("/friend-form");
  }

  updateFriend = (e, friend) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/friends/${friend.id}`, friend)
      .then(res => {
          alert(`You just updated ${friend.name}!`)
          console.log(res)
          this.setState({
            activeFriend: null,
            friends: res.data
          })
          this.props.history.push("/friend-list");
      })
      .catch(err => {
          console.log(err);
      })
  }
  
  render() {
    console.log("re-render")
    return (
      <>
        <NavWrapper>
            <h1>the friend list</h1>
            <div className="nav-links">
              <NavLink exact to="/">
                [ home ]
              </NavLink>
              <NavLink to="/friend-list">[ friends ]</NavLink>
              <NavLink to="/friend-form">[ add friend ]</NavLink>
            </div>
        </NavWrapper>
        <AppWrapper>

          

          <Route
          path="/friend-list"
          render={props => (
            <FriendList 
            {...props}
            friends={this.state.friends}
            deleteFriend={this.deleteFriend}
            populateForm={this.populateForm}
            />
          )} 
          />

          <Route
          path="/friend-form"
          render={props => (
            <NewFriendForm 
            {...props}
            activeFriend={this.state.activeFriend}
            friends={this.state.friends}
            addFriend={this.addFriend}
            updateFriend={this.updateFriend}
            />
          )}
          />
          
        </AppWrapper>
      </>
    );
  }
}

export default App;
