import { List, List1 } from './TransactionHistoryList.styled';
import TransactionHistoryListItem from 'components/TransactionHistoryListItem/TransactionHistoryListItem';
const TransactionHistoryList = ({ items }) => {
  return (
    <List>
      {' '}
      <thead>
        <List1>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </List1>
      </thead>
      {items.map(({ type, amount, currency, id }) => (
        <TransactionHistoryListItem
          type={type}
          amount={amount}
          currency={currency}
          key={id}
        />
      ))}
    </List>
  );
};
export default TransactionHistoryList;
