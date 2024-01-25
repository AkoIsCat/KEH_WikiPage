import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getWikiData } from 'api/axios';

import Header from 'components/Header/Header';
import ListItem from 'components/MainPage/ListItem';
import Paging from 'components/MainPage/Paging';
import Background from 'components/UI/Background';
import ContentWrap from 'components/UI/ContentsWrap';

import { ListItemProps } from 'types/types';
import LoadingSpinner from 'components/UI/LoadingSpinner';

const MainPage = () => {
  const [page, setPage] = useState(1);

  const { data: wikiData, isLoading: wikiDataIsLoading } = useQuery({
    queryKey: ['list'],
    queryFn: getWikiData,
    select: (data) => data?.data.data,
  });

  if (wikiDataIsLoading) {
    return <LoadingSpinner />;
  }

  const startIndex: number = (page - 1) * 5;
  const endIndex: number = startIndex + 5;
  const currentPost: [] = wikiData.slice(startIndex, endIndex);
  console.log(currentPost);

  const pageChangeHandler = (page: number) => {
    setPage(page);
  };

  return (
    <Background>
      <ContentWrap>
        <Header />
        {currentPost.map((item: ListItemProps) => (
          <ListItem
            key={item.id}
            id={item.id}
            title={item.title}
            contents={item.contents}
          />
        ))}
        <Paging
          pageChangeHandler={pageChangeHandler}
          page={page}
          totalItemCount={wikiData.length}
        />
      </ContentWrap>
    </Background>
  );
};

export default MainPage;
