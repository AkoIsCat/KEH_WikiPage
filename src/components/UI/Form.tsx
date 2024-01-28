import Button from './Button';
import { FormProps } from 'types/types';

const Form = ({
  onSubmitForm,
  titleRef,
  contentsRef,
  type,
  onClickList,
  titleValue,
  contentsValue,
}: FormProps) => {
  return (
    <form onSubmit={onSubmitForm} className="w-full flex flex-col">
      <input
        placeholder="제목을 입력해 주세요."
        ref={titleRef}
        id="title"
        defaultValue={type === 'modify' ? titleValue : ''}
        className="h-myHeight text-2xl m-5 px-2.5 bg-white text-black	rounded-myRadius border border-solid border-borderColor outline-none"
      />
      <textarea
        placeholder="내용을 입력해 주세요."
        ref={contentsRef}
        id="contents"
        defaultValue={type === 'modify' ? contentsValue : ''}
        className="h-textHeight m-5 p-2.5 bg-white text-black rounded-myRadius border border-solid border-borderColor outline-none"
      />
      <div className="flex justify-center	mr-5 mb-5">
        {type === 'modify' && (
          <Button title="목록" onClick={onClickList} type="button" />
        )}
        <Button title="등록" type="submit" />
      </div>
    </form>
  );
};

export default Form;
