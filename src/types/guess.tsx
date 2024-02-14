export type Status = 'unknown' | 'correct' | 'wrong' | 'different_position';

export interface Guess {
    id: number,
    letter: string,
    status: Status,
    used?: boolean
}

// Use type declarations from features/guessedWord instead!