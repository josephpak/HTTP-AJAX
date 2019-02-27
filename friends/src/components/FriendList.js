import React from 'react';
import styled from 'styled-components';

import FriendCard from './FriendCard';

const FriendListWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const FriendList = ({ friends }) => {
    return (
        <FriendListWrapper>
            {friends.map(friend => (
                <FriendCard 
                key={friend.id}
                friend={friend}
                />
            ))}
        </FriendListWrapper>
    )
}

export default FriendList;