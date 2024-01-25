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
