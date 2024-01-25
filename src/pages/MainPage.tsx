import { useQuery } from '@tanstack/react-query';
import { getWikiData } from 'api/axios';

const MainPage = () => {
  const { data: wikiData } = useQuery({
    queryKey: ['list'],
    queryFn: getWikiData,
    select: (data) => data?.data.data,
  });

  console.log(wikiData);

  return <div>main</div>;
};

export default MainPage;
