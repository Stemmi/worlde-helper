// import { Status } from '../types/guess';
// import { useRef } from 'react';
import { Guess } from '../types/guess';
import { ChangeEvent } from '../types/events';

interface LetterInputProps {
    guess: Guess
    inputRef: React.MutableRefObject<null>
    // isSelected: boolean
    onLetterChange: (id: number, letter: string) => void
}

export default function LetterInput({ guess, inputRef, onLetterChange }: LetterInputProps) {
    // const inputRef = useRef(null);

    function handleChange(event: ChangeEvent) {
        event.preventDefault();
        onLetterChange(guess.id, event.target.value);
        // event.target.blur();
        // select next
    }

    // if (isSelected) inputRef.current.focus();

    return (
        <input
            ref={inputRef}
            type="text"
            size={1}
            className={"wordle_input "+guess.status}
            // placeholder={guess.letter}
            value={guess.letter}
            onChange={handleChange}
        />
    )
}