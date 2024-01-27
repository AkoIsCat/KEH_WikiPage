import { ChildrenProps } from 'types/types';

const ContentsWrap = ({ children }: ChildrenProps) => {
  return (
    <div className="w-contents flex justify-center flex-col	bg-white">
      {children}
    </div>
  );
};

export default ContentsWrap;
