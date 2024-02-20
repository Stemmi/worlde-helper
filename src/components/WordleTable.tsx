import { useSelector, useDispatch } from 'react-redux';

import { updateLetterValue, updateLetterStatus } from '../features/guessedWordSlice';
import { setSelection, setSelectionToNone, selectNext } from '../features/selectedInputSlice';

import LetterInput from './LetterInput';
import StatusInput from './StatusInput';

import type { RootState } from '../app/store';
import type { OnLetterChangeProps } from './LetterInput';

export default function WordleTable() {    
    const guessedWord = useSelector((state: RootState) => state.guessedWord);
    const selectedInput = useSelector((state: RootState) => state.selectedInput);
    const dispatch = useDispatch();

    function handleSelection(id: number | undefined) {
        dispatch(setSelection(id));
    }

    function handleDeselection(id: number) {
        if (selectedInput === id) dispatch(setSelectionToNone());
    }

    function handleLetterChange(payload: OnLetterChangeProps) {
        const pattern = /[a-zA-Z]/;
        if (pattern.test(payload.letter)) {
            dispatch(updateLetterValue(payload));
            dispatch(selectNext());
        }
    }

    const guessLettersRow = guessedWord.map((guess) => 
        <td key={guess.id}>
            <LetterInput
                isSelected={selectedInput===guess.id}
                guess={guess}
                onLetterChange={(payload)=>handleLetterChange(payload)}
                onSelect={handleSelection}
                onDeselect={handleDeselection}
            />
        </td>
    );

    const guessStatusRow = guessedWord.map((guess) => 
        <td key={guess.id}>
            <StatusInput
                id={guess.id}
                status={guess.status}
                onStatusChange={(payload)=>dispatch(updateLetterStatus(payload))}
            />
        </td>
    );

    return (
        <table><tbody>
            <tr>
                {guessLettersRow}
            </tr>
            <tr>
                {guessStatusRow}
            </tr>
        </tbody></table>
    )
}