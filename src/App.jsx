import React from 'react';
import Profile from './components/Profile/Profile.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import FriendList from './components/FriendList/FriendList.jsx';
import TransactionHistory from './components/TransactionHistory/TransactionHistory.jsx';
import user from './json/user.json';
import friends from './json/friends.json';
import data from './json/data.json';
import transactions from './json/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        profile={{
          user: {
            avatar: user.avatar,
            username: user.username,
            tag: user.tag,
            location: user.location,
            stats: user.stats,
          },
        }}
      />
      <Statistics title="Upload stats" statistics={data} />
      <Statistics statistics={data} />
      <FriendList friends={friends} />
      <TransactionHistory history={transactions} />
    </>
  );
};

export default App;
