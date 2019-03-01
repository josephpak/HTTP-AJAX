import React from 'react';
import styled from 'styled-components';

import FriendCard from './FriendCard';

const FriendListWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const FriendList = (props) => {

    const { friends } = props

    return (
        <FriendListWrapper>
            {friends.map(friend => (
                <FriendCard 
                key={friend.id}
                friend={friend}
                deleteFriend={props.deleteFriend}
                populateForm={props.populateForm}
                />
            ))}
        </FriendListWrapper>
    )
}

export default FriendList;