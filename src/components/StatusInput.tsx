import { Status } from "../types/guess"

interface StatusInputProps {
    id: number,
    status: Status,
    onStatusChange: (id: number, status: Status) => void
}

export default function StatusInput({ id, status, onStatusChange }: StatusInputProps) {    
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        onStatusChange(id, event.target.value as Status)
    }
    
    return (
        <>
            <span className="correct">
                <input // this should be focused after setting the last letter
                    className="status_input"
                    type="radio"
                    id="correct"
                    name={"guess_status"+id}
                    value="correct"
                    checked={status==='correct'}
                    onChange={(handleChange)}
                />
            </span><br />
            <span className="different_position">
                <input
                    className="status_input"
                    type="radio"
                    id="different_position"
                    name={"guess_status"+id}
                    value="different_position"
                    checked={status==='different_position'}
                    onChange={(handleChange)}
                />
            </span><br />
            <span className="wrong">
                <input
                    className="status_input"
                    type="radio"
                    id="wrong"
                    name={"guess_status"+id}
                    value="wrong"
                    checked={status==='wrong'}
                    onChange={(handleChange)}
                />
            </span>
        </>
    )
}