import { words } from '../data/words';
import { Guess } from '../types/guess';

function findWords(guessedWord: Guess[]) {
    return words.filter(word => checkCorrectGuesses(word, guessedWord)
                                && checkIncorrectGuesses(word, guessedWord));
}

function checkCorrectGuesses(word: string, guessedWord: Guess[]) {
    const correctGuesses = guessedWord.filter(guess => guess.status === 'correct');
    for (const correctGuess of correctGuesses) {
        if (word[correctGuess.id] !== correctGuess.letter) {
            return false;
        }
    }
    return true;
}

function checkIncorrectGuesses(word: string, guessedWord: Guess[]) {
    console.log('word', word);
    
    const blockedLetterIds = guessedWord.filter(guess => guess.status === 'correct').map(guess => guess.id);
    console.log('blockedLetterIds', blockedLetterIds);

    const differentPositionGuesses = guessedWord.filter(guess => guess.status === 'different_position');
    for (const guess of differentPositionGuesses) {
        console.log('guess', guess);
            for (let letterId = 0; letterId < word.length; letterId++) {
                if (blockedLetterIds.includes(letterId) || guess.id === letterId) {
                    continue;
                }
                console.log('letterId', letterId);

                if (guess.letter === word[letterId]) {
                    console.log('found!', guess.letter);
                    blockedLetterIds.push(letterId);
                    // now record that this guess is ok. move on to next guess.
                    // also make sure that if no matching letter for this guess was found, the whole word is invalid.

                }
                
                
            }
        
        
    }
    
    // filter: wrong letters. Loop.
    // check if the letter is somewhere else.
    // How to do that?

    return !!(word && guessedWord); // CHANGE THIS
}

export { findWords };