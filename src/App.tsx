import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DataProps } from 'types/types';
import { getWikiData } from 'api/axios';

import MainPage from 'pages/MainPage';
import DetailPage from 'pages/DetailPage';
import ModifyPage from 'pages/ModifyPage';

function App() {
  const [data, setData] = useState<DataProps[]>([]);
  const queryClient = new QueryClient();

  useEffect(() => {
    const getData = async () => {
      const response = await getWikiData();
      const data = await response?.data.data;
      setData(data);
    };

    getData();
  }, []);

  const addPost = (addData: DataProps[]) => {
    const newData: DataProps[] = [...data, ...addData];
    setData(newData);
  };

  const modifyPost = (modifyData: DataProps[]) => {
    const mdData = modifyData[0];
    const newData = data.map((item) =>
      item.id === mdData.id
        ? {
            ...item,
            title: mdData.title,
            contents: mdData.contents,
          }
        : item
    );
    setData(newData);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<MainPage addPost={addPost} data={data} />} />
        <Route path="/:id" element={<DetailPage />} />
        <Route
          path="/:id/modify"
          element={<ModifyPage modifyPost={modifyPost} />}
        />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
