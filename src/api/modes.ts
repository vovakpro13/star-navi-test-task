import baseAxiosInstance from './index';

const modesAPI = {
  getAll: () => baseAxiosInstance.get('/'),
};

export default modesAPI;
