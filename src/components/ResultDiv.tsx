interface ResultDivProps {
    result: string[]
}

export default function ResultDiv({ result }: ResultDivProps) {    
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