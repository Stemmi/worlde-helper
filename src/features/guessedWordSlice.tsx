import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

export type Status = 'unknown' | 'correct' | 'wrong' | 'different_position';

export interface GuessedLetter {
    id: number,
    letter: string,
    status: Status,
    used?: boolean
}

// export type GuessedWordState = GuessedLetter[];

// function handleLetterChange(id: number, letter: string) {
//     const pattern = /[a-zA-Z]/;
//     if (!pattern.test(letter)) return;
//     const newGuessedWord = guessedWord.map(obj => ({...obj}));
//     newGuessedWord[id].letter = letter.toUpperCase();
//     selectNext();
//     setGuessedWord(newGuessedWord);
// }

// function handleStatusChange(id: number, status: Status) {
//     const newGuessedWord = guessedWord.map(obj => ({...obj}));
//     newGuessedWord[id].status = status;
//     setGuessedWord(newGuessedWord);
// }

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
            const pattern = /[a-zA-Z]/;
            if (!pattern.test(letter)) return state;
            state[id].letter = letter.toUpperCase();
            return state;
        },
        updateLetterStatus: (state, action) => {
            const id = action.payload.id;
            const status = action.payload.status;
            state[id].status = status;         
            return state;
        },
        reset: () => {
            return initialState;
        }
    }
});

export const { updateLetterValue, updateLetterStatus, reset } = guessedWordSlice.actions;

export default guessedWordSlice.reducer;