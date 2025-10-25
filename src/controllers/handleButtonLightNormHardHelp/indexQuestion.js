import { returnWorkArray } from './returnWorkArray.js';

export function indexQuestion()
{
    const index = localStorage.getItem('randomEl');
    return returnWorkArray()[index];
}