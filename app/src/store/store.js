import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers';
import thunkMiddleware from 'redux-thunk';

const composedEnhancer = applyMiddleware(thunkMiddleware);

const store = createStore(rootReducer, composedEnhancer);

export { store }