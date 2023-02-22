import React, { useMemo } from 'react';

import { useAppSelector } from '../../app/hooks';
import { selectCurrentMode } from '../../app/modesSlice';
import { createRandomArray } from '../../helpers/createRandomArray';

const useGridCells = () => {
  const currentMode = useAppSelector(selectCurrentMode);

  return useMemo(() => {
    if (currentMode) {
      return createRandomArray(currentMode.field).map(() =>
        createRandomArray(currentMode.field)
      );
    }

    return null;
  }, [currentMode]);
};

export default useGridCells;
