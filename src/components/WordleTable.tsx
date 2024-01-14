// import './WordleSection.css';
import LetterInput from './LetterInput';
import StatusInput from './StatusInput';
import { Guess, Status } from '../types/guess';

interface WordleTableProps {
    guessedWord: Guess[]
    selectedInput: number | undefined
    onLetterChange: (id: number, letter: string) => void
    onInputSelection: (id: number | undefined) => void
    onStatuschange: (id: number, status: Status) => void
}

export default function WordleTable({guessedWord, selectedInput, onLetterChange, onInputSelection, onStatuschange}: WordleTableProps) {    

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
                onLetterChange={onLetterChange}
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
                onStatusChange={onStatuschange}
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