import instance from './instance';

export const getWikiData = async () => {
  try {
    const response = instance.get('/data/mockData.json');
    return response;
  } catch (error) {
    console.error(error);
  }
};
