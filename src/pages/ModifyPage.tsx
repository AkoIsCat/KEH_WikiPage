import styled from 'styled-components';
import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';

import Background from 'components/UI/Background';
import ContentsWrap from 'components/UI/ContentsWrap';
import Button from 'components/UI/Button';

const ModifyPage = () => {
  const { state } = useLocation();

  const titleRef = useRef<HTMLInputElement>(null);
  const contentsRef = useRef<HTMLTextAreaElement>(null);

  const onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(titleRef.current?.value);
    console.log(contentsRef.current?.value);
  };
  console.log(state);
  return (
    <Background>
      <ContentsWrap>
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
            <Button title="목록" />
            <Button title="등록" />
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
