import styled from 'styled-components';
import React, { useRef } from 'react';
import Button from 'components/UI/Button';
import { DataProps, ModalProps } from 'types/types';

const Modal = ({ onClose, onClickSubmit, idNumber }: ModalProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const contentsRef = useRef<HTMLTextAreaElement>(null);

  const onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    const titleIsValid = (titleRef.current?.value.length as number) >= 1;
    const contentsIsValid = (contentsRef.current?.value.length as number) >= 1;
    if (!titleIsValid) {
      alert('제목을 입력해주세요.');
      return;
    }
    if (!contentsIsValid) {
      alert('내용을 입력해주세요.');
      return;
    }

    const data: DataProps[] = [
      {
        id: idNumber + 1,
        title: titleRef.current?.value as string,
        contents: contentsRef.current?.value as string,
      },
    ];

    onClickSubmit(data);
    onClose();
  };

  return (
    <Background>
      <ContentsWrap>
        <Close>
          <p onClick={onClose}>X</p>
        </Close>
        <Form onSubmit={onSubmitForm}>
          <Input placeholder="제목을 입력해 주세요." ref={titleRef} />
          <Textarea placeholder="내용을 입력해 주세요." ref={contentsRef} />
          <ButtonWrap>
            <Button title="등록" type="submit" />
          </ButtonWrap>
        </Form>
      </ContentsWrap>
    </Background>
  );
};

export default Modal;

const Close = styled.div`
  margin: 0 20px;
  font-size: 30px;
  display: flex;
  justify-content: flex-end;
  p {
    cursor: pointer;
    margin: 5px 0;
    padding: 0;
  }
`;

const Background = styled.div`
  position: fixed;
  height: 100%;
  overflow: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(40, 40, 40, 0.7);
  z-index: 100;
`;

const ContentsWrap = styled.div`
  width: 800px;
  background: #fff;
  margin: 20px 0;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  overflow: auto;
`;

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
  margin: 0px 20px 20px 20px;
`;
