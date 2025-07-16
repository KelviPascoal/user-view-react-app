import { all } from 'redux-saga/effects';
import { usersSaga } from './modules/user/saga';

// Junta todas as sagas do app
export default function* rootSaga() {
    yield all([usersSaga()]);
}
