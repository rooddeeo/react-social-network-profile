import css from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem.jsx';
const FriendList = ({ friends }) => (
  <div className={css.friends}>
    <FriendListItem friends={friends} />
  </div>
);

export default FriendList;
