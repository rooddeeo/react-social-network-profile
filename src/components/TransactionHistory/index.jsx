import css from './index.module.css';

const TransactionHistory = props => (
  <div className={css.transactions}>
    <table className={css.table}>
      <thead className={css.head}>
        <tr>
          <th className={css.tableHeader}>Type</th>
          <th className={css.tableHeader}>Amount</th>
          <th className={css.tableHeader}>Currency</th>
        </tr>
      </thead>
      <tbody className={css.body}>
        {props.transactions.map(transaction => (
          <tr className={css.bgTableBody} key={transaction.id}>
            <td className={css.tableBody}>{transaction.type}</td>
            <td className={css.tableBody}>{transaction.amount}</td>
            <td className={css.tableBody}>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default TransactionHistory;
