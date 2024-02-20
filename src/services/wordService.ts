import { words } from './words';
import type { GuessedLetter } from '../features/guessedWordSlice';

function findWords(guessedWord: GuessedLetter[]) {
    return words.filter(word => checkCorrectGuesses(word, guessedWord)
                                && checkIncorrectGuesses(word, guessedWord));
}

function checkCorrectGuesses(word: string, guessedWord: GuessedLetter[]) {
    const correctGuesses = guessedWord.filter(guess => guess.status === 'correct');
    for (const correctGuess of correctGuesses) {
        if (word[correctGuess.id] !== correctGuess.letter) {
            return false;
        }
    }
    return true;
}

function checkIncorrectGuesses(word: string, guessedWord: GuessedLetter[]) {
    const blockedLetterIds = guessedWord.filter(guess => guess.status === 'correct').map(guess => guess.id);
    
    const differentPositionGuesses = guessedWord.filter(guess => guess.status === 'different_position');
    for (const guess of differentPositionGuesses) {
        let found = false;
        for (let letterId = 0; letterId < word.length; letterId++) {
            if (blockedLetterIds.includes(letterId) || guess.id === letterId) {
                continue;
            }

            if (guess.letter === word[letterId]) {
                blockedLetterIds.push(letterId);
                found = true;
                break;
            }
        }
        if (!found) {
            return false;
        }
    }

    const wrongGuesses = guessedWord.filter(guess => guess.status === 'wrong');
    for (const guess of wrongGuesses) {
        for (let letterId = 0; letterId < word.length; letterId++) {
            if (guess.letter === word[guess.id]) {
                return false;
            }
            
            if (blockedLetterIds.includes(letterId)) {
                continue;
            }
            
            if (guess.letter === word[letterId]) {
                return false;
            }
        }  
    }
    return true;
}

export { findWords };