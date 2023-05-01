import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;

  a {
    color: rgba(3, 8, 13, 0.8);
    text-decoration: none;
    padding: 12px;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.6;

    &:hover {
      color: #ccc;
    }
    &.active {
      color: white;
    }
  }
`;
