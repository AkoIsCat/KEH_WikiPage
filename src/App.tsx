import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import MainPage from 'pages/MainPage';
import DetailPage from 'pages/DetailPage';
import ModifyPage from 'pages/ModifyPage';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:id" element={<DetailPage />} />
        <Route path="/:id/modify" element={<ModifyPage />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
