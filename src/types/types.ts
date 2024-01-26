import { ReactNode } from 'react';

// 공통 타입
export interface ListItemProps {
  id: number;
  title: string;
  contents: string;
}

// paging 컴포넌트 타입
export interface PagingProps {
  pageChangeHandler: (page: number) => void;
  page: number;
  totalItemCount: number;
}

// children 컴포넌트 타입
export interface ChildrenProps {
  children: ReactNode;
}

// button 컴포넌트 타입
export interface ButtonProps {
  title: string;
  onClick?: () => void;
}

// data 타입
export interface DataProps {
  id: number;
  title: string;
  contents: string;
}

// modal 컴포넌트 타입
export interface ModalProps {
  onClose: () => void;
  onClickSubmit: (data: DataProps[]) => void;
  idNumber: number;
}
