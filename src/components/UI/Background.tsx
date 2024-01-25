import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
}

const Background = ({ children }: Props) => {
  return <BackBox>{children}</BackBox>;
};

export default Background;

const BackBox = styled.div`
  background: #edeef3;
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;
