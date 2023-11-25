import FriendsListItem from 'components/FriendsListItem/FriendsListItem';
import { List } from './FriendsList.styled';
const FriendsList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ name, avatar, isOnline, id }) => (
        <FriendsListItem
          name={name}
          avatar={avatar}
          isOnline={isOnline}
          key={id}
        />
      ))}
    </List>
  );
};
export default FriendsList;
