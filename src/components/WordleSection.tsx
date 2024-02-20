import { useSelector, useDispatch } from 'react-redux';

import { reset } from '../features/guessedWordSlice';
import { resetSelection } from '../features/selectedInputSlice';
import { resetResult } from '../features/resultSlice';
import { updateResult } from '../features/resultSlice';

import './WordleSection.css';

import WordleTable from './WordleTable';
import ResultDiv from './ResultDiv';

import type { RootState } from '../app/store';

export default function WordleSection() {   
    const guessedWord = useSelector((state: RootState) => state.guessedWord);
    const dispatch = useDispatch();
    
    function handleOk() {
        dispatch(updateResult(guessedWord));
    }

    function handleReset() {
        dispatch(reset());
        dispatch(resetSelection());
        dispatch(resetResult());
    }

    return (
        <section>
            <WordleTable />
            <div className="button_container">
                <button onClick={handleOk}>OK</button>
                <button onClick={handleReset} >Reset</button>
            </div>
            <ResultDiv />
        </section>
    )
}