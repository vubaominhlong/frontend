import { createStore } from 'redux';
import { userReducer } from './reducer';
import {applyMiddleware} from 'redux';
import { thunk } from 'redux-thunk'

const store = createStore(userReducer, applyMiddleware(thunk));
export default store;