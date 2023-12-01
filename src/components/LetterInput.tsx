import { useRef } from 'react';
import { Guess } from '../types/guess';

interface LetterInputProps {
    guess: Guess
    onLetterChange: (id: number, letter: string) => void
}

export default function LetterInput({ guess, onLetterChange }: LetterInputProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault();
        onLetterChange(guess.id, event.target.value);
        // event.target.blur();
        // select next
    }

    function handleHover() {
        inputRef.current?.focus();
    }

    return (
        <input
            ref={inputRef}
            autoFocus={guess.id===0}
            type="text"
            size={1}
            className={"wordle_input "+guess.status}
            // placeholder={guess.letter}
            value={guess.letter}
            onChange={handleChange}
            onMouseEnter={handleHover} // remove
        />
    )
}