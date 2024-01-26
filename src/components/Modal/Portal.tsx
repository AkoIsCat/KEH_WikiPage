import ReactDom from 'react-dom';
import { ChildrenProps } from 'types/types';

const Portal = ({ children }: ChildrenProps) => {
  const el = document.getElementById('modal') as HTMLElement;
  return ReactDom.createPortal(children, el);
};

export default Portal;
