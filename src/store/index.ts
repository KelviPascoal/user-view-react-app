import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

// Cria o middleware do saga
const sagaMiddleware = createSagaMiddleware();

// Cria a store com redux-toolkit + saga
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: false, // desativa thunk, pois usamos saga
            serializableCheck: false, // desativa warnings com objetos não serializáveis
        }).concat(sagaMiddleware),
});

// Roda a root saga
sagaMiddleware.run(rootSaga);

// Exporta os tipos da store
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
