import React from 'react';
import styled from 'styled-components';

const FriendCardWrapper = styled.div`
    height: 200px;
    width: 500px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button {
        background-color: firebrick;
        color: white;
        cursor: pointer;
    }
`

const FriendCard = (props) => {

    const { friend } = props

    return (
        <FriendCardWrapper>
            <p>{`Name: ${friend.name}`}</p>
            <p>{`Age: ${friend.age}`}</p>
            <p>{`Email: ${friend.email}`}</p>
            <button
            onClick={e => props.deleteFriend(e, friend.id)}
            >Delete Friend</button>
            <button 
            onClick={e => props.populateForm(e, friend)}
            >Update Item</button>
        </FriendCardWrapper>
    )
}

export default FriendCard;