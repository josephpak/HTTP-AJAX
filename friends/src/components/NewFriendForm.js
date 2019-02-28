import React from 'react';
import styled from 'styled-components';

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
    state = {
        friend: this.props.activeFriend || {
            name: '',
            age: '',
            email: ''
        } 
    }

    componentDidUpdate(prevProps) {
        if (
            this.props.activeFriend &&
            prevProps.activeFriend !== this.props.activeFriend
        ) {
            this.setState({
            item: this.props.activeFriend
            });
        }
    }

    handleFormChange = e => {
        e.persist();
        let value = e.target.value
        e.preventDefault();
        this.setState(prevState => ({
            friend: {
                ...prevState.friend,
                [ e.target.name ]: value
            }
        }))
    }

    handleSubmit = e => {
        e.preventDefault();
        // Do some data checks

        const initialState = {
            name: '',
            age: '',
            email: ''
        }

        if (this.state.friend.name.length === 0) {
            alert("Don't forget a valid name!")
        } else if (!this.state.friend.age) {
            alert("Please input a valid age!")
        } else if (!this.state.friend.email.includes('@')) {
            alert("Please enter a valid email address")
        } else if (this.props.activeFriend) {
            this.props.updateFriend(e, this.state.friend)
            this.setState({
                friend: initialState
            })   
        } else {
            this.props.addFriend(e, this.state.friend)
            this.setState({
                friend: initialState
            })   
        }
        
    }

    render() {
        return (
            <NewFriendFormWrapper
                onSubmit={this.handleSubmit}
            >
                <FormRowWrapper>
                    <p>First Name</p>
                    <input           
                    type="text"
                    name="name"
                    value={this.state.friend.name}
                    autoComplete="off"
                    onChange={this.handleFormChange}
                    ></input>
                </FormRowWrapper>
                <FormRowWrapper>
                    <p>Age</p>
                    <input
                    type="text"
                    name="age"
                    value={this.state.friend.age}
                    autoComplete="off"
                    onChange={this.handleFormChange}           
                    ></input>
                </FormRowWrapper>
                <FormRowWrapper>
                    <p>Email</p>
                    <input
                    type="text"
                    name="email"
                    value={this.state.friend.email}
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