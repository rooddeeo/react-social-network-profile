import css from '../FriendList/FriendList.module.css';

const FriendListItem = ({ friends }) => (
  <ul className={css.list}>
    {friends.map(friend => (
      <li className={css.item} key={friend.id}>
        <span
          className={`${css.status} ${
            friend.isOnline ? css.online : css.offline
          }`}
        ></span>
        <img className={css.avatar} src={friend.avatar} alt="User avatar" />
        <p className={css.name}>{friend.name}</p>
      </li>
    ))}
  </ul>
);

export default FriendListItem;
