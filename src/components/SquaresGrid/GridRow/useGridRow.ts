import { useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import {
  pushCell,
  removeCell,
  selectActiveCells,
} from '../../../app/cellsSlice';

const useGridRow = (rowIndex: number) => {
  const activeCells = useAppSelector(selectActiveCells);
  const dispatch = useAppDispatch();

  const isCellActive = useCallback(
    (cellId: string) => activeCells.some(({ id }) => id === cellId),
    [activeCells]
  );

  const popCell = useCallback(
    (id: string) => () => setTimeout(() => dispatch(removeCell(id)), 0),
    [activeCells]
  );

  const addCell = useCallback(
    (id: string, col: number) => () => {
      setTimeout(() => dispatch(pushCell({ id, row: rowIndex, col })), 0);
    },
    [activeCells]
  );

  return { isCellActive, popCell, addCell };
};

export default useGridRow;
