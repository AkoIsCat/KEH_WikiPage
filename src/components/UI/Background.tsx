import { ChildrenProps } from 'types/types';

const Background = ({ children }: ChildrenProps) => {
  return (
    <div className="bg-backgroundColor flex justify-center min-h-screen">
      {children}
    </div>
  );
};

export default Background;
