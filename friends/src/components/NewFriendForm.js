import React from 'react';
import styled from 'styled-components';

const NewFriendFormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    padding: 30px;
    border: 1px solid rgb(59, 89, 152);
    height: 250px;
    align-items: center;

    button {
        margin: 20px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        cursor: pointer;
        max-width: 100px;
        background-color: #3B5998;
        border-top-color: #D9DFEA;
        border-left-color: #D9DFEA;
        border-bottom-color: #3B5998;
        border-right-color: #3B5998;
    }
`

const FormRowWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;

    input {
        height: 14px;
        margin: 0 10px;
        background-color: rgb(216, 223, 234);
        border: 1px solid rgb(102, 102, 102);
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
            <NewFriendFormWrapper onSubmit={this.handleSubmit}>
                <h3>{`[ ${this.props.activeFriend ? "update" : "add new"} friend ]`}</h3>
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
                <button>{`${this.props.activeFriend ? "Update" : "Add New"} Friend`}</button>
            </NewFriendFormWrapper>
        )
    }
}

export default NewFriendForm;