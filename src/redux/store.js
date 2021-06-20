import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './appReducers';
import usersSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
export function configureStore(initialState) {
    const middleware = [sagaMiddleware];
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(rootReducer, initialState,
        composeEnhancers(applyMiddleware(...middleware)));
    sagaMiddleware.run(usersSaga);
    return store;}