import { useState } from 'react';
import './WordleSection.css';
import WordleTable from './WordleTable';
import ResultDiv from './ResultDiv';
import { findWords } from '../services/wordService';
import { defaultGuess } from '../data/defaults';

export default function WordleSection() {    
    const [ guessedWord, setGuessedWord ] = useState(defaultGuess.map(obj => ({...obj})));
    const [ selectedInput, setSelectedInput ] = useState<number | undefined>(0);
    const [ result, setResult ] = useState<string[]>([]);

    // function handleLetterChange(id: number, letter: string) {
    //     const pattern = /[a-zA-Z]/;
    //     if (!pattern.test(letter)) return;
    //     const newGuessedWord = guessedWord.map(obj => ({...obj}));
    //     newGuessedWord[id].letter = letter.toUpperCase();
    //     selectNext();
    //     setGuessedWord(newGuessedWord);
    // }

    // function selectNext() {
    //     if (selectedInput === undefined) {
    //         return;
    //     } else if (selectedInput >= 4) {
    //         setSelectedInput(undefined);
    //     } else {
    //         const nextInput = selectedInput + 1;
    //         setSelectedInput(nextInput);
    //     }
    // }

    function handleSelection(id: number | undefined) {
        setSelectedInput(id);
    }

    // function handleStatusChange(id: number, status: Status) {
    //     const newGuessedWord = guessedWord.map(obj => ({...obj}));
    //     newGuessedWord[id].status = status;
    //     setGuessedWord(newGuessedWord);
    // }

    function handleOk() { 
        setResult(findWords(guessedWord));
    }

    function handleReset() {
        const resettedGuess = defaultGuess.map(obj => ({...obj}));
        setGuessedWord(resettedGuess);
        setSelectedInput(0);
        setResult([]);
    }

    return (
        <section>
            <WordleTable
                // guessedWord={guessedWord}
                selectedInput={selectedInput}
                // onLetterChange={handleLetterChange}
                onInputSelection={handleSelection}
                // onStatuschange={handleStatusChange}
            />
            <div className="button_container">
                <button onClick={handleOk}>OK</button>
                <button onClick={handleReset} >Reset</button>
            </div>
            <ResultDiv result={result} />
        </section>
    )
}