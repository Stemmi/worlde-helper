// import { Status } from '../types/guess';
// import { useRef } from 'react';
import { Guess } from '../types/guess';
import { ChangeEvent } from '../types/events';

interface LetterInputProps {
    guess: Guess
    // inputRef: React.MutableRefObject<null>
    onLetterChange: (id: number, letter: string) => void
}

export default function LetterInput({ guess, onLetterChange }: LetterInputProps) {
    function handleChange(event: ChangeEvent) {
        event.preventDefault();
        onLetterChange(guess.id, event.target.value);
        // event.target.blur();
        // select next
    }

    return (
        <input
            type="text"
            size={1}
            className={"wordle_input "+guess.status}
            // placeholder={guess.letter}
            value={guess.letter}
            onChange={handleChange}
        />
    )
}