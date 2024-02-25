module.exports = words => {
  return new Promise((resolve, reject) => {
    try {
      const groupedWords = words.reduce((myHash, word) => {
        if (myHash[word]) {
          myHash[word]++;
        } else {
          myHash[word] = 1
        }
        return myHash;
      }, {});

      const groupedWordsArray = 
        Object.keys(groupedWords)
        .map(key => ({
          word: key,
          amount: groupedWords[key]
        }))
        .sort((w1, w2) => w2.amount - w1.amount)

      resolve(groupedWordsArray);
    } catch (e) {
      reject(e);
    }
  })
}