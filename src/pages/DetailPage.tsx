import { useLocation } from 'react-router-dom';

import Background from 'components/UI/Background';
import ContentWrap from 'components/UI/ContentsWrap';

const DetailPage = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <Background>
      <ContentWrap>
        <div>{state.contents}</div>
      </ContentWrap>
    </Background>
  );
};

export default DetailPage;
