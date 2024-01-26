import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
}

const ContentsWrap = ({ children }: Props) => {
  return <ContentsWrapStyle>{children}</ContentsWrapStyle>;
};

export default ContentsWrap;

const ContentsWrapStyle = styled.div`
  width: 70vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #ffffff;
  font-family: Noto Sans KR;
`;
