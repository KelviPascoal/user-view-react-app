import usersReducer from '../reducer';
import * as actions from '../actions';
import { UsersState } from '../types';
import { mockUsers } from '../__mock__/mockUsers';

const initialState: UsersState = {
    data: [],
    filtered: [],
    selectedUser: null,
    favorites: [],
    loading: false,
    error: null,
};

describe('usersReducer', () => {
    it('should return the initial state when action is unknown', () => {
        const action = { type: 'UNKNOWN' };

        expect(usersReducer(undefined, action)).toEqual(initialState);
    });

    it('should set loading to true and error to null on LOAD_USERS_REQUEST', () => {
        const action = { type: actions.LOAD_USERS_REQUEST };
        const expectedState = { ...initialState, loading: true, error: null };

        expect(usersReducer(initialState, action)).toEqual(expectedState);
    });

    it('should set data and filtered and loading to false on LOAD_USERS_SUCCESS', () => {
        const action = { type: actions.LOAD_USERS_SUCCESS, payload: mockUsers };
        const expectedState = { ...initialState, loading: false, data: mockUsers, filtered: mockUsers };

        expect(usersReducer(initialState, action)).toEqual(expectedState);
    });

    it('should set error and loading to false on LOAD_USERS_FAILURE', () => {
        const error = 'Erro ao carregar usuários';
        const action = { type: actions.LOAD_USERS_FAILURE, payload: error };
        const expectedState = { ...initialState, loading: false, error };

        expect(usersReducer(initialState, action)).toEqual(expectedState);
    });

    it('should set selectedUser on SET_SELECTED_USER', () => {
        const selectedUser = mockUsers[0];
        const action = { type: actions.SET_SELECTED_USER, payload: selectedUser };
        const expectedState = { ...initialState, selectedUser };

        expect(usersReducer(initialState, action)).toEqual(expectedState);
    });

    it('should filter users by name on FILTER_USERS_BY_NAME', () => {
        const stateWithData = { ...initialState, data: mockUsers };
        const action = { type: actions.FILTER_USERS_BY_NAME, payload: 'Lea' };
        const expectedState = { ...stateWithData, filtered: [mockUsers[0]] };

        expect(usersReducer(stateWithData, action)).toEqual(expectedState);
    });

    it('should add a user to favorites if not already in the list on ADD_FAVORITE', () => {
        const action = { type: actions.ADD_FAVORITE, payload: mockUsers[0] };
        const expectedState = { ...initialState, favorites: [mockUsers[0]] };

        expect(usersReducer(initialState, action)).toEqual(expectedState);
    });

    it('should not add duplicate user to favorites on ADD_FAVORITE', () => {
        const stateWithFavorite = { ...initialState, favorites: [mockUsers[0]] };
        const action = { type: actions.ADD_FAVORITE, payload: mockUsers[0] };

        expect(usersReducer(stateWithFavorite, action)).toEqual(stateWithFavorite);
    });

    it('should remove a user from favorites on REMOVE_FAVORITE', () => {
        const stateWithFavorites = { ...initialState, favorites: mockUsers };
        const action = { type: actions.REMOVE_FAVORITE, payload: mockUsers[0].id };
        const expectedState = { ...initialState, favorites: [mockUsers[1]] };

        expect(usersReducer(stateWithFavorites, action)).toEqual(expectedState);
    });
});
