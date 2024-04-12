import { useSelector, useDispatch } from 'react-redux';
import { updateResult } from '../features/resultSlice';
import type { RootState } from '../app/store';

export default function OkButton() {   
    const guessedWord = useSelector((state: RootState) => state.guessedWord);
    const dispatch = useDispatch();
    
    function handleOk() {
        dispatch(updateResult(guessedWord));
    }

    return (
        <button onClick={handleOk}>OK</button>
    )
}