import css from './index.module.css';

const Profile = props => (
  <div className={css.container}>
    <img className={css.img} src={props.user.avatar} alt="User Avatar" />
    <h1 className={css.title}>{props.user.username}</h1>
    <p className={css.social}>
      <a className={css.link} href="https://goit.global/ua/">
        @{props.user.tag}
      </a>
    </p>
    <p className={css.location}>{props.user.location}</p>
    <ul className={css.list}>
      <li className={`${css.listItem} ${css.itemProps}`}>
        <p className={css.itemTitle}>{'Followers'}</p>
        <p className={css.itemStats}>{props.user.stats.followers}</p>
      </li>
      <li className={`${css.listItem} ${css.itemProps}`}>
        <p className={css.itemTitle}>{'Views'}</p>
        <p className={css.itemStats}>{props.user.stats.views}</p>
      </li>
      <li className={`${css.listItem} ${css.itemProps}`}>
        <p className={css.itemTitle}>{'Likes'}</p>
        <p className={css.itemStats}>{props.user.stats.likes}</p>
      </li>
    </ul>
  </div>
);

export default Profile;
