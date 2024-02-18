import { configureStore } from "@reduxjs/toolkit";
import guessedWordReducer from '../features/guessedWordSlice';
import selectedInputReducer from '../features/selectedInputSlice';

export const store = configureStore({
    reducer: {
        guessedWord: guessedWordReducer,
        selectedInput: selectedInputReducer
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;