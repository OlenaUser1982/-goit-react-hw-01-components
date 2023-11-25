import React from 'react';
import user from 'data/user.json';
import Profile from './Profile/Profile';
import data from 'data/data.json';
import Statistics from './Statistics/Statistics';
import friends from 'data/friends.json';
import FriendsList from './FriendsList/FriendsList';
import transactions from 'data/transactions.json';
import TransactionHistoryList from './TransactionHistoryList/TransactionHistoryList';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        padding: '30px 60px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistoryList items={transactions} />
    </div>
  );
};
