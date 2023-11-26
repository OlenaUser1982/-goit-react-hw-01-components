import styled from 'styled-components';

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: block;
  background-color: ${({ $isOnline }) => {
    return $isOnline ? 'green' : 'red';
  }};
`;

export const Item = styled.li`
  display: flex;
  gap: 15px;
`;
