export type Status = 'unknown' | 'correct' | 'wrong' | 'different_position';

export interface Guess {
    id: number,
    letter: string,
    status: Status
}