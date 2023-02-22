import { Alert, Space, Spin } from 'antd';

import useInitializeApp from './hooks/useInitializeApp';
import { useAppSelector } from './app/hooks';
import {
  selectCurrentMode,
  selectError,
  selectIsModesLoading,
} from './app/modesSlice';

import ModeForm from './components/ModeForm';
import LogColumn from './components/LogColumn';
import SquaresGrid from './components/SquaresGrid';

function App() {
  const isLoading = useAppSelector(selectIsModesLoading);
  const error = useAppSelector(selectError);
  const currentMode = useAppSelector(selectCurrentMode);

  useInitializeApp();

  return (
    <Spin spinning={isLoading}>
      <Space direction="vertical" size="large">
        <Space align="start" size="large">
          <Space direction="vertical" size="large">
            <ModeForm />
            <SquaresGrid />
          </Space>

          {currentMode && <LogColumn />}
        </Space>

        {error && (
          <Alert
            message="Error"
            description={`${error}. Reload the page please.`}
            type="error"
            showIcon
          />
        )}
      </Space>
    </Spin>
  );
}

export default App;
