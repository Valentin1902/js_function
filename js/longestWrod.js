export default function findLongestWord(value){
const words = value.split(" ");
let longestWord = words[0];
for (const word of words ){
    if (word.length > longestWord.length ){
console.log(word, word.length);
        longestWord = word;

    }
}
return longestWord;
}

