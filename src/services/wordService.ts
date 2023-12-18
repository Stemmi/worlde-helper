import { words } from '../data/words';
import { Guess } from '../types/guess';

function findWords(guessedWord: Guess[]) {
    let result = [...words];
    console.log('result @ start', result);
    console.log('guessedWord', guessedWord);
    const correctLetters = guessedWord.filter(letter => letter.status === 'correct');
    correctLetters.forEach(correctLetter => {
        const foundWords = result.filter(word => word[correctLetter.id] === correctLetter.letter);
        result = foundWords;
    });
    // create arrays of diffpos
    // search for letters one by one and filter the array

    // create arrays of wrong letters
    // search for letters one by one and filter the array

    console.log('correctLetters', correctLetters);
    console.log('result', result);
   
    return result;
}

export { findWords };