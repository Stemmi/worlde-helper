import { useState } from 'react';
import './WordleSection.css';
import LetterInput from './LetterInput';
import StatusInput from './StatusInput';
import { Guess } from '../types/guess';
// import { ChangeEvent } from '../types/events';

const defaultGuess: Guess[] = [
    { id: 0, letter: '', status: 'unknown' },
    { id: 1, letter: '', status: 'wrong' },
    { id: 2, letter: '', status: 'correct' },
    { id: 3, letter: '', status: 'different_position' },
    { id: 4, letter: '', status: 'unknown' }
];

export default function WordleSection() {    
    const [ guessedWord, setGuessedWord ] = useState(defaultGuess);

    function handleLetterChange(id: number, letter: string) {
        const newGuessedWord = [...guessedWord];
        newGuessedWord[id].letter = letter.toUpperCase();
        setGuessedWord(newGuessedWord);
        console.log(guessedWord);
    }

    const guessLettersRow = guessedWord.map((guess) => 
        <td key={guess.id}>
            <LetterInput
                guess={guess}
                onLetterChange={handleLetterChange}
            />
        </td>
    );

    const guessStatusRow = guessedWord.map((guess) => 
        <td key={guess.id}>
            <StatusInput id={guess.id} />
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