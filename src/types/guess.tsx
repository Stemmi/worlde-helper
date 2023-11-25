export interface Guess {
    id: number,
    letter: string,
    status: 'unknown' | 'correct' | 'wrong' | 'different_position'
}

export type Status = 'unknown' | 'correct' | 'wrong' | 'different_position';