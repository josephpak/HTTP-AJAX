import React from 'react';
import styled from 'styled-components';

const FriendCardWrapper = styled.div`
    height: 200px;
    width: 500px;
    border: 1px solid black;
`

const FriendCard = ({ friend }) => {
    return (
        <FriendCardWrapper>
            <p>{`Name: ${friend.name}`}</p>
            <p>{`Age: ${friend.age}`}</p>
            <p>{`Email: ${friend.email}`}</p>
        </FriendCardWrapper>
    )
}

export default FriendCard;