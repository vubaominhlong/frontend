import {configureStore} from '@reduxjs/toolkit'
import { bookReducer } from '../feature/book/bookSlice';
import { penReducer } from '../feature/pen/penSlice';
import logger from 'redux-logger';
import { postReducer } from '../feature/post/postSlice';


export const store = configureStore({
    reducer: {
        book: bookReducer,
        pen: penReducer,
        post: postReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});