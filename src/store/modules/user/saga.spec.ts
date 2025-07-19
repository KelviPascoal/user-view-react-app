import { call } from 'redux-saga/effects';
import axios from 'axios';
import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';

import { loadUsersSaga } from './saga'; // ajuste o caminho se precisar
import { loadUsersSuccess, loadUsersFailure } from './actions';
import { API_URL } from '../../../constants/env';
import { mockUsers } from '../../../__mock__/mockUsers';

describe('loadUsersSaga', () => {
    it('should call API and dispatch loadUsersSuccess action with data on success', () => {
        return expectSaga(loadUsersSaga)
            .provide([
                [call(axios.get, String(API_URL)), { data: mockUsers }],
            ])
            .put(loadUsersSuccess(mockUsers))
            .run();
    });

    it('should dispatch loadUsersFailure action with error message on failure', () => {
        const error = new Error('API error');

        return expectSaga(loadUsersSaga)
            .provide([
                [call(axios.get, String(API_URL)), throwError(error)],
            ])
            .put(loadUsersFailure(error.message))
            .run();
    });
});
