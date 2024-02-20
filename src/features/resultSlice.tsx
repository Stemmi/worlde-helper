import { createSlice } from '@reduxjs/toolkit'
import { findWords } from '../services/wordService';

const initialState: string[] = [];

export const resultSlice = createSlice({
    name: 'result',
    initialState,
    reducers: {
        updateResult(state: string[], action) {
            state = findWords(action.payload);
            return state;
        },
        resetResult(state: string[]) {
            state = initialState;
            return state;
        }
    }
});

export const { updateResult, resetResult } = resultSlice.actions;

export default resultSlice.reducer;