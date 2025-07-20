import { User } from "./types";

export const LOAD_USERS_REQUEST = 'users/LOAD_USERS_REQUEST';
export const LOAD_USERS_SUCCESS = 'users/LOAD_USERS_SUCCESS';
export const LOAD_USERS_FAILURE = 'users/LOAD_USERS_FAILURE';

export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';

export const SET_SELECTED_USER = 'users/SET_SELECTED_USER';
export const FILTER_USERS_BY_NAME = 'users/FILTER_USERS_BY_NAME';

export const ADD_FAVORITE = 'users/ADD_FAVORITE';
export const REMOVE_FAVORITE = 'users/REMOVE_FAVORITE';

export const loadUsersRequest = () => ({ type: LOAD_USERS_REQUEST });
export const loadUsersSuccess = (users: User[]) => ({ type: LOAD_USERS_SUCCESS, payload: users });
export const loadUsersFailure = (error: string) => ({ type: LOAD_USERS_FAILURE, payload: error });

export const setSelectedUser = (user: User) => ({ type: SET_SELECTED_USER, payload: user });
export const filterUsersByName = (query: string) => ({ type: FILTER_USERS_BY_NAME, payload: query });

export const addFavorite = (user: User) => ({ type: ADD_FAVORITE, payload: user });
export const removeFavorite = (userId: number) => ({ type: REMOVE_FAVORITE, payload: userId });

export const loadUserRequest = (id: number) => ({
    type: LOAD_USER_REQUEST,
    payload: id,
});

export const loadUserSuccess = (user: User) => ({
    type: LOAD_USER_SUCCESS,
    payload: user,
});

export const loadUserFailure = (error: string) => ({
    type: LOAD_USER_FAILURE,
    payload: error,
});