import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';

import Background from 'components/UI/Background';
import ContentsWrap from 'components/UI/ContentsWrap';
import Button from 'components/UI/Button';
import Header from 'components/Header/Header';
import AutoLinkingContent from 'utils/AutoLinkingContent';
import { DetailProps, DataProps } from 'types/types';
import LoadingSpinner from 'components/UI/LoadingSpinner';

const DetailPage = ({ data }: DetailProps) => {
  const { id } = useParams();
  const navigate = useNavigate();

  if (!id || !data) {
    return <LoadingSpinner />;
  }

  const currentData = data[+id - 1];

  const onClickList = () => {
    navigate('/');
  };

  const titleArray = data.map((item: DataProps) => item.title);

  const onClickModify = () => {
    navigate(`/${currentData.id}/modify`, { state: currentData });
  };

  if (!currentData) {
    return <LoadingSpinner />;
  }

  return (
    <Background>
      <ContentsWrap>
        <Header />
        <Title>{currentData.title}</Title>
        <Contents>
          {AutoLinkingContent({
            contents: currentData.contents,
            titles: titleArray,
            allData: data,
          })}
        </Contents>
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
