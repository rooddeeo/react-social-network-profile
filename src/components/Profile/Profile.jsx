import css from './Profile.module.css';

const Profile = ({profile}) => (
  <div className={css.container}>
    <img className={css.img} src={profile.user.avatar} alt="User Avatar" />
    <h1 className={css.title}>{profile.user.username}</h1>
    <p className={css.social}>
      <a className={css.link} href="https://goit.global/ua/">
        @{profile.user.tag}
      </a>
    </p>
    <p className={css.location}>{profile.user.location}</p>
    <ul className={css.list}>
      <li className={`${css.listItem} ${css.itemProps}`}>
        <p className={css.itemTitle}>{'Followers'}</p>
        <p className={css.itemStats}>{profile.user.stats.followers}</p>
      </li>
      <li className={`${css.listItem} ${css.itemProps}`}>
        <p className={css.itemTitle}>{'Views'}</p>
        <p className={css.itemStats}>{profile.user.stats.views}</p>
      </li>
      <li className={`${css.listItem} ${css.itemProps}`}>
        <p className={css.itemTitle}>{'Likes'}</p>
        <p className={css.itemStats}>{profile.user.stats.likes}</p>
      </li>
    </ul>
  </div>
);

export default Profile;
