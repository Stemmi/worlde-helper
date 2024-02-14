import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type Status = 'unknown' | 'correct' | 'wrong' | 'different_position';

export interface GuessedLetter {
    id: number,
    letter: string,
    status: Status,
    used?: boolean
}

// export type GuessedWordState = GuessedLetter[];

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
        // Write reducers here
    }
});