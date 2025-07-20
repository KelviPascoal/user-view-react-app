import { AppRouter } from './App.route';
import { TranslateSelect } from './features/TranslateSelect';
import { ENABLE_TRANSLATE_BUTTON } from './constants/env'
import { useSelector } from 'react-redux';
import { RootState } from './store';
import { Toast } from './components/Toast';
function App() {
  const error = useSelector((state: RootState) => state.users.error);

  return <>
    {ENABLE_TRANSLATE_BUTTON && <TranslateSelect />}
    {error && <Toast statusError={error} />}
    <AppRouter />
  </>
}

export default App;
