import styled from 'styled-components';
import React, { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Background from 'components/UI/Background';
import ContentsWrap from 'components/UI/ContentsWrap';
import Button from 'components/UI/Button';
import Header from 'components/Header/Header';
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
        <Form onSubmit={onSubmitForm}>
          <Input
            placeholder="제목을 입력해 주세요."
            ref={titleRef}
            defaultValue={state.title}
          />
          <Textarea
            placeholder="내용을 입력해 주세요."
            ref={contentsRef}
            defaultValue={state.contents}
          />
          <ButtonWrap>
            <Button title="목록" onClick={onClickList} type="button" />
            <Button title="등록" type="submit" />
          </ButtonWrap>
        </Form>
      </ContentsWrap>
    </Background>
  );
};

export default ModifyPage;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  height: 50px;
  font-size: 25px;
  outline: none;
  margin: 20px 20px;
  padding: 0 10px;
  background: #fff;
  color: #000;
  border: 1px solid #cdd2ed;
  border-radius: 10px;
`;

const Textarea = styled.textarea`
  height: 300px;
  margin: 20px 20px;
  padding: 10px;
  font-size: 20px;
  outline: none;
  background: #fff;
  color: #000;
  border: 1px solid #cdd2ed;
  border-radius: 10px;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 20px;
`;
