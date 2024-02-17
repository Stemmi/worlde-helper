import LetterInput from './LetterInput';
import StatusInput from './StatusInput';

import type { RootState } from '../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { updateLetterValue, updateLetterStatus } from '../features/guessedWord/guessedWordSlice';
// import { updateLetterValue, updateLetterStatus, reset } from '../features//guessedWord/guessedWordSlice';


interface WordleTableProps {
    // guessedWord: Guess[]
    selectedInput: number | undefined
    // onLetterChange: (id: number, letter: string) => void
    onInputSelection: (id: number | undefined) => void
    // onStatuschange: (id: number, status: Status) => void
}

export default function WordleTable({ selectedInput, onInputSelection }: WordleTableProps) {    
    const guessedWord = useSelector((state: RootState) => state.guessedWord);
    const dispatch = useDispatch();

    function handleSelection(id: number) {
        onInputSelection(id);
    }

    function handleDeselection(id: number) {
        if (selectedInput === id) onInputSelection(undefined);
    }

    const guessLettersRow = guessedWord.map((guess) => 
        <td key={guess.id}>
            <LetterInput
                isSelected={selectedInput===guess.id}
                guess={guess}
                onLetterChange={(payload)=>dispatch(updateLetterValue(payload))}
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