import React, { FC } from 'react';
import { Col } from 'antd';

import { GRID_COLUMN_SIZE } from '../../../constants/common';
import useGridRow from './useGridRow';

import GridCell from '../GridCell';

interface IProps {
  cols: string[];
  rowIndex: number;
}

const GridRow: FC<IProps> = ({ rowIndex, cols }) => {
  const { isCellActive, popCell, addCell } = useGridRow(rowIndex);

  return (
    <>
      {cols.map((id, column) => {
        const isActive = isCellActive(id);
        const handleMouseOver = isActive ? popCell(id) : addCell(id, column);

        return (
          <Col key={`${id}-cell`} span={GRID_COLUMN_SIZE / cols.length}>
            <GridCell isActive={isActive} onMouseOver={handleMouseOver} />
          </Col>
        );
      })}
    </>
  );
};

export default GridRow;
