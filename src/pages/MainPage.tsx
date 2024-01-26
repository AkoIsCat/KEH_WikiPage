import { useState } from 'react';

import Header from 'components/Header/Header';
import ListItem from 'components/MainPage/ListItem';
import Paging from 'components/MainPage/Paging';
import Background from 'components/UI/Background';
import ContentsWrap from 'components/UI/ContentsWrap';

import LoadingSpinner from 'components/UI/LoadingSpinner';
import Button from 'components/UI/Button';
import Portal from 'components/Modal/Portal';
import Modal from 'components/Modal/Modal';
import { DataProps, AddDataProps } from 'types/types';

const MainPage = ({ addPost, data }: AddDataProps) => {
  const [page, setPage] = useState(1);
  const [modalOn, setModalOn] = useState(false);

  if (!data) {
    return <LoadingSpinner />;
  }

  const startIndex = (page - 1) * 5;
  const endIndex = startIndex + 5;
  const currentPost = data.slice(startIndex, endIndex);

  const pageChangeHandler = (page: number) => {
    setPage(page);
  };

  const modalHandler = () => {
    setModalOn((prev) => !prev);
  };

  return (
    <Background>
      <ContentsWrap>
        <Header />
        {modalOn && (
          <Portal>
            <Modal
              onClose={modalHandler}
              onClickSubmit={addPost}
              idNumber={data.length}
            />
          </Portal>
        )}
        {currentPost.map((item: DataProps) => (
          <ListItem
            key={item.id}
            id={item.id}
            title={item.title}
            contents={item.contents}
          />
        ))}
        <Button title={'추가'} onClick={modalHandler} type='button' />
        <Paging
          pageChangeHandler={pageChangeHandler}
          page={page}
          totalItemCount={data.length}
        />
      </ContentsWrap>
    </Background>
  );
};

export default MainPage;
