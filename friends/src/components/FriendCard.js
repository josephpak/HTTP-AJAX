import React from 'react';
import styled from 'styled-components';

const FriendCardWrapper = styled.div`
    height: 200px;
    width: 500px;
    border: 1px solid rgb(59, 89, 152);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px 0;

    button {
        color: white;
        cursor: pointer;
    }

    .delete {
        background-color: firebrick;
    }

    .update {
        background-color: #3B5998;
        border-top-color: #D9DFEA;
        border-left-color: #D9DFEA;
        border-bottom-color: #3B5998;
        border-right-color: #3B5998;
    }
`

const FriendCardContentWrapper = styled.div`
`

const FriendCardButtonWrapper = styled.div`
    display: flex;
    align-items: flex-start;
`

const FriendCard = (props) => {

    const { friend } = props

    return (
        <FriendCardWrapper>
            <FriendCardContentWrapper>
            <p>{`Name: ${friend.name}`}</p>
            <p>{`Age: ${friend.age}`}</p>
            <p>{`Email: ${friend.email}`}</p>
            </FriendCardContentWrapper>
            <FriendCardButtonWrapper>
                <button
                onClick={e => props.deleteFriend(e, friend.id)}
                className="delete"
                >Delete</button>
                <button 
                onClick={e => props.populateForm(e, friend)}
                className="update"
                >Update</button>
            </FriendCardButtonWrapper>
        </FriendCardWrapper>
    )
}

export default FriendCard;