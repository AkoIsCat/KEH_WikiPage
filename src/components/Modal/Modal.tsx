import React, { useRef } from 'react';
import { DataProps, ModalProps } from 'types/types';
import Form from 'components/UI/Form';

const Modal = ({ onClose, onClickSubmit, idNumber, titles }: ModalProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const contentsRef = useRef<HTMLTextAreaElement>(null);

  const onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    const titleIsValid = (titleRef.current?.value.length as number) >= 1;
    const contentsIsValid = (contentsRef.current?.value.length as number) >= 1;
    const titleIsUnique = !titles.includes(titleRef.current?.value as string);

    if (!titleIsValid) {
      alert('제목을 입력해주세요.');
      return;
    }
    if (!titleIsUnique) {
      alert('이미 존재하는 제목입니다.');
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
    <div className="fixed	h-full overflow-auto top-0 right-0 left-0 bottom-0 z-50 bg-modalBGColor">
      <div className="w-modalW bg-white my-5 rounded-myRadius absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 overflow-auto shadow-modal">
        <div className="mx-5 text-3xl flex justify-end">
          <p onClick={onClose} className="cursor-pointer my-close p-0">
            X
          </p>
        </div>
        <Form
          type="add"
          titleRef={titleRef}
          contentsRef={contentsRef}
          onSubmitForm={onSubmitForm}
        />
      </div>
    </div>
  );
};

export default Modal;
