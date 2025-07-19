import { AppRouter } from './App.route';
import { TranslateSelect } from './features/TranslateSelect';
import { ENABLE_TRANSLATE_BUTTON } from './constants/env'
function App() {

  return <>
    {ENABLE_TRANSLATE_BUTTON && <TranslateSelect />}
    <AppRouter />
  </>
}

export default App;
