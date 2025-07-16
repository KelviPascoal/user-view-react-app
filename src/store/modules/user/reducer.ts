import { UsersState } from './types';
import * as actions from './actions';

const initialState: UsersState = {
    data: [],
    filtered: [],
    selectedUser: null,
    favorites: [],
    loading: false,
    error: null,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function usersReducer(state = initialState, action: any): UsersState {
    switch (action.type) {
        case actions.LOAD_USERS_REQUEST:
            return { ...state, loading: true, error: null };

        case actions.LOAD_USERS_SUCCESS:
            return { ...state, loading: false, data: action.payload, filtered: action.payload };

        case actions.LOAD_USERS_FAILURE:
            return { ...state, loading: false, error: action.payload };

        case actions.SET_SELECTED_USER:
            return { ...state, selectedUser: action.payload };

        case actions.FILTER_USERS_BY_NAME:
            return {
                ...state,
                filtered: state.data.filter((user) =>
                    user.name.toLowerCase().includes(action.payload.toLowerCase())
                ),
            };

        case actions.ADD_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.some((user) => user.id === action.payload.id)
                    ? state.favorites
                    : [...state.favorites, action.payload],
            };

        case actions.REMOVE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter((user) => user.id !== action.payload),
            };

        default:
            return state;
    }
}