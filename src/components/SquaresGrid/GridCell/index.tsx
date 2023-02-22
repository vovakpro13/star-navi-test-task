import React, { FC } from 'react';
import classes from './style.module.css';
import classNames from 'classnames';

interface IProps {
  isActive: boolean;
  onMouseOver: () => void;
}

const GridCell: FC<IProps> = ({ isActive, onMouseOver }) => {
  return (
    <div
      className={classNames(classes.GridCell, {
        [classes.GridCellActive]: isActive,
      })}
      onMouseOver={onMouseOver}
    ></div>
  );
};

export default GridCell;
