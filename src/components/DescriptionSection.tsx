import './DescriptionSection.css';


export default function DescriptionSection() {    
        
    return (
        <section>
            <p>This little app helps solving Wordle puzzles.</p>
            <p>Just enter the word you guessed and the result the Wordle gave you, and you get back a list of possible solutions!</p>
            <p>I mainly wrote this app for training my React and Typescript skills. So it is, you guessed right, written with React and Typescript.</p>
            <p>Possible improvements include the possibility to enter a second (third...) guess, and the translation to German. I will also try to use Redux under the hood just for learning purposes.</p>

        </section>
    )
}