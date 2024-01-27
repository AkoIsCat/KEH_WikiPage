import styled from 'styled-components';
import { ButtonProps } from 'types/types';

const Button = ({ title, onClick, type }: ButtonProps) => {
  return (
    <ButtonStyle type={type} onClick={onClick}>
      {title}
    </ButtonStyle>
  );
};

export default Button;

const ButtonStyle = styled.button`
  width: 7%;
  height: 50px;
  border-radius: 5px;
  border: 0;
  margin: 10px;
  outline: none;
  background: #ccd0e7;
  cursor: pointer;
  font-family: 'Nanum Gothic';
  font-size: 14px;

  &:hover {
    background: #b2b6c9;
  }
`;
