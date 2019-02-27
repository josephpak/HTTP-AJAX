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

    addFriend = e => {
        e.preventDefault();
        const newFriend = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        }
        // Do some data checks


        axios.post('http://localhost:5000/friends', newFriend)
            .then(res => {
                alert("Success!")
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

    render() {
        return (
            <NewFriendFormWrapper
                onSubmit={this.addFriend}
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