import styled from 'styled-components';
import { List, List1, List2 } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <List className={styled.transactionHistory}>
      <thead>
        <tr>
          <List2>Type</List2>
          <List2>Amount</List2>
          <List2>Currency</List2>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <List1>{item.type}</List1>
            <List1>{item.amount}</List1>
            <List1>{item.currency}</List1>
          </tr>
        ))}
      </tbody>
    </List>
  );
};

export default TransactionHistory;
