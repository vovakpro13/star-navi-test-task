import { useAppDispatch } from '../app/hooks';
import { useEffect } from 'react';
import { fetchAllModes } from '../app/modesSlice';

const useInitializeApp = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllModes());
  }, []);
};

export default useInitializeApp;
