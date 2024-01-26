import styled from 'styled-components';
import { ButtonProps } from 'types/types';

const Button = ({ title, onClick }: ButtonProps) => {
  return <ButtonStyle onClick={onClick}>{title}</ButtonStyle>;
};

export default Button;

const ButtonStyle = styled.button`
  width: 7%;
  height: 40px;
  border-radius: 5px;
  border: 0;
  margin: 5px;
  outline: none;
  background: #ccd0e7;
  cursor: pointer;
  font-family: 'Nanum Gothic';
  font-size: 14px;

  &:hover {
    background: #b2b6c9;
  }
`;
