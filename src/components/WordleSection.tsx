import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import './WordleSection.css';
import WordleTable from './WordleTable';
import ResultDiv from './ResultDiv';
import { findWords } from '../services/wordService';
import { reset } from '../features/guessedWordSlice';
import { resetSelection } from '../features/selectedInputSlice';
import type { RootState } from '../app/store';

export default function WordleSection() {   
    const guessedWord = useSelector((state: RootState) => state.guessedWord);
    const selectedInput = useSelector((state: RootState) => state.selectedInput);
    const dispatch = useDispatch();
    
    // const [ selectedInput, setSelectedInput ] = useState<number | undefined>(0);
    const [ result, setResult ] = useState<string[]>([]);

    // function handleLetterChange(id: number, letter: string) {
    //     const pattern = /[a-zA-Z]/;
    //     if (!pattern.test(letter)) return;
    //     const newGuessedWord = guessedWord.map(obj => ({...obj}));
    //     newGuessedWord[id].letter = letter.toUpperCase();
    //     selectNext();
    //     setGuessedWord(newGuessedWord);
    // }

    // function handleStatusChange(id: number, status: Status) {
    //     const newGuessedWord = guessedWord.map(obj => ({...obj}));
    //     newGuessedWord[id].status = status;
    //     setGuessedWord(newGuessedWord);
    // }

    function handleOk() { 
        setResult(findWords(guessedWord));
    }

    function handleReset() {
        dispatch(reset());
        dispatch(resetSelection());
        setResult([]);
    }

    return (
        <section>
            <WordleTable
                // guessedWord={guessedWord}
                selectedInput={selectedInput}
                // onInputSelection={handleSelection}
            />
            <div className="button_container">
                <button onClick={handleOk}>OK</button>
                <button onClick={handleReset} >Reset</button>
            </div>
            <ResultDiv result={result} />
        </section>
    )
}