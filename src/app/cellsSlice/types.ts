export interface IGridCell {
  id: string;
  row: number;
  col: number;
}

export type InitialState = {
  cells: IGridCell[];
};
