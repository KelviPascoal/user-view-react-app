import { AppRouter } from './App.route';
import { TranslateButton } from './components/TranslateButton';
import { ENABLE_TRANSLATE_BUTTON } from './constants/env'
function App() {

  return <>
    <AppRouter />
    {ENABLE_TRANSLATE_BUTTON && <TranslateButton />}
  </>
}

export default App;
