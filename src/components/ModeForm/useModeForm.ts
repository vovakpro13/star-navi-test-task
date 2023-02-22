import { useCallback, useMemo, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  selectCurrentMode,
  selectModes,
  setCurrentMode,
} from '../../app/modesSlice';
import { resetGrid } from '../../app/cellsSlice';

const useModeForm = () => {
  const dispatch = useAppDispatch();
  const modes = useAppSelector(selectModes);
  const currentMode = useAppSelector(selectCurrentMode);

  const [selectedModeName, setModeName] = useState<null | string>(null);

  const handleStart = useCallback(() => {
    if (selectedModeName) {
      const mode = modes.find(({ name }) => name === selectedModeName);

      if (mode) {
        dispatch(resetGrid());
        dispatch(setCurrentMode(mode));
      }
    }
  }, [modes, selectedModeName]);

  const modeOptions = useMemo(
    () => modes.map(({ name }) => ({ label: name, value: name })),
    [modes]
  );

  const isDisabled = useMemo(() => {
    return !selectedModeName || selectedModeName === currentMode?.name;
  }, [selectedModeName, currentMode]);

  return {
    modeOptions,
    isDisabled,
    handleStart,
    selectedModeName,
    setModeName,
  };
};

export default useModeForm;
