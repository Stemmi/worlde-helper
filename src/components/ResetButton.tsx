import { useDispatch } from 'react-redux';
import { resetGuessedWord } from '../features/guessedWordSlice';
import { resetSelection } from '../features/selectedInputSlice';
import { resetResult } from '../features/resultSlice';

export default function ResetButton() {   
    const dispatch = useDispatch();

    function handleReset() {
        dispatch(resetGuessedWord());
        dispatch(resetSelection());
        dispatch(resetResult());
    }

    return (
        <button onClick={handleReset} >Reset</button>
    )
}