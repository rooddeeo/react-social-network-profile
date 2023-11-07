import css from './index.module.css';

const FriendList = props => (
  <div className={css.friends}>
    <ul className={css.list}>
      {props.friends.map(friend => (
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
  </div>
);

export default FriendList;
