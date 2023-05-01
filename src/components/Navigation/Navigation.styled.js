import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;

  a {
    color: rgba(3, 8, 13, 0.8);
    text-decoration: none;
    margin: 0 20px;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.6;
    letter-spacing: 0.0075em;

    &:hover {
      color: #ccc;
    }
    &.active {
      color: white;
    }
  }
`;
