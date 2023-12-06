import { Status } from "../types/guess"

interface StatusInputProps {
    id: number,
    onStatusChange: (id: number, status: Status) => void
}

export default function StatusInput({ id, onStatusChange }: StatusInputProps) {    
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
                    onChange={(handleChange)}
                />
            </span>
        </>
    )
}