import { useState } from 'react';
import './WordleSection.css';
import LetterInput from './LetterInput';
import StatusInput from './StatusInput';
import { Guess, Status } from '../types/guess';

const defaultGuess: Guess[] = [
    { id: 0, letter: '', status: 'unknown' },
    { id: 1, letter: '', status: 'unknown' },
    { id: 2, letter: '', status: 'unknown' },
    { id: 3, letter: '', status: 'unknown' },
    { id: 4, letter: '', status: 'unknown' }
];

export default function WordleSection() {    
    const [ guessedWord, setGuessedWord ] = useState(defaultGuess);
    const [ selectedInput, setSelectedInput ] = useState<number | undefined>(0);

    function handleLetterChange(id: number, letter: string) {
        const pattern = /[a-zA-Z]/;
        if (!pattern.test(letter)) return;
        const newGuessedWord = [...guessedWord];
        newGuessedWord[id].letter = letter.toUpperCase();
        selectNext();
        setGuessedWord(newGuessedWord);
    }

    function selectNext() {
        if (selectedInput === undefined) {
            return;
        } else if (selectedInput >= 4) {
            setSelectedInput(undefined);
        } else {
            const nextInput = selectedInput + 1;
            setSelectedInput(nextInput);
        }
    }

    function handleSelection(id: number) {
        setSelectedInput(id);
    }

    function handleDeselection(id: number) {
        if (selectedInput === id) setSelectedInput(undefined);
    }

    function handleStatusChange(id: number, status: Status) {
        const newGuessedWord = [...guessedWord];
        newGuessedWord[id].status = status;
        setGuessedWord(newGuessedWord);
    }

    const guessLettersRow = guessedWord.map((guess) => 
        <td key={guess.id}>
            <LetterInput
                isSelected={selectedInput===guess.id}
                guess={guess}
                onLetterChange={handleLetterChange}
                onSelect={handleSelection}
                onDeselect={handleDeselection}
            />
        </td>
    );

    const guessStatusRow = guessedWord.map((guess) => 
        <td key={guess.id}>
            <StatusInput
                id={guess.id}
                onStatusChange={handleStatusChange}
            />
        </td>
    );

    return (
        <section>
            <table><tbody>
                <tr>
                    {guessLettersRow}
                </tr>
                <tr>
                    {guessStatusRow}
                </tr>
            </tbody></table>
        </section>
    )
}