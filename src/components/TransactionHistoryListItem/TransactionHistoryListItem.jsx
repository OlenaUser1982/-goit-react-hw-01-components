import { List3 } from './TransactionHistoryListItem.styled';

const TransactionHistoryListItem = ({ type, amount, currency }) => {
  return (
    <tbody>
      <List3>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </List3>
    </tbody>
  );
};
export default TransactionHistoryListItem;
