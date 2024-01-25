import Pagination from 'react-js-pagination';
import './pagination.css';
import { PagingProps } from 'types/types';

const Paging = ({ pageChangeHandler, page, totalItemCount }: PagingProps) => {
  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={5}
      totalItemsCount={totalItemCount}
      prevPageText={'<'}
      nextPageText={'>'}
      pageRangeDisplayed={5}
      onChange={pageChangeHandler}
    />
  );
};

export default Paging;
