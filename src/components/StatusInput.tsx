export default function StatusInput({ id }: { id: number }) {    
    return (
        <>
            <span className="correct">
                <input
                    className="status_input"
                    type="radio"
                    id="correct"
                    name={"guess_status"+id}
                    value="correct"
                />
            </span><br />
            <span className="different_position">
                <input
                    className="status_input"
                    type="radio"
                    id="different_position"
                    name={"guess_status"+id}
                    value="different_position"
                />
            </span><br />
            <span className="wrong">
                <input
                    className="status_input"
                    type="radio"
                    id="wrong"
                    name={"guess_status"+id}
                    value="wrong"
                />
            </span>
        </>
    )
}