import { createSlice } from '@reduxjs/toolkit'

export type Status = 'unknown' | 'correct' | 'wrong' | 'different_position';

export interface GuessedLetter {
    id: number,
    letter: string,
    status: Status
}

const initialState: GuessedLetter[] = [
    { id: 0, letter: '', status: 'unknown' },
    { id: 1, letter: '', status: 'unknown' },
    { id: 2, letter: '', status: 'unknown' },
    { id: 3, letter: '', status: 'unknown' },
    { id: 4, letter: '', status: 'unknown' }
];

export const guessedWordSlice = createSlice({
    name: 'guessedWord',
    initialState,
    reducers: {
        updateLetterValue: (state, action) => {
            const id = action.payload.id;
            const letter = action.payload.letter;
            state[id].letter = letter.toUpperCase();
        },
        updateLetterStatus: (state, action) => {
            const id = action.payload.id;
            const status = action.payload.status;
            state[id].status = status;
        },
        resetGuessedWord: () => {
            return initialState;
        }
    }
});

export const { updateLetterValue, updateLetterStatus, resetGuessedWord } = guessedWordSlice.actions;

export default guessedWordSlice.reducer;