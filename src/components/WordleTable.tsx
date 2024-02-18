import { useSelector, useDispatch } from 'react-redux';

import { updateLetterValue, updateLetterStatus } from '../features/guessedWordSlice';
import { setSelection, setSelectionToNone } from '../features/selectedInputSlice';

import LetterInput from './LetterInput';
import StatusInput from './StatusInput';

import type { RootState } from '../app/store';
import type { OnLetterChangeProps } from './LetterInput';

// import type { GuessedLetter } from '../features/guessedWordSlice';

interface WordleTableProps {
    // guessedWord: Guess[]
    selectedInput: number | undefined
    // onLetterChange: (id: number, letter: string) => void
    // onInputSelection: (id: number | undefined) => void
    // onStatuschange: (id: number, status: Status) => void
}



export default function WordleTable({ selectedInput }: WordleTableProps) {    
    const guessedWord = useSelector((state: RootState) => state.guessedWord);
    const dispatch = useDispatch();

    function handleSelection(id: number | undefined) {
        dispatch(setSelection(id));
    }

    function handleLetterChange(payload: OnLetterChangeProps) {
        dispatch(updateLetterValue(payload));
    }

    // function selectNext() {
    //     if (selectedInput === undefined) {
    //         return;
    //     } else if (selectedInput >= 4) {
    //         dispatch(setSelectionToNone());
    //     } else {
    //         const nextInput = selectedInput + 1;
    //         dispatch(setSelection(nextInput));
    //     }
    // }

    function handleDeselection(id: number) {
        if (selectedInput === id) dispatch(setSelectionToNone());
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