import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

export default function ResultDiv() {    
    const result = useSelector((state: RootState) => state.result);
    
    const listItems = result.map((word: string, index: number) => 
        <li key={index}>
            {word}
        </li>
    );

    return (
        <div>
            <ul>
                {listItems}
            </ul>
        </div>
    )
}