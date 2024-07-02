import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


export const initialState = {
    loading: false,
    posts: [],
    error: ''
};

const fetchPosts = createAsyncThunk('post/fetchPosts', () => {
   return axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.data.map((p) => p.title))
})

const postSlice = createSlice({
    name: 'post',
    initialState: { value: 0 },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.loading = true
        });
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.loading = false;
            state.posts = action.payload;
            state.error = '';
        })
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.loading = false;
            state.posts = [];
            state.error = action.error.message;
        })
    },
});

const postReducer = postSlice.reducer
export {fetchPosts, postReducer};
