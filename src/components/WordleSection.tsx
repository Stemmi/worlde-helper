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
    const [ selectedInput, setSelectedInput ] = useState(0);

    function handleLetterChange(id: number, letter: string) {
        const newGuessedWord = [...guessedWord];
        newGuessedWord[id].letter = letter.toUpperCase();
        selectNext();

        setGuessedWord(newGuessedWord);
        // const focusId = id < 4 ? id + 1 : 0;
    }

    function selectNext() {
        const nextInput = selectedInput >= 4 ? 0 : selectedInput + 1;
        console.log('nextInput', nextInput)
        setSelectedInput(nextInput);
    }

    function handleSelection(id: number) {
        console.log('selected '+id);
        setSelectedInput(id);
    }

    const guessLettersRow = guessedWord.map((guess) => 
        <td key={guess.id} autoFocus>
            <LetterInput
                isSelected={selectedInput===guess.id}
                guess={guess}
                onLetterChange={handleLetterChange}
                onSelect={handleSelection}
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