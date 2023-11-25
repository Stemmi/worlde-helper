import { useState } from 'react';
import './WordleSection.css';
import LetterInput from './LetterInput';
import StatusInput from './StatusInput';
import { Guess } from '../types/guess';

const defaultGuess: Guess[] = [
    { id: 1, letter: 'G', status: 'unknown' },
    { id: 2, letter: 'U', status: 'wrong' },
    { id: 3, letter: 'E', status: 'correct' },
    { id: 4, letter: 'S', status: 'different_position' },
    { id: 5, letter: 'S', status: 'unknown' }
];

export default function WordleSection() {    
    const [ guessedWord ] = useState(defaultGuess);
    // const [ guessedWord, setGuessedWord ] = useState(defaultGuess);

    const guessLettersRow = guessedWord.map((guess) => 
        <td key={guess.id}>
            <LetterInput letter={guess.letter} status={guess.status}/>
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