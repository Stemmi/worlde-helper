import { Status } from '../types/guess';

interface LetterInputProps {
    letter: string,
    status: Status
}

export default function LetterInput({ letter, status = 'unknown' }: LetterInputProps) {
    return (
        <input
            type="text"
            size={1}
            className={"wordle_input "+status}
            placeholder={letter}
        />
    )
}