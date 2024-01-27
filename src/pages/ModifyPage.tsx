import React, { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Background from 'components/UI/Background';
import ContentsWrap from 'components/UI/ContentsWrap';
import Header from 'components/Header/Header';
import Form from 'components/UI/Form';
import { ModifyDataProps, DataProps } from 'types/types';

const ModifyPage = ({ modifyPost }: ModifyDataProps) => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const titleRef = useRef<HTMLInputElement>(null);
  const contentsRef = useRef<HTMLTextAreaElement>(null);

  const onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    const data: DataProps[] = [
      {
        id: state.id,
        title: titleRef.current?.value as string,
        contents: contentsRef.current?.value as string,
      },
    ];
    modifyPost(data);
    navigate('/');
  };

  const onClickList = () => {
    if (
      window.confirm('작성중이던 내용이 사라집니다. 정말 이동하시겠습니까?')
    ) {
      navigate('/');
    } else {
      return;
    }
  };

  return (
    <Background>
      <ContentsWrap>
        <Header />
        <Form
          type="modify"
          onSubmitForm={onSubmitForm}
          titleRef={titleRef}
          contentsRef={contentsRef}
          onClickList={onClickList}
          titleValue={state.title}
          contentsValue={state.contents}
        />
      </ContentsWrap>
    </Background>
  );
};

export default ModifyPage;
