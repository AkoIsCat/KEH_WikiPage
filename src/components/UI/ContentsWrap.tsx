import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
}

const ContentWrap = ({ children }: Props) => {
  return <ContentWrapStyle>{children}</ContentWrapStyle>;
};

export default ContentWrap;

const ContentWrapStyle = styled.div`
  width: 70vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #ffffff;
  font-family: Noto Sans KR;
`;
