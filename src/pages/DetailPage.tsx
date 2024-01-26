import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

import Background from 'components/UI/Background';
import ContentsWrap from 'components/UI/ContentsWrap';
import Button from 'components/UI/Button';
import Header from 'components/Header/Header';

const DetailPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const onClickList = () => {
    navigate('/');
  };

  const onClickModify = () => {
    navigate(`/${state.id}/modify`, { state: state });
  };

  return (
    <Background>
      <ContentsWrap>
        <Header />
        <Title>{state.title}</Title>
        <Contents>{state.contents}</Contents>
        <ButtonWrap>
          <Button title="목록" onClick={onClickList} type="button" />
          <Button title="수정" onClick={onClickModify} type="submit" />
        </ButtonWrap>
      </ContentsWrap>
    </Background>
  );
};

export default DetailPage;

const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  margin: 10px 20px;
  padding-bottom: 20px;
  border-bottom: 3px solid #ccd0e7;
`;

const Contents = styled.div`
  height: 300px;
  margin: 20px;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 20px;
`;
