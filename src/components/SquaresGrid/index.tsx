import React, { FC } from 'react';
import { Row, Typography } from 'antd';

import useGridCells from './useGridCells';
import GridRow from './GridRow';

const SquaresGrid: FC = () => {
  const rows = useGridCells();

  return (
    <>
      {rows?.map((cols, rowIndex) => (
        <Row key={`${rowIndex}-row`}>
          <GridRow cols={cols} rowIndex={rowIndex} />
        </Row>
      ))}

      {!rows && <Typography.Text>Choose mode first.</Typography.Text>}
    </>
  );
};

export default SquaresGrid;
