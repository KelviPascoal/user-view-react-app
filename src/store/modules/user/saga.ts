import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
    LOAD_USERS_REQUEST,
    LOAD_USER_REQUEST,
    loadUsersFailure,
    loadUsersSuccess,
    loadUserFailure,
    loadUserSuccess,
} from './actions';
import { SagaIterator } from 'redux-saga';
import { API_URL } from '../../../constants/env';
import { getUserFriendlyErrorMessage } from '../../../utils/errorMessage';

// GET /users
export function* loadUsersSaga(): SagaIterator {
    try {
        const response = yield call(
            axios.get,
            String(API_URL)
        );

        yield put(loadUsersSuccess(response.data));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        const status = error?.response?.status;
        const message = getUserFriendlyErrorMessage(status);

        yield put(loadUsersFailure(message));
    }
}

// GET /users/:id
export function* loadUserByIdSaga(action: { type: string; payload: number }): SagaIterator {
    try {
        const userId = action.payload;

        const response = yield call(
            axios.get,
            `${API_URL}/${userId}`
        );

        yield put(loadUserSuccess(response.data));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        const status = error?.response?.status;
        const message = getUserFriendlyErrorMessage(status);

        yield put(loadUserFailure(message));
    }
}

export function* usersSaga() {
    yield takeLatest(LOAD_USERS_REQUEST, loadUsersSaga);
    yield takeLatest(LOAD_USER_REQUEST, loadUserByIdSaga);
}