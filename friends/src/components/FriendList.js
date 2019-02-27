import React from 'react';
import styled from 'styled-components';

import FriendCard from './FriendCard';

const FriendList = ({ friends }) => {
    return (
        <>
            {friends.map(friend => (
                <FriendCard 
                key={friend.id}
                friend={friend}
                />
            ))}
        </>
    )
}

export default FriendList;