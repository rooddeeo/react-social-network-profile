import css from './Statistics.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const Statistics = ({ title, statistics }) => (
  <section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}
    <ul className={css.list}>
      {statistics.map(stat => (
        <li
          className={`${css.item} ${css.randomBackgraund}`}
          style={{ backgroundColor: getRandomHexColor() }}
          key={stat.id}
        >
          <span className={css.label}>{stat.label}</span>
          <span className={css.percentage}>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Statistics;
