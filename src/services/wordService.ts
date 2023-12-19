import { words } from '../data/words';
import { Guess } from '../types/guess';

function findWords(guessedWord: Guess[]) {
    const allWords = [...words];
    console.log('words @ start', allWords);

    const filteredCorrect = filterCorrectLetters(allWords, guessedWord) // returns object: {remainingWords, guess}
    // const filteredDiffPos = filterDifferentPositionLetters(filteredCorrect.remainingWords, filteredCorrect.guess)
    // const filteredWrong = filterWrongLetters(filteredDiffPos.remainingWords, filteredDiffPos.guess)
    // return filteredWrong.remainingWords;    
    
    const result = filteredCorrect.remainingWords;

    // let result = [...words];
    // console.log('result @ start', result);
    // console.log('guessedWord', guessedWord);
    // const correctLetters = guessedWord.filter(letter => letter.status === 'correct');
    // correctLetters.forEach(correctLetter => {
    //     const foundWords = result.filter(word => word[correctLetter.id] === correctLetter.letter);
    //     result = foundWords;
    //     guessedWord[correctLetter.id].used = true;
    //     // console.log(guessedWord);
    
    // });
    // console.log('result after filtering correct letters', result);
    // console.log('correctLetters', correctLetters);

    // Check for “different position”:
    // Create an array „differentPosition”
    // const differentPositionLetters = guessedWord.filter(letter => letter.status === 'different_position');
    // differentPositionLetters;
    
    // for (const word of result) {
    //     word;
    // }

    // Check for each guess of this array:
    // Does the word have the guessed letter at this position? à discard word
    // Does the word have the guessed letter at any other position that is not already used?
    // If not: à discard word.
    // If yes: Mark that position as used and move to the next dp-position.
    // After the last position: keep the word.
    
    // Check for “wrong”:
    // Create an array “wrong”.
    // Check for each guess of that array:
    // Does it have this letter at any unused position?
    // If yes, discard word.
    // Else, keep.


    console.log('final result', result);
   
    return result;
}

function filterCorrectLetters(words: string[], guessedWord: Guess[]) {
    let remainingWords = [...words];
    const guess: Guess[] = JSON.parse(JSON.stringify(guessedWord));

    const correctLetters = guess.filter(letter => letter.status === 'correct');
    correctLetters.forEach(correctLetter => {
        const foundWords = remainingWords.filter(word => word[correctLetter.id] === correctLetter.letter);
        remainingWords = foundWords;
        guess[correctLetter.id].used = true;
        // console.log(guessedWord);
    
    });

    return {
        remainingWords,
        guess
    }
}


export { findWords };