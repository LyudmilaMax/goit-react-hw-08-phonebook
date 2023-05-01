import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export const Form = styled.form`
  width: 400px;
  padding: 32px 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  background-color: rgba(239, 243, 244, 0.8);
  border-radius: 8px;
  box-shadow: rgb(93 92 92) 0px 0px 7px 0px;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 336px;
  height: 32px;
  margin-top: 4px;
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid teal;
  box-shadow: rgba(85, 146, 172, 0.8) 2px 2px 3px 1px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: auto;
  padding: 6px 12px;
  margin: 0 auto;
  margin-top: 18px;
  line-height: 1.63;
  font-size: 18px;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  color: black;
  background: rgba(187, 194, 194, 0.95);
  box-shadow: rgba(28, 108, 143, 0.8) 2px 2px 4px 1px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  &:hover {
    background-color: rgba(25, 107, 143, 0.8);
    color: rgba(235, 243, 246, 0.8);
    box-shadow: rgba(110, 112, 113, 0.8) 2px 2px 4px 1px;
    border: none;
    transform: scale(1.15);
  }
`;
