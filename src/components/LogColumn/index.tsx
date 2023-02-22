import React, { FC } from 'react';
import { Alert, Space, Typography } from 'antd';

import { useAppSelector } from '../../app/hooks';
import { selectActiveCells } from '../../app/cellsSlice';

import classes from './styles.module.css';
import { selectCurrentMode } from '../../app/modesSlice';

const LogColumn: FC = () => {
  const cells = useAppSelector(selectActiveCells);
  const currentMode = useAppSelector(selectCurrentMode);

  return (
    <Space className={classes.Wrapper} direction="vertical" size="large">
      <Typography.Title className={classes.Header} level={2}>
        Hover Squares
      </Typography.Title>

      <Space direction="vertical" size="middle">
        {cells.map(({ id, col, row }) => (
          <Alert
            key={id}
            type="warning"
            className={classes.Alert}
            message={
              <Typography.Text type="danger">
                Row: {row} ---- Col: {col}
              </Typography.Text>
            }
          />
        ))}

        {currentMode && !cells.length && (
          <Typography.Text type="success">
            There are no active cells yet. Move your mouse over the grid to
            start;
          </Typography.Text>
        )}
      </Space>
    </Space>
  );
};

export default LogColumn;
