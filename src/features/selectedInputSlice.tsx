import { createSlice } from '@reduxjs/toolkit'

export type SelectedInput = number | undefined;

const initialState: SelectedInput = 0;

export const selectedInputSlice = createSlice({
    name: 'selectedInput',
    initialState,
    reducers: {
        setSelection: (state: SelectedInput, action) => {
            state = action.payload;
            return state;
        },
        resetSelection: (state: SelectedInput) => {
            state = initialState;
            return state;
        },
        setSelectionToNone: (state: SelectedInput) => {
            state = undefined;
            return state;
        }
     }
});

export const { setSelection, resetSelection, setSelectionToNone } = selectedInputSlice.actions;

export default selectedInputSlice.reducer;