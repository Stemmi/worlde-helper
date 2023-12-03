import { useRef, useEffect } from 'react';
import { Guess } from '../types/guess';

interface LetterInputProps {
    guess: Guess
    isSelected: boolean
    onLetterChange: (id: number, letter: string) => void
    onSelect: (id: number) => void
}

export default function LetterInput({ guess, isSelected, onLetterChange, onSelect }: LetterInputProps) {
    const inputReference = useRef<HTMLInputElement>(null);
    
    useEffect(() => {
        if (isSelected) {
            inputReference.current?.focus();
        }
    }, [isSelected])

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault();
        onLetterChange(guess.id, event.target.value);
        // event.target.blur();
        // select next
    }

    function handleClick(event: React.MouseEvent<HTMLInputElement>) {
        event.preventDefault();
        onSelect(guess.id);
    }
    
    return (
        <input
            ref={inputReference}
            type="text"
            size={1}
            className={"wordle_input "+guess.status}
            placeholder={isSelected ? guess.letter : ""}
            value={isSelected ? "" : guess.letter}
            onChange={handleChange}
            onClick={handleClick}
        />
    )
}