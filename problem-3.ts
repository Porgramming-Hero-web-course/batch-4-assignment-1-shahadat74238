const countWordOccurrences = (sentence: string, word: string): number => {

    const lowerCaseSentence = sentence.toLowerCase();
    const lowerCaseWord = word.toLowerCase();

    const words = lowerCaseSentence.split(' ');
    const occurrences = words.filter(w => w === lowerCaseWord).length;

    return occurrences;
};

const sentence = "I love typescript";
const word = "typescript";
console.log(countWordOccurrences(sentence, word)); 
