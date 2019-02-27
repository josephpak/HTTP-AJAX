import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

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

const FriendCard = ({ friend }) => {

    const deleteFriend = e => {
        e.preventDefault();
        alert("Warning!!!")
        axios.delete(`http://localhost:5000/friends/${friend.id}`)
            .then(res => {
                console.log(res);
                window.location.reload(true);
            })
    }

    return (
        <FriendCardWrapper>
            <p>{`Name: ${friend.name}`}</p>
            <p>{`Age: ${friend.age}`}</p>
            <p>{`Email: ${friend.email}`}</p>
            <button
            onClick={deleteFriend}
            >Delete Friend</button>
        </FriendCardWrapper>
    )
}

export default FriendCard;