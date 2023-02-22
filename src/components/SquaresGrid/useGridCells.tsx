import React, { useMemo } from 'react';

import { useAppSelector } from '../../app/hooks';
import { selectCurrentMode } from '../../app/modesSlice';
import { DefaultCurrentMode } from '../../constants/common';
import { createRandomArray } from '../../helpers/createRandomArray';

const useGridCells = () => {
  const currentMode = useAppSelector(selectCurrentMode) || DefaultCurrentMode;

  return useMemo(
    () =>
      createRandomArray(currentMode.field).map(() =>
        createRandomArray(currentMode.field)
      ),
    [currentMode.field]
  );
};

export default useGridCells;
