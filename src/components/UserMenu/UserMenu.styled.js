import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-right: 20px;
`;

export const UserName = styled.p`
  font-weight: 600;
  font-size: 20px;
  color: teal;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 32px;
  padding: 6px 12px;
  text-align: center;
  line-height: 1.63;
  font-weight: 500;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  color: black;
  background: #f5f4fa;
  box-shadow: rgb(164 156 156) 1px 1px 3px 1px;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: rgba(228, 238, 242, 0.88);
    box-shadow: rgba(255, 255, 255, 0.8) 1px 1px 3px 1px;
    color: rgba(144, 149, 151, 0.88);
  }
`;
