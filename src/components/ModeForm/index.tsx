import React, { FC } from 'react';
import { Button, Select, Space } from 'antd';

import useModeForm from './useModeForm';

const ModeForm: FC = () => {
  const {
    modeOptions,
    isDisabled,
    handleStart,
    selectedModeName,
    setModeName,
  } = useModeForm();

  return (
    <Space size="middle">
      <Select
        value={selectedModeName}
        onChange={setModeName}
        options={modeOptions}
        placeholder="Pick mode"
        style={{ width: 150 }}
      ></Select>

      <Button type="primary" onClick={handleStart} disabled={isDisabled}>
        Start
      </Button>
    </Space>
  );
};

export default ModeForm;
