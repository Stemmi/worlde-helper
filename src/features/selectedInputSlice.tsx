import { createSlice } from '@reduxjs/toolkit'

const initialState = 0;

export const selectedInputSlice = createSlice({
    name: 'selectedInput',
    initialState,
    reducers: {
        setSelection: (state: number, action) => {
            state = action.payload;
            return state;
        },
        resetSelection: (state: number) => {
            state = initialState;
            return state;
        },
        setSelectionToNone: (state: number) => {
            state = -1;
            return state;
        },
        selectNext(state: number) {
            if (state === -1 || state >= 4) {
                state = - 1;
            } else {
                state++;
            }
            return state;
        }
     }
});

export const { setSelection, resetSelection, setSelectionToNone, selectNext } = selectedInputSlice.actions;

export default selectedInputSlice.reducer;