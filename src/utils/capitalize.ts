'use client'
export const capitalize = (word: string): string => {
    const splitWord = word.split(" "), wordArray = splitWord.map(word => (word.length < 4) ? word  : `${word.toString().toUpperCase()[0]}${word.toString().toLowerCase().slice(1)}`);
    return `${wordArray.join(" ")}`
}