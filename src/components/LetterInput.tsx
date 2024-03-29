import { useRef, useEffect, useState } from 'react';
import type { GuessedLetter } from '../features/guessedWordSlice';

export interface OnLetterChangeProps {
    id: number
    letter: string
}

interface LetterInputProps {
    guess: GuessedLetter
    isSelected: boolean
    onLetterChange: ({ id, letter }: OnLetterChangeProps) => void
    onSelect: (id: number) => void
    onDeselect: (id: number) => void
}

export default function LetterInput({ guess, isSelected, onLetterChange, onSelect, onDeselect }: LetterInputProps) {
    const inputReference = useRef<HTMLInputElement>(null);
    const [ inputValue, setInputValue ] = useState(guess.letter);
    
    useEffect(() => {
        if (isSelected) {
            inputReference.current?.focus();
            setInputValue('');
        } else {
            inputReference.current?.blur();
            setInputValue(guess.letter);
        }
    }, [isSelected, guess.letter])

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault();
        onLetterChange({
            id: guess.id,
            letter: event.target.value
        });
    }

    function handleFocus() {
        onSelect(guess.id);
    }

    function handleBlur() {
        onDeselect(guess.id);
    }
    
    return (
        <input
            ref={inputReference}
            type="text"
            size={1}
            maxLength={1}
            className={"wordle_input "+guess.status}
            placeholder={guess.letter}
            value={inputValue}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
        />
    )
}