import { Item, Status } from './FriendsListItem.styled';

const FriendsListItem = ({ name, avatar, isOnline }) => (
  <Item className="item">
    <Status $isOnline={isOnline}></Status>
    <img className="avatar" src={avatar} alt="User avatar" width="150" />
    <p className="name">{name}</p>
  </Item>
);
export default FriendsListItem;
