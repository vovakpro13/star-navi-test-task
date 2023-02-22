import axios from 'axios';
import { BASE_URL } from '../constants/urls';

const baseAxiosInstance = axios.create({
  baseURL: BASE_URL,
});

export default baseAxiosInstance;
