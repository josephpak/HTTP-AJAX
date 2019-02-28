import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const NewFriendFormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    padding: 30px;
    border: 1px solid blue;
    height: 200px;
`

const FormRowWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    input {
        height: 14px;
        margin: 0 10px;
    }
`

class NewFriendForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            email: ''
        }
    }

    handleFormChange = e => {
        e.preventDefault();
        this.setState({
            [ e.target.name ]: e.target.value
        })
    }

    updateFriendList = e => {
        e.preventDefault();
        const friendData = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        }

        const friendCheck = this.props.friends.filter(friend => (
            friend.name === friendData.name
        ))

        // Do some data checks
        if (friendData.name.length === 0) {
            alert("Don't forget a valid name!")
        } else if (friendData.age === "") {
            alert("Please input a valid age!")
        } else if (friendData.email.length === 0) {
            alert("Please enter a valid email address")
        } else if (friendCheck.length > 0) { 
            const friendId = friendCheck[0].id;
            axios.put(`http://localhost:5000/friends/${friendId}`, friendData)
            .then(res => {
                alert(`You just updated ${friendCheck[0].name}!`)
                console.log(res)
                window.location.reload(true);
                this.setState({
                    name: '',
                    age: '',
                    email: ''
                })
            })
            .catch(err => {
                console.log(err);
            })
        } else {
            axios.post('http://localhost:5000/friends', friendData)
            .then(res => {
                alert("Success! You just added a new friend!")
                console.log(res)
                window.location.reload(true);
                this.setState({
                    name: '',
                    age: '',
                    email: ''
                })
            })
            .catch(err => {
                console.log(err);
            })
        }     
    }

    render() {
        return (
            <NewFriendFormWrapper
                onSubmit={this.updateFriendList}
            >
                <FormRowWrapper>
                    <p>First Name</p>
                    <input           
                    type="text"
                    name="name"
                    value={this.state.name}
                    autoComplete="off"
                    onChange={this.handleFormChange}
                    ></input>
                </FormRowWrapper>
                <FormRowWrapper>
                    <p>Age</p>
                    <input
                    type="text"
                    name="age"
                    value={this.state.age}
                    autoComplete="off"
                    onChange={this.handleFormChange}           
                    ></input>
                </FormRowWrapper>
                <FormRowWrapper>
                    <p>Email</p>
                    <input
                    type="text"
                    name="email"
                    value={this.state.email}
                    autoComplete="off"
                    onChange={this.handleFormChange}
                    ></input>
                </FormRowWrapper>
                <button>Add Friend</button>
            </NewFriendFormWrapper>
        )
    }
}

export default NewFriendForm;