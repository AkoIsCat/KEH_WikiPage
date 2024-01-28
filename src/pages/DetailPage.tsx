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
  const titleArray = data.map((item: DataProps) => item.title);

  const onClickList = () => {
    navigate('/');
  };

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
        <div className="text-4xl font-bold my-2.5 mx-5 pb-5 border-b-4 border-solid border-btncolor">
          {currentData.title}
        </div>
        <div className="h-textHeight m-5">
          {currentData.contents.split('\n').map((item, index) => (
            <div key={index}>
              {AutoLinkingContent({
                contents: item,
                titles: titleArray,
                allData: data,
              })}
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Button title="목록" onClick={onClickList} type="button" />
          <Button title="수정" onClick={onClickModify} type="submit" />
        </div>
      </ContentsWrap>
    </Background>
  );
};

export default DetailPage;
