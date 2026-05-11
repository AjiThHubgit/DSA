function reverseSentence(str) {
    let strArr = str.split(' ');

    let result = [];

    for (let i = 0; i < strArr.length; i++) {
        let word = strArr[i];

        // Reverse word
        word = word.split('').reverse().join('');

        // Capitalize only if original word is "javascript"
        if (strArr[i] === 'javascript') {
            word = word[0].toUpperCase() + word.slice(1);
        }

        result.push(word);
    }

    return result.join(' ');
}

console.log(reverseSentence("javascript loves you"));