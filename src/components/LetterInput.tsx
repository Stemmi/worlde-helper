import { forwardRef } from 'react';
import { Guess } from '../types/guess';

interface LetterInputProps {
    guess: Guess
    onLetterChange: (id: number, letter: string) => void
}

const LetterInput = forwardRef(({ guess, onLetterChange }: LetterInputProps, ref) => {
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault();
        onLetterChange(guess.id, event.target.value);
        // event.target.blur();
        // select next
    }
    
    return (
        <input
            ref={ref}
            autoFocus={guess.id===0}
            type="text"
            size={1}
            className={"wordle_input "+guess.status}
            // placeholder={guess.letter}
            value={guess.letter}
            onChange={handleChange}
        />
    )
    
    // return <input {...props} ref={ref} />;
});

export default LetterInput;