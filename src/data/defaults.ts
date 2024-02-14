import { Guess } from "../types/guess";

const defaultGuess: Guess[] = [
    { id: 0, letter: '', status: 'unknown' },
    { id: 1, letter: '', status: 'unknown' },
    { id: 2, letter: '', status: 'unknown' },
    { id: 3, letter: '', status: 'unknown' },
    { id: 4, letter: '', status: 'unknown' }
];

export { defaultGuess };

// can be deleted? use initialState instead