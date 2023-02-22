export interface IMode {
  name: string;
  field: number;
}

export type InitialState = {
  currentMode: IMode | null;
  modes: IMode[];
  isLoading: boolean;
  error: string | null;
};
