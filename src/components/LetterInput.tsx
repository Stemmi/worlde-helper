import { useRef, useEffect } from "react";
import type { GuessedLetter } from "../features/guessedWordSlice";

export interface OnLetterChangeProps {
  id: number;
  letter: string;
}

interface LetterInputProps {
  guess: GuessedLetter;
  isSelected: boolean;
  onLetterChange: ({ id, letter }: OnLetterChangeProps) => void;
  onSelect: (id: number) => void;
  onDeselect: (id: number) => void;
}

export default function LetterInput({
  guess,
  isSelected,
  onLetterChange,
  onSelect,
  onDeselect,
}: LetterInputProps) {
  const inputReference = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSelected) {
      inputReference.current?.focus();
    } else {
      inputReference.current?.blur();
    }
  }, [isSelected]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    onLetterChange({
      id: guess.id,
      letter: event.target.value,
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
      className={"wordle_input " + guess.status}
      placeholder={guess.letter}
      value={isSelected ? "" : guess.letter}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
}
